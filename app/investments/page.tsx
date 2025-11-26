"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { CiLocationOn } from "react-icons/ci";
import {
  DollarSign,
  Users,
  FolderKanban,
  TrendingUp,
  LocateIcon,
} from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const projectsData = [
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
  // {
  //   id: 2,
  //   title: "Highland Cattle Collective",
  //   location: "Scotland, UK",
  //   investment: 180000,
  //   status: "Active",
  //   image: "/images/cattle.jpg",
  //   description:
  //     "Preservation and ethical breeding of Highland cattle for premium beef and wool markets.",
  // },
  // {
  //   id: 3,
  //   title: "Sunny Pastures Co-op",
  //   location: "Texas, USA",
  //   investment: 320000,
  //   status: "Active",
  //   image: "/images/pasture.jpg",
  //   description:
  //     "Community-driven cooperative farm specializing in grass-fed beef and regenerative agriculture.",
  // },
];

export default function MyInvestments() {
  const [projects] = useState(projectsData);

  useEffect(() => {
    AOS.init();
  }, []);

  const totalInvested = projects.reduce((sum, p) => sum + p.investment, 0);

  const expenseChartData = {
    labels: ["Feed", "Labor", "Maintenance", "Medical", "Other"],
    datasets: [
      {
        data: [45, 25, 10, 8, 12],
        backgroundColor: [
          "#009F6B",
          "#0EB981",
          "#65D1A6",
          "#B7F4DB",
          "#004F3D",
        ],
      },
    ],
  };

  return (
    <div className="p-8 bg-linear-to-br from-emerald-50 via-white to-green-50 min-h-screen">
      <div className="max-w-[70%] mx-auto pt-30">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-gray-600 font-medium">Total Invested</p>
            </div>
            <h2 className="text-3xl font-bold text-emerald-700">
              ${totalInvested.toLocaleString()}
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-gray-600 font-medium">Active Farmers</p>
            </div>
            <h2 className="text-3xl font-bold text-emerald-700">5</h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <FolderKanban className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-gray-600 font-medium">Projects Active</p>
            </div>
            <h2 className="text-3xl font-bold text-emerald-700">
              {projects.length}
            </h2>
          </div>
        </div>

        {/* Layout */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-1 gap-8"
        >
          {/* Project list */}
          <div className="xl:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Projects
            </h2>

            {projects.map((p, idx) => (
              <div
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={`${600 + idx * 200}`}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all overflow-hidden grid grid-cols-3 "
              >
                <img src={p.image} alt={p.title} className="object-cover w-full h-full" />

                <div className="p-6 col-span-2 grid grid-rows-3">
                  <div className="row-span-2 flex flex-col gap-4">
                    {/* title and status */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900">
                        {p.title}
                      </h3>
                      <span className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
                        {p.status}
                      </span>
                    </div>

                    {/* location and des */}
                    <div className="">
                      <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                        <CiLocationOn size={20} /> {p.location}
                      </p>

                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* investment and link */}
                  <div className="flex items-center justify-between h-full border-t border-gray-200 py-2">
                    <div className="">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <p className="font-semibold text-emerald-700">
                          Investment
                        </p>
                      </div>
                      <p className="font-bold text-2xl">
                        ${p.investment.toLocaleString()}
                      </p>
                    </div>

                    <a
                      href={`/investments/projects/${p.id}`}
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                    >
                      View Farmers <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expense chart */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 h-fit"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Global Expense Distribution
            </h2>
            <div className="w-64 mx-auto my-6">
              <Doughnut data={expenseChartData} />
            </div>

            <p className="text-center text-gray-600 text-sm leading-relaxed">
              Breakdown of operational costs across all active projects.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
