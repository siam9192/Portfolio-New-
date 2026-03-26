import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";
import {projects} from "../data/projects";

// Animation
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 40 }
};

const tabs = ["Featured", "Frontend", "Backend", "Fullstack","Mernstack"];

function Projects() {
  const [activeTab, setActiveTab] = useState("Featured");

  // Filter projects based on tab
  const filteredProjects = projects.filter((p) => {
    if (activeTab === "Featured") return p.featured;
    return p.category === activeTab;
  });

  return (
    <Container>
      <section id="projects" className="py-16 lg:py-24 ">
        {/* Title */}
        <SectionHeader
          title="My"
          highlight="Top Projects"
          description="Showcasing my top projects built with modern technologies, focusing on performance, usability, and clean code."
        />

        {/* Tabs */}
        <div className="my-10 flex justify-center  gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm transition 
                ${
                  activeTab === tab
                    ? "inline-block px-6 py-2 text-sm font-medium rounded-full bg-linear-to-r from-primary to-purple-500 text-white shadow-md hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300"
                    : "bg-[#0d1224] text-white border border-white/20 hover:bg-primary hover:text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
       <AnimatePresence>
           {filteredProjects.map((project, index) => (
            <motion.div
              initial="hidden"
            animate="show"
            exit="exit"
            layout
              key={project.title + index}
              variants={item}
              className="group relative rounded-xl overflow-hidden 
  bg-linear-to-br from-[#0d1224] to-[#0a0d37] 
  border border-[#1b2c68a0] shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-bg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-contain  transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  {/* Live Button */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full text-sm font-semibold hover:scale-105 transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 font-secondary mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
       </AnimatePresence>
        </motion.div>
      </section>
    </Container>
  );
}

export default Projects;
