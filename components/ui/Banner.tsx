/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, easeOut } from "framer-motion";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <section className="bg-linear-to-br from-green-100 via-green-50/50 to-green-100 py-8 md:py-16 min-h-screen drop-shadow-xl lg:flex items-center justify-center pt-24 lg:pt-0">
      <motion.div
        className="mx-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 px-4 sm:px-6 lg:px-0 max-w-[98%] lg:max-w-[80%] h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center lg:pt-10">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight"
            variants={itemVariants}
          >
            Invest in Real <br className="hidden lg:block" /> Livestock,{" "}
            <span className="text-green-600">Backed by AI Verification</span>
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-6 lg:mb-8 text-sm sm:text-base leading-relaxed"
            variants={itemVariants}
          >
            Discover transparent, Shariah-compliant livestock investments
            verified by Muzzle Printometry™. Build meaningful wealth while
            supporting real farmers and sustainable agriculture.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            variants={itemVariants}
          >
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer bg-green-600 text-white font-medium px-4 sm:px-6 py-3 rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
            >
              Explore Opportunities
            </button>
            <button
              onClick={() => router.push("/investments")}
              className="cursor-pointer border border-gray-300 text-gray-700 font-medium px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base"
            >
              View Dashboard
            </button>
          </motion.div>
          {/* Stats */}
          <motion.div
            className="flex justify-evenly md:justify-normal flex-wrap gap-4 sm:gap-6 mt-8 lg:mt-10"
            variants={statsContainerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="text-center sm:text-left"
            >
              <h3 className="text-green-600 text-lg sm:text-xl lg:text-2xl font-bold">
                $2.5M+
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">Total Invested</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-center sm:text-left"
            >
              <h3 className="text-green-600 text-lg sm:text-xl lg:text-2xl font-bold">
                1,200+
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Active Investors
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-center sm:text-left"
            >
              <h3 className="text-green-600 text-lg sm:text-xl lg:text-2xl font-bold">
                98%
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Satisfaction Rate
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex items-center lg:justify-end md:pt-12 lg:pt-10"
          variants={imageVariants}
        >
          <motion.img
            src="/banner2.png"
            alt="Cow in field"
            className="rounded-xl shadow-xl w-full lg:max-w-none h-full lg:h-[70%] xl:h-[80%] object-cover"
            variants={imageVariants}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
