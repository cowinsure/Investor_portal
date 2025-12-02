"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FolderKanban } from "lucide-react";
import { Layers } from "lucide-react";

const projects = [
  {
    title: "Livestock Tracking Platform",
    description:
      "Advanced platform for real-time cattle monitoring and health analytics using AI-powered muzzle printometry.",
    image:
      "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?cs=srgb&dl=pexels-matthiaszomer-422218.jpg&fm=jpg",
    tags: ["Next.js", "AI", "Blockchain"],
  },
  {
    title: "Investment Dashboard",
    description:
      "Secure dashboard for tracking livestock investments, returns, and portfolio performance with real-time updates.",
    image:
      "https://www.agrifarming.in/wp-content/uploads/2022/08/Start-Dairy-Farming6.jpg",
    tags: ["React", "Node.js", "Web3"],
  },
  {
    title: "Farm Management System",
    description:
      "Comprehensive system for farmers to manage cattle breeding, health records, and market integration.",
    image:
      "https://img.freepik.com/premium-photo/cows-grazing-fieldla-pampa-province_1048944-30530807.jpg?semt=ais_hybrid&w=740&q=80",
    tags: ["React", "Firebase", "Analytics"],
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
            Our Projects
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
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex items-center flex-wrap gap-2 text-sm text-gray-400">
                  Project status: 
                  <span className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
