/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Shield,
  CheckCircle,
  Star,
  MapPin,
  TrendingUp,
  Clock,
  Users,
  MessageCircle,
  DollarSign,
} from "lucide-react";
import useApi from "@/hooks/useApi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

type Project = {
  image: string;
  is_active: boolean;
  project_id: number;
  investments: unknown[] | null;
  project_name: string;
  project_value: number | null;
  avg_return_rate: number | null;
  total_investors: number;
  project_category: string;
  project_location: string;
  project_return_max: number | null;
  project_return_min: number | null;
  max_return_rate_given: number | null;
  min_return_rate_given: number | null;
  total_expected_return: number;
  total_invested_amount: number;
  project_duration_month: number | null;
};

const marketplaceProjects = {
  status: "success",
  message: "data found",
  data: [
    {
      image: "portfolio_images/None/20250219_180635_uCCTLdZ.png",
      is_active: true,
      project_id: 4,
      investments: null,
      project_name: "Project 31",
      project_value: 50000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Mymensingh",
      project_return_max: 22.0,
      project_return_min: 17.5,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 12.0,
    },
    {
      image: "portfolio_images/None/20250725_180122_p45HUNj.png",
      is_active: true,
      project_id: 14,
      investments: null,
      project_name: "Project 33",
      project_value: 10000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Bajitpur",
      project_return_max: 22.0,
      project_return_min: 17.5,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 12.0,
    },
    {
      image: "portfolio_images/None/20250219_170215_Jbrmy9E.png",
      is_active: true,
      project_id: 3,
      investments: null,
      project_name: "Project 30",
      project_value: 10000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Comilla",
      project_return_max: 22.0,
      project_return_min: 17.5,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 12.0,
    },
    {
      image: "portfolio_images/None/20250725_145854_XDi938y.png",
      is_active: true,
      project_id: 7,
      investments: null,
      project_name: "Project 39",
      project_value: 50000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Pakundia (Syed Ga)",
      project_return_max: 7.25,
      project_return_min: 6.0,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 4.0,
    },
    {
      image:
        "portfolio_images/None/WhatsApp_Image_2025-08-04_at_13_6gjcpeV.06.08_1.jpeg",
      is_active: true,
      project_id: 9,
      investments: null,
      project_name: "Project 42",
      project_value: 50000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Comilla",
      project_return_max: 7.25,
      project_return_min: 6.0,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 4.0,
    },
    {
      image: "portfolio_images/None/20250725_142438_v6eRm8K.png",
      is_active: true,
      project_id: 13,
      investments: null,
      project_name: "Project 34",
      project_value: 10000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Bajitpur",
      project_return_max: 10.75,
      project_return_min: 8.75,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 6.0,
    },
    {
      image:
        "portfolio_images/None/WhatsApp_Image_2025-08-04_at_13_UB3bmPF.06.10.jpeg",
      is_active: true,
      project_id: 10,
      investments: [
        {
          investment_id: 2,
          payment_method: "bank",
          investment_date: "2025-11-30T06:37:20.316066+00:00",
          investor_user_id: 10,
          investment_amount: 50000.0,
          investment_status: "pending",
          investment_remarks: null,
          expected_return_max: 7.25,
          expected_return_min: 6.0,
          investment_document: null,
          investment_is_active: true,
          payment_reference_no: "Trxid-123456",
          investment_created_at: "2025-11-30T06:37:20.316066+00:00",
          investment_created_by: null,
          expected_return_amount: 53625.0,
          investment_modified_at: null,
          investment_modified_by: null,
        },
        {
          investment_id: 4,
          payment_method: "bank",
          investment_date: "2025-11-30T06:37:20.316066+00:00",
          investor_user_id: 10,
          investment_amount: 50000.0,
          investment_status: "pending",
          investment_remarks: null,
          expected_return_max: 7.25,
          expected_return_min: 6.0,
          investment_document: null,
          investment_is_active: true,
          payment_reference_no: "Trxid-123456",
          investment_created_at: "2025-11-30T06:37:20.316066+00:00",
          investment_created_by: null,
          expected_return_amount: 53625.0,
          investment_modified_at: null,
          investment_modified_by: null,
        },
      ],
      project_name: "Project 37",
      project_value: 50000.0,
      avg_return_rate: 6.625,
      total_investors: 2,
      project_category: "Investment",
      project_location: "Pakundia (Syed Ga)",
      project_return_max: 7.25,
      project_return_min: 6.0,
      max_return_rate_given: 7.25,
      min_return_rate_given: 6.0,
      total_expected_return: 107250.0,
      total_invested_amount: 100000.0,
      project_duration_month: 4.0,
    },
    {
      image:
        "portfolio_images/None/WhatsApp_Image_2025-08-04_at_13_Pax2iND.06.07.jpeg",
      is_active: true,
      project_id: 1,
      investments: [
        {
          investment_id: 3,
          payment_method: "bank",
          investment_date: "2025-11-30T06:37:20.316066+00:00",
          investor_user_id: 1826,
          investment_amount: 50000.0,
          investment_status: "pending",
          investment_remarks: null,
          expected_return_max: 7.25,
          expected_return_min: 6.0,
          investment_document: null,
          investment_is_active: true,
          payment_reference_no: "Trxid-123456",
          investment_created_at: "2025-11-30T06:37:20.316066+00:00",
          investment_created_by: null,
          expected_return_amount: 53625.0,
          investment_modified_at: null,
          investment_modified_by: null,
        },
      ],
      project_name: "Project 32",
      project_value: 50000.0,
      avg_return_rate: 6.625,
      total_investors: 1,
      project_category: "Investment",
      project_location: "Bajitpur",
      project_return_max: 22.0,
      project_return_min: 17.5,
      max_return_rate_given: 7.25,
      min_return_rate_given: 6.0,
      total_expected_return: 53625.0,
      total_invested_amount: 50000.0,
      project_duration_month: 12.0,
    },
    {
      image: "portfolio_images/None/IMG_0122_zTSrvHf.png",
      is_active: true,
      project_id: 5,
      investments: null,
      project_name: "Project 28",
      project_value: 10000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Pakundia (Syed Ga)",
      project_return_max: 10.75,
      project_return_min: 8.75,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 6.0,
    },
    {
      image: "portfolio_images/None/20250219_180955_1_aH3tvZu.png",
      is_active: true,
      project_id: 2,
      investments: null,
      project_name: "Project 29",
      project_value: 50000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Nikli",
      project_return_max: 10.75,
      project_return_min: 8.75,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 6.0,
    },
    {
      image: "portfolio_images/None/IMG_0097_1.png",
      is_active: true,
      project_id: 16,
      investments: null,
      project_name: "Cow 1",
      project_value: null,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Anandapur, Comilla",
      project_return_max: null,
      project_return_min: null,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: null,
    },
    {
      image: "portfolio_images/None/20250725_131322.png",
      is_active: true,
      project_id: 15,
      investments: null,
      project_name: "Project 40",
      project_value: 10000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Pakundia (Syed Ga)",
      project_return_max: 10.75,
      project_return_min: 8.75,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 6.0,
    },
    {
      image:
        "portfolio_images/None/WhatsApp_Image_2025-08-04_at_13_uT8biJp.06.10_1.jpeg",
      is_active: true,
      project_id: 6,
      investments: null,
      project_name: "Project 38",
      project_value: 50000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Pakundia (Syed Ga)",
      project_return_max: 7.25,
      project_return_min: 6.0,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 4.0,
    },
    {
      image: "portfolio_images/None/20250725_155115.png",
      is_active: true,
      project_id: 12,
      investments: null,
      project_name: "Project 35",
      project_value: 50000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Nikli",
      project_return_max: 10.75,
      project_return_min: 8.75,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 6.0,
    },
    {
      image: "portfolio_images/None/WhatsApp_Image_2025-08-04_at_13.06.08.jpeg",
      is_active: true,
      project_id: 8,
      investments: null,
      project_name: "Project 41",
      project_value: 50000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Comilla",
      project_return_max: 7.25,
      project_return_min: 6.0,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 4.0,
    },
    {
      image:
        "portfolio_images/None/WhatsApp_Image_2025-08-04_at_13_nE7qxpU.06.09.jpeg",
      is_active: true,
      project_id: 11,
      investments: null,
      project_name: "Project 36",
      project_value: 10000.0,
      avg_return_rate: null,
      total_investors: 0,
      project_category: "Investment",
      project_location: "Nikli",
      project_return_max: 10.75,
      project_return_min: 8.75,
      max_return_rate_given: null,
      min_return_rate_given: null,
      total_expected_return: 0,
      total_invested_amount: 0,
      project_duration_month: 6.0,
    },
  ],
};

export default function InvestmentMarketplace() {
  const { get } = useApi();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const res = await get(
  //         "/coms/project-service/?page_size=10&start_record=1&project_id=-1"
  //       );
  //       if (res.status === "success") {
  //         setProjects(res.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchProjects();
  // }, [get]);

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-green-50 p-4 lg:p-8">
      <div className="lg:max-w-[70%] mx-auto pt-20 lg:pt-30">
        {/* Heading */}
        <div data-aos="fade-down" className="text-left mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Investment Marketplace
          </h1>

          <p className="text-gray-600 mt-2">
            Back real farmers and real assets with full transparency and
            insurance coverage
          </p>
        </div>
        {/* Filters */}
        {/* <div className="flex flex-wrap justify-center gap-3 mt-8">
          {filters.map((f, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-lg border text-sm font-medium transition
                  ${
                    f.active
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white/80 backdrop-blur-sm text-gray-700 border-emerald-200 hover:bg-emerald-50"
                  }`}
            >
              {f.label}
            </button>
          ))}
        </div> */}

        <div className="flex gap-5">
          {/* Projects Grid */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex-1 overflow-y-auto max-h-[calc(100vh-250px)]"
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
          >
            {marketplaceProjects.data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-4">
                {marketplaceProjects.data.map((project) => (
                  <div
                    key={project.project_id}
                    className="relative rounded-2xl overflow-hidden shadow-xl group w-full h-[420px] cursor-pointer"
                  >
                    {/* Background Image */}
                    <img
                      src={project.image || "/farm2.png"}
                      alt={project.project_name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      onError={(e) => (e.currentTarget.src = "/farm2.png")}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 w-full p-6 text-white">
                      <h3 className="text-2xl font-bold mb-4 drop-shadow-md">
                        {project.project_name}
                      </h3>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-emerald-300" />
                            <span>{project.project_location}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <FaBangladeshiTakaSign className="w-4 h-4 text-emerald-300" />
                            <span className="font-semibold">
                              {project.project_value?.toLocaleString() || "N/A"}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-emerald-300" />
                            <span>
                              {project.project_return_min || "N/A"}% -{" "}
                              {project.project_return_max || "N/A"}%
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-emerald-300" />
                            <span>
                              {project.project_duration_month || "N/A"} months
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {/* {project.project_value &&
                        project.total_invested_amount > 0 && (
                          <div className="mb-4">
                            <div className="flex justify-between text-xs text-gray-200 mb-1">
                              <span>Funded</span>
                              <span>
                                {Math.round(
                                  (project.total_invested_amount /
                                    project.project_value) *
                                    100
                                )}
                                %
                              </span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div
                                className="bg-emerald-500 h-2 rounded-full transition-all duration-700"
                                style={{
                                  width: `${Math.min(
                                    (project.total_invested_amount /
                                      project.project_value) *
                                      100,
                                    100
                                  )}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        )} */}

                      {/* WhatsApp Button */}
                      <button
                        className="w-full mt-4 py-3 rounded-xl bg-emerald-600/90 backdrop-blur-md hover:bg-emerald-500 text-white font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-400/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer "
                        onClick={() => {
                          const message = `I am interested in investing in ${project.project_name}. Please provide more details.`;
                          const whatsappUrl = `https://wa.me/8801999467873?text=${encodeURIComponent(
                            message
                          )}`;
                          window.open(whatsappUrl, "_blank");
                        }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Contact on WhatsApp
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mb-16">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100 mx-auto">
                  <p className="text-gray-500 text-lg">No projects available</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Check back later for new investment opportunities
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Info Bar */}
          <div
            // data-aos="fade-up"
            data-aos-delay="400"
            className="sticky top-20 self-start flex flex-col gap-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all text-center"
          >
            {/* Card 1 */}
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900">100% Verified Assets</h3>
              <p className="text-gray-600 text-sm mt-2">
                Every project verified and authenticated
              </p>
            </div>

            {/* Card 2 */}
            <div className="">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900">Fully Insured</h3>
              <p className="text-gray-600 text-sm mt-2">
                Comprehensive coverage against all risks
              </p>
            </div>

            {/* Card 3 */}
            <div className="">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900">Shariah Compliant</h3>
              <p className="text-gray-600 text-sm mt-2">
                Islamic financing structures approved by scholars
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
