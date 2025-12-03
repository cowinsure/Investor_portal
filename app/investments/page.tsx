/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CiLocationOn } from "react-icons/ci";
import { DollarSign, FolderKanban, Layers, FolderCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import useApi from "@/hooks/useApi";
import Section from "@/components/ui/Section";
import { useAuth } from "@/core/context/AuthContext";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

ChartJS.register(ArcElement, Tooltip, Legend);
type StatsValues = {
  currentInvested: number;
  totalInvested: number;
  activeProjects: number;
  closedProjects: number;
};

export interface Project {
  project_id: number;
  image: string;
  project_name: string;
  is_active: boolean;
  project_location: string;
  investments: {
    investment_amount: number;
  }[];
}

const StaticProjectsData = [
  {
    id: 1,
    title: "Green Valley Dairy Initiative",
    location: "Wisconsin, USA",
    investment: 250000,
    status: "Active",
    image: "./dairy_farm.jpg",
    description:
      "Sustainable dairy farming focused on organic milk production using free-range grazing techniques.",
  },
  {
    id: 2,
    title: "Highland Cattle Collective",
    location: "Scotland, UK",
    investment: 180000,
    status: "Active",
    image: "/dairy_farm.jpg",
    description:
      "Preservation and ethical breeding of Highland cattle for premium beef and wool markets.",
  },
  {
    id: 3,
    title: "Community Project 03",
    location: "Pakundia (Syed Ga)",
    investment: 1230000,
    status: "Completed",
    image: "/project32.jpg",
    description:
      "Community-driven cooperative farm specializing in grass-fed beef and regenerative agriculture.",
  },
];

export default function MyInvestments() {
  const { get } = useApi();
  const router = useRouter();
  const { userId, isAuthLoading } = useAuth();
  const [StatProjects] = useState(StaticProjectsData);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (!isAuthLoading && !userId) {
      router.push("/auth/login");
    }
  }, [isAuthLoading, userId, router]);

  useEffect(() => {
    // Fetch Project Data
    try {
      const fetchProjects = async () => {
        const res = await get(
          "/coms/project-service/?page_size=10&start_record=1&project_id=-1"
        );
        console.log(res);
        if (res.status === "success") {
          setProjects(res.data);
        }
      };

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  }, [get]);

  const totalInvested = StatProjects.reduce((sum, p) => sum + p.investment, 0);
  const activeProjects = projects.length;
  const closedProjects = StatProjects.filter(
    (p) => p.status !== "Active"
  ).length;
  const activeProjectsObj = StatProjects.filter((p) => p.status === "Active");

  const statsValues: StatsValues = {
    currentInvested: activeProjectsObj.reduce(
      (sum, p) => sum + p.investment,
      0
    ),
    totalInvested: totalInvested,
    activeProjects: activeProjects,
    closedProjects: closedProjects,
  };

  const statsData: {
    id: number;
    label: string;
    valueKey: keyof StatsValues;
    icon: string;
  }[] = [
    // {
    //   id: 1,
    //   label: "Current Invested",
    //   valueKey: "currentInvested",
    //   icon: "DollarSign",
    // },
    // {
    //   id: 2,
    //   label: "Total Invested",
    //   valueKey: "totalInvested",
    //   icon: "DollarSign",
    // },
    {
      id: 3,
      label: "Active Projects",
      valueKey: "activeProjects",
      icon: "FolderKanban",
    },
    {
      id: 4,
      label: "Completed Projects",
      valueKey: "closedProjects",
      icon: "FolderCheck",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons: Record<string, React.ComponentType<any>> = {
    DollarSign: DollarSign,
    FolderKanban: FolderKanban,
    FolderCheck: FolderCheck,
  };

  // const expenseChartData = {
  //   labels: ["Feed", "Labor", "Maintenance", "Medical", "Other"],
  //   datasets: [
  //     {
  //       data: [45, 25, 10, 8, 12],
  //       backgroundColor: [
  //         "#009F6B",
  //         "#0EB981",
  //         "#65D1A6",
  //         "#B7F4DB",
  //         "#004F3D",
  //       ],
  //     },
  //   ],
  // };

  return (
    <div className="p-4 lg:p-8 bg-linear-to-br from-emerald-50 via-white to-green-50 min-h-screen">
      <Section>
        {/* Header */}
        <div
          data-aos="fade-down"
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Investments</h1>
            <p className="text-gray-600 mt-1">
              Welcome back Investor. Heres your investment overview.
            </p>
          </div>

          {/* <button className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Download Report
          </button> */}
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {statsData.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-gray-600 font-medium">{item.label}</p>
                </div>

                <h2 className="text-3xl font-bold text-emerald-700">
                  {typeof statsValues[item.valueKey] === "number"
                    ? statsValues[item.valueKey].toLocaleString()
                    : statsValues[item.valueKey]}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Layout */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-1 gap-8 mt-8"
        >
          {/* Project list */}
          <div className="space-y-6 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-5">
              <Layers className="text-emerald-600" size={30} />
              Projects
            </h2>

            <div className="border p-6 rounded-2xl border-emerald-300">
              {/* Active Projects */}
              {projects.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-emerald-700 mb-4">
                    Active Projects : {projects.length}
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((p, idx) => (
                      <div
                        key={p.project_id}
                        data-aos="fade-up"
                        data-aos-delay={`${idx * 100}`}
                        className=" bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all overflow-hidden flex flex-col"
                      >
                        <img
                          src={"/project33.png"}
                          alt={p.project_name}
                          className="object-cover w-full h-72"
                          onError={(e) => {
                            e.currentTarget.src = "/farm2.png";
                          }}
                        />

                        <div className="p-4 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-900">
                              {p.project_name}
                            </h3>

                            <span
                              className={`${
                                p.is_active === false
                                  ? "bg-rose-100 text-rose-700"
                                  : "bg-emerald-100 text-emerald-700"
                              } text-sm font-semibold px-3 py-1 rounded-full`}
                            >
                              {p.is_active === true ? "Active" : "Completed"}
                            </span>
                          </div>

                          <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                            <CiLocationOn size={20} /> {p.project_location}
                          </p>
                          {/* 
                          <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                            {p.description}
                          </p> */}

                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-emerald-700">
                                  Investment on Project
                                </p>
                              </div>
                              <p className="font-bold text-2xl flex items-center">
                                <FaBangladeshiTakaSign
                                  size={23}
                                  className="-mb-1"
                                />
                                {p?.investments?.[0]?.investment_amount?.toLocaleString() ??
                                  "0"}
                              </p>
                            </div>

                            <button
                              onClick={() =>
                                router.push(
                                  `/investments/projects/${p.project_id}`
                                )
                              }
                              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition border border-green-300 px-4 py-3 rounded-lg cursor-pointer hover:bg-emerald-100 text-sm"
                            >
                              View Project
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Separator */}
              {/* {projects.filter((p) => p.status === "Active").length > 0 &&
                projects.filter((p) => p.status === "Completed").length > 0 && (
                  <div className="border-t-2 border-emerald-200 my-8"></div>
                )} */}

              {/* Completed Static Projects */}
              {StatProjects.filter((p) => p.status === "Completed").length >
                0 && (
                <div className="mt-20">
                  <h3 className="text-lg font-semibold text-rose-700 mb-4">
                    Completed Projects : {closedProjects}
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {StatProjects.filter((p) => p.status === "Completed").map(
                      (p, idx) => (
                        <div
                          key={p.id}
                          data-aos="fade-up"
                          data-aos-delay={`${idx * 100}`}
                          className=" bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all overflow-hidden flex flex-col"
                        >
                          {/* Image */}
                          <img
                            src={p.image}
                            alt={p.title}
                            className="object-cover w-full h-62"
                          />

                          {/* Content */}
                          <div className="p-4 flex flex-col">
                            {/* title + status */}
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-xl font-bold text-gray-900">
                                {p.title}
                              </h3>

                              <span
                                className={`${
                                  p.status === "Completed"
                                    ? "bg-rose-100 text-rose-700"
                                    : "bg-emerald-100 text-emerald-700"
                                } text-sm font-semibold px-3 py-1 rounded-full`}
                              >
                                {p.status}
                              </span>
                            </div>

                            {/* location + description */}
                            <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                              <CiLocationOn size={20} /> {p.location}
                            </p>

                            <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                              {p.description}
                            </p>

                            {/* investment + button */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <div>
                                <div className="flex items-center gap-2">
                                  {/* <TrendingUp className="w-4 h-4 text-emerald-600" /> */}
                                  <p className="font-semibold text-emerald-700">
                                    Investment on project
                                  </p>
                                </div>
                                <p className="font-bold text-2xl flex items-center">
                                  <FaBangladeshiTakaSign
                                    size={23}
                                    className="-mb-1"
                                  />
                                  {p.investment.toLocaleString()}
                                </p>
                              </div>

                              <button
                                onClick={() =>
                                  router.push(
                                    `/investments/completed-projects/${p.id}`
                                  )
                                }
                                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition border border-green-300 px-4 py-3 rounded-lg cursor-pointer hover:bg-emerald-100 text-sm"
                              >
                                View Project
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
