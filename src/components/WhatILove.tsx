import { motion } from "framer-motion";
import Container from "./Container";
import { Code, Server, Layers, Database } from "lucide-react";

// Data
const interests = [
  {
    title: "Frontend Development",
    icon: <Code size={50} />,
    description:
      "I enjoy building beautiful, responsive, and interactive user interfaces using modern tools like React, Next.js, and Tailwind CSS. My focus is on creating smooth user experiences with clean design and performance optimization.",
  },
  {
    title: "Backend Development",
    icon: <Server size={50} />,
    description:
      "I love designing scalable backend systems, building APIs, and handling complex business logic. I work with Node.js, Express, and databases like MongoDB & PostgreSQL to create reliable server-side solutions.",
  },
  // {
  //   title: "Database Design",
  //   icon: <Database size={50} />,
  //   description:
  //     "I enjoy designing efficient and well-structured databases with proper relationships, normalization, and indexing. I work with SQL and NoSQL databases like PostgreSQL and MongoDB, focusing on performance, data integrity, and scalability.",
  // },
  {
    title: "System Design",
    icon: <Layers size={50} />,
    description:
      "I’m passionate about structuring applications with clean architecture, designing efficient systems, and ensuring scalability. I focus on performance, maintainability, and real-world problem solving.",
  },
];

// Animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function WhatILove() {
  return (
    <Container>
      <section id="what-i-love" className="py-16 lg:py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-on-bg">
            What I <span className="text-primary-dark">Love To</span> Do
          </h2>
          <p className="text-text-on-bg-soft mt-3 text-sm max-w-2xl mx-auto leading-relaxed font-secondary">
            I focus on different areas of development that allow me to build
            complete, scalable, and user-friendly applications from end to end.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {interests.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.06, rotateX: 6, rotateY: 6 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="group relative p-[1px] rounded-2xl 
  bg-linear-to-br from-primary/40 via-purple-500/20 to-transparent 
  hover:from-primary hover:via-purple-500 hover:to-pink-500
  transition-all duration-500"
            >
              {/* Inner Card */}
              <div
                className="relative h-full rounded-2xl p-6 
    bg-[#0a0d1f]/90 backdrop-blur-xl 
    border border-white/5 
    overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl"></div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute w-[200%] h-[200%] rotate-12 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className="mb-4 p-5 rounded-full 
        bg-linear-to-br from-primary/20 to-purple-500/20 
        border border-primary/20 
        shadow-inner 
        group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] 
        transition duration-300"
                  >
                    <div className="text-primary">{itemData.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl  text-white mb-3 tracking-wide">
                    {itemData.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-[2px] bg-linear-to-r from-primary to-purple-500 mb-4 rounded-full"></div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 font-secondary leading-relaxed">
                    {itemData.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Container>
  );
}

export default WhatILove;
