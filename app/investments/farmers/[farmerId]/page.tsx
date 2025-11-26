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
  Package,
  Receipt,
  User,
} from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

export default function FarmerDetailsPage() {
  const { farmerId } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("livestock");

  useEffect(() => {
    AOS.init();
  }, []);

  // Dummy data — replace with real API call
  const [farmer] = useState({
    id: farmerId,
    name: "John Miller",
    sector: "Sector A",
    phone: "555-0101",
    joined: "2023-01-20",
    avatar: "/cow.png",
    livestock: [
      {
        id: "UK-101",
        breed: "Holstein",
        age: "3 yrs",
        milk: "28L / day",
        status: "Healthy",
        image: "/images/cow1.jpg",
      },
      {
        id: "UK-102",
        breed: "Jersey",
        age: "4 yrs",
        milk: "22L / day",
        status: "Healthy",
        image: "/images/cow2.jpg",
      },
      {
        id: "UK-103",
        breed: "Holstein",
        age: "2 yrs",
        milk: "15L / day",
        status: "Sick",
        image: "/images/cow3.jpg",
      },
    ],
    expenses: [
      { title: "Feed", date: "2023-10-01", amount: -1200 },
      { title: "Medical", date: "2023-10-05", amount: -300 },
      { title: "Maintenance", date: "2023-10-15", amount: -150 },
      { title: "Labor", date: "2023-10-20", amount: -800 },
    ],
  });

  if (!farmer) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8 bg-gradient-to-br from-emerald-50 via-white to-green-50 min-h-screen overflow-hidden">
      <div className="max-w-[70%] mx-auto pt-30 relative">
        {/* Back */}
        <button
          onClick={() => router.back()}
          data-aos="fade-down"
          className="cursor-pointer text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Project
        </button>
        <div>
          <User
            className="absolute top-30 -left-190 bg-blend-multiply text-green-300/20 z-10"
            size={900}
          />
        </div>
        <div>
          <User
            className="absolute -top-70 -right-190 bg-blend-multiply text-green-300/20 z-10 rotate-180"
            size={900}
          />
        </div>

        {/* Page body */}
        <div className="">
          {/* Header */}
          <div data-aos="fade-up" data-aos-delay="200" className="mb-8">
            <div className="flex gap-5">
              <Image
                src={farmer.avatar}
                alt={farmer.name}
                width={250}
                height={120}
                className="rounded-2xl object-cover border-4 border-emerald-100"
              />

              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">
                  {farmer.name}
                </h1>

                <div className="flex flex-col justify-center md:justify-start gap- mt-3">
                  <div className="flex items-center gap-2 px- py-1 rounded-full">
                    <FaLocationDot className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-500">
                      {farmer.sector}
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2 px- py-1 rounded-full">
                    <span className="text-sm font-medium text-emerald-700">
                      📞 {farmer.phone}
                    </span>
                  </div> */}
                  <div className="flex items-center gap-2 px- py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-500">
                      {farmer.joined}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div data-aos="fade-up" data-aos-delay="400" className="flex-1">
            <div className=" rounded-2xl overflow-hidden">
              {/* Tab Headers */}
              <div className="relative w-full mx-auto">
                <div className="relative flex bg-emerald-100/80 p-1 rounded-2xl border border-emerald-400/30 backdrop-blur-lg">
                  {/* Sliding Highlight */}
                  <div
                    className="absolute top-1 bottom-1 bg-emerald-950/80 rounded-xl shadow-inner transition-transform duration-300 ease-out"
                    style={{
                      width: "50%",
                      transform: `translateX(${
                        activeTab === "livestock" ? "0%" : "99%"
                      })`,
                    }}
                  />

                  {/* Livestock Tab */}
                  <button
                    onClick={() => setActiveTab("livestock")}
                    className={`relative z-10 flex-1 px-5 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === "livestock"
                        ? "text-white"
                        : "text-emerald-800 hover:text-emerald-950 hover:scale-110"
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    <span>Livestock</span>
                  </button>

                  {/* Expenses Tab */}
                  <button
                    onClick={() => setActiveTab("expenses")}
                    className={`relative z-10 flex-1 px-5 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === "expenses"
                        ? "text-white"
                        : "text-emerald-800 hover:text-emerald-950 hover:scale-110"
                    }`}
                  >
                    <Receipt className="w-5 h-5" />
                    <span>Expenses</span>
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="mt-5 bg-green-50 rounded-2xl drop-shadow-2xl border border-emerald-400/50">
                {activeTab === "livestock" && (
                  <div data-aos="fade-in" data-aos-delay="200">
                    {/* <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Livestock Inventory
                  </h3> */}
                    <div className="overflow-x-auto rounded-2xl">
                      <table className="w-full">
                        <thead className="bg-emerald-950/80 border-b border-emerald-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              ID
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Breed
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Age
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Milk Production
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-200 px-5">
                          {farmer.livestock.map((cow, idx) => (
                            <tr
                              key={cow.id}
                              data-aos="fade-up"
                              data-aos-delay={`${300 + idx * 100}`}
                              className="hover:bg-emerald-50/30 transition-colors"
                            >
                              <td className="px-4 py-4 font-semibold text-gray-900">
                                {cow.id}
                              </td>
                              <td className="px-4 py-4 text-gray-700">
                                {cow.breed}
                              </td>
                              <td className="px-4 py-4 text-gray-700">
                                {cow.age}
                              </td>
                              <td className="px-4 py-4 text-gray-700">
                                {cow.milk}
                              </td>
                              <td className="px-4 py-4">
                                <span
                                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                                    cow.status === "Healthy"
                                      ? "bg-emerald-100 text-emerald-700"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {cow.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "expenses" && (
                  <div data-aos="fade-in" data-aos-delay="200">
                    {/* <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Expense History
                  </h3> */}
                    <div className="overflow-x-auto rounded-2xl">
                      <table className="w-full">
                        <thead className="bg-emerald-950/80 border-b border-emerald-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Category
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Date
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-200">
                          {farmer.expenses.map((expense, idx) => (
                            <tr
                              key={idx}
                              data-aos="fade-up"
                              data-aos-delay={`${300 + idx * 100}`}
                              className="hover:bg-emerald-50/30 transition-colors"
                            >
                              <td className="px-4 py-4 font-semibold text-gray-900">
                                {expense.title}
                              </td>
                              <td className="px-4 py-4 text-gray-700">
                                {expense.date}
                              </td>
                              <td className="px-4 py-4">
                                <span className="font-semibold text-red-600">
                                  ${Math.abs(expense.amount)}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
