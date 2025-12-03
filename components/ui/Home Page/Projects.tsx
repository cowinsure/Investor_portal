"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FolderKanban } from "lucide-react";
import { Layers } from "lucide-react";

const projects = [
  {
    title: "Insurance Portal",
    description:
      "Advanced platform for real-time cattle monitoring and health analytics using AI-powered muzzle printometry.",
    image: "/platforms/insurancePortal.png",
    tags: ["Digital Asset", "Insurance Application", "Insurance Claim"],
  },
  {
    title: "Insurance ERP",
    description:
      "Secure dashboard for tracking livestock investments, returns, and portfolio performance with real-time updates.",
    image: "/platforms/insuranceERP.png",
    tags: [
      "Insurance Management",
      "Agent Management",
      "Insurance Report",
    ],
  },
  {
    title: "Farm Management System",
    description:
      "Comprehensive system for farmers to manage cattle breeding, health records, and market integration.",
    image: "/platforms/farmManagement.png",
    tags: [
      "Cattle Health Tracking",
      "Cattle Breeding Tracking",
      "Finance Management",
    ],
  },
];

export default function ProjectShowcase() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="projects" className="py-36 bg-white relative">
      <div>
        <Layers
          className="absolute top-0 -left-20 bg-blend-multiply text-green-200/30 rotate-0"
          size={500}
        />
      </div>
      <div className="lg:max-w-[70%] mx-auto px-6">
        {/* Section Heading */}
        <div data-aos="fade-up" className="text-center mb-14">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Our Platforms
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            Innovative solutions powering the future of livestock investment and
            farm management.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={`${idx * 200 + 100}`}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl
                        border border-white/20 overflow-hidden transform hover:-translate-y-2
                        transition-all duration-500"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex items-center flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
