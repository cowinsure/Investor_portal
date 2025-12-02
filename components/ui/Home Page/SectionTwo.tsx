"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserPlus,
  FaChartPie,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Create Your Account",
    description:
      "Sign up in minutes and complete secure KYC verification to unlock full access to the investment dashboard.",
    icon: <FaUserPlus className="text-white text-2xl" />,
  },
  {
    id: 2,
    title: "Choose Your Assets",
    description:
      "Explore curated livestock investment options backed by verified farm data. Filter by risk level, tenure, and projected ROI.",
    icon: <FaChartPie className="text-white text-2xl" />,
  },
  {
    id: 3,
    title: "Track & Earn Returns",
    description:
      "Access real-time performance insights, portfolio analytics, and automated payout tracking — all from one smart dashboard.",
    icon: <FaChartLine className="text-white text-2xl" />,
  },
];

export default function InvestSteps() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-up"
      // data-aos-once="true"
      className="py-24 lg:py-36 bg-linear-to-br from-slate-50 to-green-50 relative shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden"
    >
      <div>
        <FaHandHoldingUsd
          className="absolute -top-3 -right-10 bg-blend-multiply text-green-200/60 z-10 rotate-y-180"
          size={400}
        />
      </div>
      <div className="mx-auto px-6 text-center lg:max-w-[70%] z-20 relative">
        {/* TITLE */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          // data-aos-once="true"
          className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
        >
          Start Investing in Three Smart Steps
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          // data-aos-once="true"
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          A seamless investment journey designed for transparency, security, and
          long-term value. Begin building your portfolio with confidence.
        </p>

        {/* STEPS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                data-aos="fade-in"
                data-aos-delay={`${index * 300 + 600}`}
                // data-aos-once="true"
                className="bg-white shadow-lg rounded-3xl p-7 border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                {/* ICON CIRCLE */}
                <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-6 shadow-lg">
                  {step.icon}
                </div>

                {/* STEP NUMBER */}
                <p className="text-green-700 font-bold tracking-widest text-sm mb-2">
                  STEP {step.id}
                </p>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  // data-aos="fade-up"
                  data-aos-delay={`${800 + index * 200}`}
                  // data-aos-once="true"
                  className="hidden md:block mx-4 text-green-400"
                >
                  <FaArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
