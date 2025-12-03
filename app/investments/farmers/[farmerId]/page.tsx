/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowLeft, Calendar, MapPin, Package, Receipt } from "lucide-react";
import useApi from "../../../../hooks/useApi";
import Section from "@/components/ui/Section";
import HalimaBegum from "../../../../public/farmerImages/Halima.jpeg";
import Farid from "../../../../public/farmerImages/Farid.jpeg";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default function FarmerDetailsPage() {
  const { farmerId } = useParams();
  console.log(farmerId);

  const router = useRouter();
  const { get, loading } = useApi();
  const [activeTab, setActiveTab] = useState("livestock");
  const [livestock, setLivestock] = useState<any[]>([]);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);

  const staticExpenses = {
    "29": [
      { txn_head: "Insurance Premium", amount: 428 },
      { txn_head: "Identification Cost", amount: 263 },
      { txn_head: "Operational Cost", amount: 2639 },
    ],
    "34": [
      { txn_head: "Insurance Premium", amount: 446 },
      { txn_head: "Identification Cost", amount: 263 },
      { txn_head: "Operational Cost", amount: 2720 },
    ],
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch livestock
        const livestockData = await get(
          `lms/assets-service/?asset_id=-1&by_user_id=${farmerId}`
        );
        if (livestockData.status === "success") {
          setLivestock(livestockData.data.list || []);
        }

        // Fetch expenses
        const expensesData = await get(
          `gls/income-expense-breakdown-service/?start_record=1&page_size=10&by_user_id=${farmerId}`
        );
        if (expensesData.status === "success") {
          let mergedExpenses = expensesData.data.list || [];
          const staticData =
            staticExpenses[farmerId as keyof typeof staticExpenses];
          if (staticData) {
            mergedExpenses = [...mergedExpenses, ...staticData];
          }
          setExpenses(mergedExpenses);
        }

        // Fetch expenses
        const transactionData = await get(
          `gls/income-expense-service/?start_record=1&page_size=10&by_user_id=${farmerId}`
        );
        if (transactionData.status === "success") {
          setTransactions(transactionData.data.list || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [get, farmerId]);
  console.log(transactions);

  const searchParams = useSearchParams();
  const encoded = searchParams.get("data");

  const farmerData = encoded ? JSON.parse(decodeURIComponent(encoded)) : null;

  console.log("Farmer passed:", farmerData);

  // Dummy data — replace with real API call
  // const [farmer] = useState();

  if (!farmerData) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8 bg-linear-to-br from-emerald-50 via-white to-green-50 min-h-screen overflow-hidden">
      <Section>
        {/* Back */}
        <button
          onClick={() => router.back()}
          data-aos="fade-down"
          className="cursor-pointer text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Project
        </button>
        <div className="overflow-hidden">
          {/* <User
            className="absolute top-36 -left-100 bg-blend-multiply text-green-300/20 z-10"
            size={900}
          /> */}
        </div>
        <div>
          {/* <User
            className="absolute -top-70 -right-100 bg-blend-multiply text-green-300/20 z-10 rotate-180"
            size={900}
          /> */}
        </div>

        {/* Page body */}
        <div className="">
          {/* Header */}
          <div data-aos="fade-up" data-aos-delay="200" className="mb-8">
            <div className="flex gap-5">
              <Image
                src={
                  Number(farmerId) === 29
                    ? HalimaBegum
                    : Number(farmerId) === 34
                    ? Farid
                    : "/banner1.png"
                }
                alt={farmerData.farmer_name}
                width={250}
                height={120}
                className="rounded-2xl object-cover border-4 border-emerald-100"
              />

              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">
                  {farmerData.farmer_name}
                </h1>

                <div className="flex flex-col justify-center md:justify-start gap- mt-3">
                  <div className="flex items-center gap-2 px- py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-500">
                      {farmerData.location}
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2 px- py-1 rounded-full">
                    <span className="text-sm font-medium text-emerald-700">
                      📞 {farmerData.phone}
                    </span>
                  </div> */}
                  {/* <div className="flex items-center gap-2 px- py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-500">
                      {farmerData.join_date}
                    </span>
                  </div> */}
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
                      width: "33.33%",
                      transform: `translateX(${
                        activeTab === "livestock"
                          ? "0%"
                          : activeTab === "account"
                          ? "100%"
                          : "200%"
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

                  {/* Account Tab */}
                  <button
                    onClick={() => setActiveTab("account")}
                    className={`relative z-10 flex-1 px-5 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === "account"
                        ? "text-white"
                        : "text-emerald-800 hover:text-emerald-950 hover:scale-110"
                    }`}
                  >
                    <Receipt className="w-5 h-5" />
                    <span>Account</span>
                  </button>

                  {/* Transactions Tab */}
                  <button
                    onClick={() => setActiveTab("transactions")}
                    className={`relative z-10 flex-1 px-5 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === "transactions"
                        ? "text-white"
                        : "text-emerald-800 hover:text-emerald-950 hover:scale-110"
                    }`}
                  >
                    <Receipt className="w-5 h-5" />
                    <span>Transactions</span>
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
                    <div
                      className="overflow-auto rounded-2xl"
                      data-lenis-prevent-wheel
                      data-lenis-prevent-touch
                    >
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
                              Weight
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-200 px-5">
                          {livestock.length === 0 && !loading && (
                            <tr>
                              <td
                                colSpan={5}
                                className="px-4 py-8 text-center text-gray-500"
                              >
                                No livestock found
                              </td>
                            </tr>
                          )}
                          {livestock.length > 0 &&
                            livestock.map((cow) => (
                              <tr
                                key={cow.reference_id}
                                // data-aos="fade-up"
                                // data-aos-delay={`${300 + idx * 100}`}
                                className="hover:bg-emerald-50/30 transition-colors"
                              >
                                <td className="px-4 py-4 font-semibold text-gray-900">
                                  {cow.reference_id}
                                </td>
                                <td className="px-4 py-4 text-gray-700">
                                  {cow.breed}
                                </td>
                                <td className="px-4 py-4 text-gray-700">
                                  {cow.age_in_months} months
                                </td>
                                <td className="px-4 py-4 text-gray-700">
                                  {cow.weight_kg} kg
                                </td>
                                <td className="px-4 py-4">
                                  <span
                                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                                      cow.current_status === "Active"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {cow.current_status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "account" && (
                  <div>
                    {/* <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Account History
                  </h3> */}
                    <div className="overflow-x-auto rounded-2xl">
                      <table className="w-full">
                        <thead className="bg-emerald-950/80 border-b border-emerald-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Category
                            </th>
                            {/* <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Date
                            </th> */}
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-200">
                          {expenses.length === 0 && !loading && (
                            <tr>
                              <td
                                colSpan={3}
                                className="px-4 py-8 text-center text-gray-500"
                              >
                                No account data found
                              </td>
                            </tr>
                          )}
                          {expenses.length > 0 &&
                            expenses.map((expense, idx) => (
                              <tr
                                key={idx}
                                className="hover:bg-emerald-50/30 transition-colors"
                              >
                                <td className="px-4 py-4 font-semibold text-gray-900">
                                  {expense.txn_head}
                                </td>
                                {/* <td className="px-4 py-4 text-gray-700">N/A</td> */}
                                <td className="px-4 py-4">
                                  <span className="font-semibold text-red-600 flex items-center gap-1">
                                    <FaBangladeshiTakaSign className="text-red-500" />{" "}
                                    {expense.amount.toLocaleString()}
                                  </span>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "transactions" && (
                  <div>
                    {/* <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Transaction History
                  </h3> */}
                    <div className="overflow-x-auto rounded-2xl">
                      <table className="w-full">
                        <thead className="bg-emerald-950/80 border-b border-emerald-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Trx Id
                            </th>
                            {/* <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Date
                            </th> */}
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Invoice no.
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-100">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-200">
                          {transactions.length === 0 && !loading && (
                            <tr>
                              <td
                                colSpan={3}
                                className="px-4 py-8 text-center text-gray-500"
                              >
                                No transactions found
                              </td>
                            </tr>
                          )}
                          {transactions.length > 0 &&
                            transactions.map((trx, idx) => (
                              <tr
                                key={idx}
                                // data-aos="fade-up"
                                // data-aos-delay={`${300 + idx * 100}`}
                                className="hover:bg-emerald-50/30 transition-colors"
                              >
                                <td className="px-4 py-4 font-semibold text-gray-900">
                                  {trx.voucher_no}
                                </td>
                                <td className="px-4 py-4 font-semibold text-gray-900 uppercase">
                                  {trx.description}
                                </td>
                                {/* <td className="px-4 py-4 text-gray-700">N/A</td> */}
                                <td className="px-4 py-4">
                                  <span className="font-semibold text-red-600">
                                    ${trx.amount.toLocaleString()}
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
      </Section>
    </div>
  );
}
