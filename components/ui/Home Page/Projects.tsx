"use client";

import { motion } from "framer-motion";
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

export default function ProjectShowcase() {
  return (
    <section className="py-36 bg-white relative">
      <div>
        <Layers
          className="absolute top-0 -left-20 bg-blend-multiply text-green-200/30 rotate-0"
          size={500}
        />
      </div>
      <div className="max-w-[80%] mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Our Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            Innovative solutions powering the future of livestock investment and
            farm management.
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
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
                {/* <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full border border-green-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
