/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(4px)" as string, // cast as any to bypass typing
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)" as string,
    transition: { duration: 0.8, ease: easeOut }, // use imported ease function
  },
};

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const Banner = () => {
  return (
    <section className="bg-linear-to-br from-green-100 via-green-50/50 to-green-100 py-16 h-screen">
      <motion.div
        className="mx-auto flex flex-col lg:flex-row gap-12 px-6 lg:px-0 max-w-[80%] h-full "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h1
            className="text-4xl lg:text-7xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Invest in Real <br /> Livestock,{" "}
            <span className="text-green-600">Backed by AI Verification</span>
          </motion.h1>
          <motion.p className="text-gray-700 mb-8" variants={itemVariants}>
            Discover transparent, Shariah-compliant livestock investments
            verified by Muzzle Printometry™. Build meaningful wealth while
            supporting real farmers and sustainable agriculture.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <button className="bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Explore Opportunities
            </button>
            <button className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              View Dashboard
            </button>
          </motion.div>
          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-6 mt-10"
            variants={statsContainerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-green-600 text-xl font-bold">$2.5M+</h3>
              <p className="text-gray-500 text-sm">Total Invested</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-green-600 text-xl font-bold">1,200+</h3>
              <p className="text-gray-500 text-sm">Active Investors</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-green-600 text-xl font-bold">98%</h3>
              <p className="text-gray-500 text-sm">Satisfaction Rate</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex items-center"
          variants={imageVariants}
        >
          <motion.img
            src="/cow.png"
            alt="Cow in field"
            className="rounded-xl shadow-xl w-full h-[80%] object-cover"
            variants={imageVariants}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
