"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function InvestSteps() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-36 bg-linear-to-br from-slate-50 to-green-50 relative shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.10)] overflow-hidden"
    >
      <div>
        <FaHandHoldingUsd
          className="absolute -top-5 -right-10 bg-blend-multiply text-green-200/60 z-10 rotate-y-180"
          size={400}
        />
      </div>
      <div className="mx-auto px-6 text-center max-w-[80%] z-20 relative">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
        >
          Start Investing in Three Smart Steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          A seamless investment journey designed for transparency, security, and
          long-term value. Begin building your portfolio with confidence.
        </motion.p>

        {/* STEPS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4"
        >
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                variants={itemVariants}
                className="bg-white shadow-lg rounded-3xl p-10 border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1"
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
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="hidden md:block mx-4 text-green-400"
                >
                  <FaArrowRight size={24} />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
