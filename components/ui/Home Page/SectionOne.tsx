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
      className="h-screen flex items-center relative"
    >
      <div>
        <FiCheckCircle
          className="absolute top-0 -left-20 bg-blend-multiply text-green-200/30 rotate-0"
          size={500}
        />
      </div>
      <div className="max-w-[70%] mx-auto px-4 text-center">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          // data-aos-once="true"
          className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
        >
          Why Choose InsureCow?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          // data-aos-once="true"
          className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          We combine cutting-edge technology with traditional farming to create
          secure, transparent investment opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={`${idx * 200 + 600}`}
              // data-aos-once="true"
              className="bg-emerald-950/70 backdrop-blur-sm px-4 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-green-500 w-14 h-14 flex items-center justify-center rounded-xl shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed text-left">
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
