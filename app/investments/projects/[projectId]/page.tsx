"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowLeft,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import image from "../../../../public/dairy_farm.jpg";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    AOS.init();
  }, []);

  const [project] = useState({
    id: projectId,
    title: "Green Valley Dairy Initiative",
    farmersAssigned: 13,
    status: "Active",
    startDate: "2023-01-15",
    overview:
      "Sustainable dairy farming focused on organic milk production using free-range grazing techniques.",
    allocation: 250000,
    image: image,
    farmers: [
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2615,
        village:
          "House/Village:-Surjomoni,Road NO/Word No:-2,Union/Pouroshova:-Laxmipur",
        initials: "AK",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Asma Khatun",
        mobile_number: "01746889062",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2614,
        village:
          "House/Village:-Koyerpur,Road NO/Word No:-1,Union/Pouroshova:-Domsar",
        initials: "Ns",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Nurunnahar shathi",
        mobile_number: "01727844011",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2613,
        village:
          "House/Village:-Coto kasna,Road NO/Word No:-7,Union/Pouroshova:-Nagerpara",
        initials: "MS",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "MST SULTANA",
        mobile_number: "01747985322",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2612,
        village:
          "House/Village:-Dhalikhandi ,Road NO/Word No:-5,Union/Pouroshova:-North Tarabonia",
        initials: "M",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Monawara ",
        mobile_number: "01750186202",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2611,
        village:
          "House/Village:-Bepari Kandi,Road NO/Word No:-1,Union/Pouroshova:-Sakhipur",
        initials: "L",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Lovely ",
        mobile_number: "01790921445",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2610,
        village:
          "House/Village:-Gain Kandi,Road NO/Word No:-4,Union/Pouroshova:-Tarabonia",
        initials: "AB",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Ayesha Begum",
        mobile_number: "01846300403",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2609,
        village:
          "House/Village:-Sonikandi,Road NO/Word No:-3,Union/Pouroshova:-Charvagha",
        initials: "NA",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Nargis Akter",
        mobile_number: "01755799329",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2708,
        village:
          "House/Village:-Fatajongpur ,Road NO/Word No:-Fatajongpur ,Union/Pouroshova:-Fatajanjpur",
        initials: "Jb",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Jannat begum",
        mobile_number: "01772374414",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2707,
        village:
          "House/Village:-Mal Para Kodal pur Goshair hat ,Road NO/Word No:-01,Union/Pouroshova:-Kodal pur",
        initials: "SB",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Sufia Begum",
        mobile_number: "01746031701",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Shariatpur",
        assets: 0,
        user_id: 2706,
        village:
          "House/Village:-Balakandi,Road NO/Word No:-4,Union/Pouroshova:-Balar hat",
        initials: "SK",
        location: "Shariatpur, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "Sufia Khatun",
        mobile_number: "01795402561",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Rajbari",
        assets: 0,
        user_id: 2514,
        village:
          "House/Village:-BILNAYABAD,Road NO/Word No:-BILNAYABAD,Union/Pouroshova:-BILNAYABAD",
        initials: "SY",
        location: "Rajbari, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "SALMA YESMEN",
        mobile_number: "01976046935",
      },
      {
        thana: "-",
        union: "-",
        zilla: "Rajbari",
        assets: 0,
        user_id: 2513,
        village:
          "House/Village:-bagiya rosora Rajbari sador Rajbari ,Road NO/Word No:-world no 06,Union/Pouroshova:-mulgar",
        initials: "mB",
        location: "Rajbari, Bangladesh",
        policies: 0,
        join_date: "2025-11-03",
        com_org_id: 0,
        farmer_name: "momotaj Begum",
        mobile_number: "01751711315",
      },
    ],
  });

  // Pagination logic
  const totalPages = Math.ceil(project.farmers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFarmers = project.farmers.slice(startIndex, endIndex);

  const handleFarmerClick = (farmerId: number) => {
    router.push(`/investments/farmers/${farmerId}`);
  };

  if (!project) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8 bg-gradient-to-br from-emerald-50 via-white to-green-50 min-h-screen">
      <div className="max-w-[70%] mx-auto pt-30">
        {/* Back Button */}
        <button
          onClick={() => router.push("/investments")}
          data-aos="fade-down"
          className="cursor-pointer text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        {/* Banner */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 overflow-hidden"
        >
          <div className="relative w-full">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-[400px] "
            />
            {/* Header */}
            <div className="absolute bottom-4 left-6 bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-emerald-200">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <Users className="w-5 h-5 text-emerald-300" />
                <p className="text-gray-300 font-">
                  {project.farmersAssigned} Farmers Assigned
                </p>
              </div>
            </div>
          </div>

          {/* Overview + Allocation */}
          <div className="px-8 pb-6 pt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project Overview */}
            <div className="lg:col-span-2">
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                Project Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.overview}
              </p>

              <div className="flex items-center gap-4 mt-6 h-full pb-12">
                <div className="flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    Started: {project.startDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    Status: {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Allocation Block */}
            <div className="bg-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                {/* <DollarSign className="w-5 h-5 text-emerald-600" /> */}
                <p className="uppercase text-xs font-semibold text-emerald-700">
                  Total Allocation
                </p>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mt-1">
                ${project.allocation.toLocaleString()}
              </h3>
              <p className="text-emerald-600 text-sm mt-3 leading-relaxed">
                Allocated for infrastructure, livestock, and operational costs.
              </p>
            </div>
          </div>
        </div>

        {/* Farmers Table */}
        <div data-aos="fade-up" data-aos-delay="100" className="mt-10">
          <h2 className="font-bold text-xl text-gray-900 mb-6">Farmers</h2>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-950/80 border-b border-emerald-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                      Mobile
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                      Village
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                      Join Date
                    </th>
                    {/* <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">Assets</th> */}
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-50">
                  {currentFarmers.map((farmer, idx) => (
                    <tr
                      key={farmer.user_id}
                      // data-aos="fade-up"
                      // data-aos-delay={`${500 + idx * 50}`}
                      className="hover:bg-emerald-200/30 transition-colors cursor-pointer group"
                      onClick={() => handleFarmerClick(farmer.user_id)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-sm">
                            {farmer.initials}
                          </div>
                          <span className="font-medium text-gray-900">
                            {farmer.farmer_name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {farmer.mobile_number}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {farmer.location}
                      </td>
                      <td
                        className="px-6 py-4 text-gray-700 max-w-xs truncate"
                        title={farmer.village}
                      >
                        {farmer.village}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {farmer.join_date}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <ChevronRight className="w-5 h-5 text-emerald-600 group-hover:scale-125" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 bg-emerald-50/50 border-t border-emerald-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, project.farmers.length)} of{" "}
                    {project.farmers.length} farmers
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                      className="cursor-pointer p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronsLeft className="w-4 h-4 text-emerald-600" />
                    </button>
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="cursor-pointer p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-emerald-600" />
                    </button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`cursor-pointer px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                              currentPage === page
                                ? "bg-emerald-600 text-white"
                                : "hover:bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {page}
                          </button>
                        )
                      )}
                    </div>

                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="cursor-pointer p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </button>
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      disabled={currentPage === totalPages}
                      className="cursor-pointer p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronsRight className="w-4 h-4 text-emerald-600" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
