import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { ExternalLink, Github } from "lucide-react";

// Demo projects data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce app with cart & payments.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    tech: ["Next.js", "Node.js", "MongoDB"],
    live: "https://your-live-demo.vercel.app",
    github: "https://github.com/yourusername/ecommerce-app",
    category: "Fullstack",
    featured: true,
  },
  {
    title: "Social Media App",
    description: "Realtime social platform with posts & likes.",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800",
    tech: ["React", "Firebase", "Redux"],
    live: "https://your-social-app.vercel.app",
    github: "https://github.com/yourusername/social-app",
    category: "Frontend",
    featured: true,
  },
  {
    title: "API Service",
    description: "Backend API with authentication and CRUD endpoints.",
    image:
      "https://images.unsplash.com/photo-1581091870623-11e6d5f16fc2?q=80&w=800",
    tech: ["Node.js", "Express", "PostgreSQL"],
    live: "#",
    github: "https://github.com/yourusername/api-service",
    category: "Backend",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js & Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c443e25?q=80&w=800",
    tech: ["Next.js", "Tailwind CSS"],
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio",
    category: "Frontend",
    featured: true,
  },
];

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
};

const tabs = ["Featured", "Frontend", "Backend", "Fullstack"];

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
        <div className="text-center mb-12 z-50">
          <h2 className="text-5xl text-text-on-bg">
            My Top <span className="text-primary-dark">Projects</span>
          </h2>
          <p className="text-text-on-bg-soft font-secondary mt-3 text-sm max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my ability
            to build scalable, high-performance, and user-focused applications
            using modern technologies and best practices.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition 
                ${
                  activeTab === tab
                    ? "bg-primary text-black shadow-lg"
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative rounded-xl overflow-hidden 
  bg-linear-to-br from-[#0d1224] to-[#0a0d37] 
  border border-[#1b2c68a0] shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
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
        </motion.div>
      </section>
    </Container>
  );
}

export default Projects;
