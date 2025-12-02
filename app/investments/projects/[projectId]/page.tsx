/* eslint-disable @typescript-eslint/no-explicit-any */
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
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Clock,
  MapPinned,
} from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useApi from "../../../../hooks/useApi";
import Section from "@/components/ui/Section";
import { Project } from "../../page";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  console.log(projectId);

  const router = useRouter();
  const { get, loading } = useApi();

  const [farmers, setFarmers] = useState<any[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  console.log(farmers);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const data = await get("ims/farmer-service/?start_record=1");
        if (data.status === "success") {
          // Filter farmers by project ID
          const filteredFarmers = data.data.filter(
            (farmer: any) => farmer.project_id.toString() === projectId
          );
          setFarmers(filteredFarmers);
        }
      } catch (error) {
        console.error("Error fetching farmers:", error);
      }
    };

    const fetchProjects = async () => {
      const res = await get(
        "/coms/project-service/?page_size=10&start_record=1&project_id=-1"
      );
      console.log(res);
      if (res.status === "success") {
        setProjects(res.data);
        const foundProject = res.data.find(
          (p: Project) => p.project_id.toString() === projectId
        );
        setCurrentProject(foundProject || null);
      }
    };

    fetchProjects();
    fetchFarmers();
  }, [get, projectId]);

  // Use only fetched farmers
  const allFarmers = farmers;

  // Add farmers to project data
  const project = currentProject
    ? {
        id: currentProject.project_id,
        title: currentProject.project_name,
        farmersAssigned: allFarmers.length,
        status: currentProject.is_active ? "Active" : "Completed",
        startDate: currentProject.startDate || "2025-02-05",
        overview:
          currentProject.overview ||
          "Sustainable dairy farming focused beef fattening using free-range grazing techniques.",
        allocation: currentProject.project_value || 7500000,
        image: currentProject.image,
        investment_amnt:
          currentProject.investment_amnt ||
          currentProject.investments?.[0]?.investment_amount ||
          5000000,
        min_return_rate: currentProject.project_return_min || "17.5 - 20",
        max_return_rate: currentProject.project_return_max || "17.5 - 20",
        expected_return_amnt: currentProject.investments[0]?.expected_return_amount || 55000000,
        location: currentProject.project_location,
        duration: currentProject.project_duration_month,
        farmers: allFarmers,
      }
    : null;

  const handleFarmerClick = (farmer: any) => {
    const encoded = encodeURIComponent(JSON.stringify(farmer));
    router.push(`/investments/farmers/${farmer.user_id}?data=${encoded}`);
  };

  if (!project) return <p className="p-8">Loading...</p>;

  // Pagination logic
  const totalPages = Math.ceil(project.farmers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFarmers = project.farmers.slice(startIndex, endIndex);

  console.log(projects);

  return (
    <div className="lg:p-8 bg-linear-to-br from-emerald-50 via-white to-green-50 min-h-screen">
      <Section>
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
            <div className="relative h-[500px] w-full">
              <Image
                src={"/farm2profile.png"}
                alt={project.title}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/farm2profile.png";
                }}
              />

              {/* Gradient overlay ONLY on image */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 from-10% to-transparent to-30%"></div>
            </div>
            {/* Header */}
            <div className="absolute bottom-4 px-6 flex justify-between w-full">
              {/* Project name */}
              <div
                className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                <h1 className="text-3xl font-bold text-emerald-100">
                  {project.title}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <Users className="w-5 h-5 text-emerald-300" />
                  <p className="text-gray-300 font-">
                    {project.farmersAssigned} Farmers Assigned
                  </p>
                </div>
              </div>

              {/* Investor Details for desktop */}
              <div className="hidden lg:flex flex-row items-center gap-2">
                {/* My Investment */}
                <div
                  className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h1 className="text-md font-bold text-emerald-300">
                    My Investment
                  </h1>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-emerald-100 flex items-center gap-1">
                      <FaBangladeshiTakaSign
                        size={20}
                        className="text-emerald-400 mt-0.5"
                      />
                      {project.investment_amnt.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* ROI */}
                <div
                  className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h1 className="text-md font-bold text-emerald-300">
                    ROI{" "}
                    <small className="text-xs">(Return on investment)</small>
                  </h1>
                  <div className="flex items-center gap- mt-">
                    <p className="text-2xl font-bold text-emerald-100">
                      {project.min_return_rate}% - {project.max_return_rate}%
                    </p>
                  </div>
                </div>

                {/* Expected Return */}
                <div
                  className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h1 className="text-md font-bold text-emerald-300">
                    Expected Return
                  </h1>
                  <div className="flex items-center gap- mt-">
                    <p className="text-2xl font-bold text-emerald-100 flex items-center gap-1">
                      <FaBangladeshiTakaSign
                        size={20}
                        className="text-emerald-400 mt-0.5"
                      />
                      {project.expected_return_amnt.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview + Allocation */}
          <div className="px-5 lg:px-6 pb-6 pt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project Overview */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-xl text-gray-900 mb-3">
                  Project Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Project details */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {/* Starting date */}
                <div>
                  <div className="flex lg:inline-flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-700">
                      Started: {project.startDate}
                    </span>
                  </div>
                </div>
                {/* Project duration */}
                <div>
                  <div className="flex lg:inline-flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-700">
                      Duration: {project.duration} months
                    </span>
                  </div>
                </div>
                {/* Project location */}
                <div>
                  <div className="flex lg:inline-flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full">
                    <MapPinned className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-700">
                      Location: {project.location}
                    </span>
                  </div>
                </div>
                {/* Project status */}
                <div>
                  <div
                    className={`flex lg:inline-flex items-center gap-2 ${
                      project.status === "Completed"
                        ? "bg-rose-100 text-rose-700"
                        : "bg-emerald-50/80"
                    } px-4 py-2 rounded-full`}
                  >
                    <TrendingUp
                      className={`w-4 h-4 ${
                        project.status === "Completed"
                          ? "text-rose-700"
                          : "text-emerald-600"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        project.status === "Completed"
                          ? "bg-rose-100 text-rose-700"
                          : " text-emerald-700"
                      }`}
                    >
                      Status: {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Allocation Block */}
            <div className="bg-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <p className=" text-xs font-semibold text-emerald-700">
                  <span className="uppercase">Project value</span>{" "}
                  <small>(approx)</small>
                </p>
              </div>
              <h3 className="text-3xl font-semibold text-emerald-800 mt-1 flex items-center gap-1">
                <FaBangladeshiTakaSign size={25} />
                {project.allocation.toLocaleString()}
              </h3>
              <p className="text-emerald-600 text-sm mt-3 leading-relaxed">
                Allocated for infrastructure, livestock, and operational costs.
              </p>
            </div>

            {/* Investor Details for mobile */}
            <div className="lg:hidden flex flex-wrap flex-row items-center gap-2">
              {/* My Investment */}
              <div
                className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h1 className="text-md font-bold text-emerald-300">
                  My Investment
                </h1>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-emerald-100 flex items-center gap-1">
                    <FaBangladeshiTakaSign
                      size={20}
                      className="text-emerald-400 mt-0.5"
                    />
                    {project.investment_amnt.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* ROI */}
              <div
                className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h1 className="text-md font-bold text-emerald-300">
                  ROI{" "}
                  <small className="text-xs hidden lg:block">
                    (Return on investment)
                  </small>
                </h1>
                <div className="flex items-center gap- mt-">
                  <p className="text-2xl font-bold text-emerald-100">
                    {project.min_return_rate}% - {project.max_return_rate}%
                  </p>
                </div>
              </div>

              {/* Expected Return */}
              <div
                className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h1 className="text-md font-bold text-emerald-300">
                  Expected Return
                </h1>
                <div className="flex items-center gap- mt-">
                  <p className="text-2xl font-bold text-emerald-100 flex items-center gap-1">
                    <FaBangladeshiTakaSign
                      size={20}
                      className="text-emerald-400 mt-0.5"
                    />
                    {project.expected_return_amnt.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {(project.status === "Active" || project.status === "Completed") && (
          <>
            {" "}
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
                        {/* <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                          Join Date
                        </th> */}
                        {/* <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">Assets</th> */}
                        <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-50">
                      {currentFarmers.length === 0 && !loading && (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-6 py-8 text-center text-gray-500"
                          >
                            No farmers found for this project
                          </td>
                        </tr>
                      )}
                      {currentFarmers.length > 0 &&
                        currentFarmers.map((farmer) => (
                          <tr
                            key={farmer.user_id}
                            // data-aos="fade-up"
                            // data-aos-delay={`${500 + idx * 50}`}
                            className="hover:bg-emerald-200/30 transition-colors cursor-pointer group"
                            onClick={() => handleFarmerClick(farmer)}
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-sm">
                                  {farmer.farmer_name &&
                                  farmer.farmer_name.trim()
                                    ? farmer.farmer_name
                                        .trim()
                                        .split(" ")
                                        .map((n: string) => n[0])
                                        .join("")
                                        .toUpperCase()
                                    : "FN"}
                                </div>
                                <span className="font-medium text-gray-900">
                                  {farmer.farmer_name || "N/A"}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {farmer.mobile_number}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {farmer.zilla
                                ? `${farmer.zilla}, Bangladesh`
                                : "N/A"}
                            </td>
                            <td
                              className="px-6 py-4 text-gray-700 max-w-xs truncate"
                              title={farmer.village || "N/A"}
                            >
                              {farmer.village || "N/A"}
                            </td>
                            {/* <td className="px-6 py-4 text-gray-700">
                              {farmer.join_date}
                            </td> */}
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
                          {Array.from(
                            { length: Math.min(5, totalPages) },
                            (_, i) => {
                              const startPage = Math.max(1, currentPage - 2);
                              const page = startPage + i;
                              if (page > totalPages) return null;
                              return (
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
                              );
                            }
                          ).filter(Boolean)}
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
          </>
        )}
      </Section>
    </div>
  );
}
