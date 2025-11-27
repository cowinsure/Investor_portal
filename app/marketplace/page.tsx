"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shield, CheckCircle, Star } from "lucide-react";

export default function InvestmentMarketplace() {
  const filters = [
    { label: "All Projects", active: true },
    { label: "Dairy", active: false },
    { label: "Beef", active: false },
    { label: "High Return (15%+)", active: false },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

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
          {/* Empty State */}
          <div
            // data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mb-16 flex-1 h-full"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100 mx-auto">
              <p className="text-gray-500 text-lg">
                No projects match your filter
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your filters above
              </p>
            </div>
          </div>

          {/* Info Bar */}
          <div
            // data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col gap-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all text-center"
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
