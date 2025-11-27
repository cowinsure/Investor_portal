"use client";


import "aos/dist/aos.css";
import { ShieldCheck, CheckCircle, TrendingUp, Users } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-900" />,
    title: "AI-Verified Assets",
    description:
      "Every animal verified through unique Muzzle Printometry™ technology, ensuring authenticity and traceability.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-900" />,
    title: "Fully Insured",
    description:
      "Comprehensive insurance coverage protects your investment against health risks and unforeseen circumstances.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-900" />,
    title: "Attractive Returns",
    description:
      "Earn projected returns of 12-18% annually through sustainable livestock growth and breeding programs.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-900" />,
    title: "Support Farmers",
    description:
      "Make a meaningful impact by providing capital to local farmers and contributing to sustainable agriculture.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      data-aos="fade-up"
      // data-aos-once="true"
      className="min-h-screen py-16 md:py-24 lg:h-screen flex items-center relative"
    >
      <div>
        <FiCheckCircle
          className="absolute top-0 -left-10 md:-left-20 bg-blend-multiply text-green-200/30 rotate-0"
          size={500}
        />
      </div>
      <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-4 text-center">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          // data-aos-once="true"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 lg:mb-6 tracking-tight"
        >
          Why Choose InsureCow?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          // data-aos-once="true"
          className="text-base sm:text-lg text-gray-700 mb-8 lg:mb-16 max-w-2xl mx-auto leading-relaxed px-4"
        >
          We combine cutting-edge technology with traditional farming to create
          secure, transparent investment opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={`${idx * 200 + 600}`}
              // data-aos-once="true"
              className="bg-emerald-950/70 backdrop-blur-sm px-4 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4 lg:mb-5 text-center sm:text-left">
                <div className="bg-green-500 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl shadow-sm flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed text-center sm:text-left text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
