"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, TrendingUp, Users } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "AI-Verified Assets",
    description:
      "Every animal verified through unique Muzzle Printometry™ technology, ensuring authenticity and traceability.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: "Fully Insured",
    description:
      "Comprehensive insurance coverage protects your investment against health risks and unforeseen circumstances.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    title: "Attractive Returns",
    description:
      "Earn projected returns of 12-18% annually through sustainable livestock growth and breeding programs.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Support Farmers",
    description:
      "Make a meaningful impact by providing capital to local farmers and contributing to sustainable agriculture.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen bg-linear-to-br from-slate-50 to-green-50 flex items-center relative"
    >
      <div>
        <FiCheckCircle
          className="absolute top-0 -left-20 bg-blend-multiply text-green-100/50 rotate-0"
          size={500}
        />
      </div>
      <div className="max-w-[80%] mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
        >
          Why Choose InsureCow?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          We combine cutting-edge technology with traditional farming to create
          secure, transparent investment opportunities.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm px-4 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:-translate-y-1"
            >
              <div className="flex items-center justify- gap-3 mb-5">
                <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
