import { motion } from "framer-motion";
import Container from "./Container";
import { Server, Cloud, GraduationCap, Rocket } from "lucide-react";

const journeyData = [
  {
    year: "2022",
    title: "Completed SSC",
    description:
      "Successfully completed Secondary School Certificate with a strong academic foundation and interest in technology.",
    icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
   
  },
  {
    year: "2023",
    title: "Completed Programming Hero Level-1",
    description:
      "Learned React, Next.js, and Redux. Built dynamic and interactive frontend applications.",
    icon: <Rocket className="w-6 h-6 text-blue-400" />,
    
  },
  {
    year: "2024",
    title: "Completed Programming Hero Level-2",
    description:
      "Expanded into backend development with Node.js, Express, NestJS, and databases like MongoDB & MySQL.",
    icon: <Server className="w-6 h-6 text-green-400" />,
   
  },
  {
    year: "Present",
    title: "Seeking Opportunities",
    description:
      "Currently focusing on advanced topics like Docker, AWS, and CI/CD to build scalable production-ready applications.",
    icon: <Cloud className="w-6 h-6 text-orange-400" />,
  
  },
];

const FlowJourney = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.6, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 lg:py-24"
    >
      <Container>
        {/* 🏷️ Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white font-bold">
            <span className="text-primary">My</span> Journey
          </h2>

          <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-3xl mx-auto">
            I work with modern technologies to build scalable, high-performance
            web applications. From frontend interfaces to backend systems, I
            focus on clean, efficient, and production-ready solutions.
          </p>
        </div>

        <div className="relative w-full px-4 lg:px-6 py-10">
          {/* 🌈 Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl opacity-40" />

          {/* 📱 Vertical Line (Mobile Only) */}
          <div className="lg:hidden absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-30" />

          {/* 💻 Curved Line (Desktop Only) */}
          <svg
            className="hidden lg:block absolute top-1/2 left-0 w-full h-60 -translate-y-1/2"
            viewBox="0 0 1000 200"
            fill="none"
          >
            <path
              d="M50 150 C250 50, 750 50, 950 150"
              stroke="url(#gradientLine)"
              strokeWidth="6"
              strokeOpacity="0.3"
              className="blur-md"
            />
            <path
              d="M50 150 C250 50, 750 50, 950 150"
              stroke="url(#gradientLine)"
              strokeWidth="3"
              fill="transparent"
            />
            <defs>
              <linearGradient id="gradientLine" x1="0" y1="0" x2="1000" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* 🧵 Timeline */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16">
            {journeyData.map((item, index) => {
              const isUp = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center relative mb-10 lg:mb-0 
                    ${isUp ? "lg:-mt-20" : "lg:mt-20"}
                  `}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                >
                  {/* 🔵 Icon */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full" />
                    <div className="w-14 h-14 rounded-full bg-[#0d1224] border border-[#1b2c68a0] flex items-center justify-center shadow-xl">
                      {item.icon}
                    </div>
                  </div>

                  {/* 🧊 Card */}
                  <div className="mt-6 w-full max-w-xs backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 text-center shadow-xl hover:scale-105 hover:shadow-purple-500/20 transition-all duration-300">
                    <span className="text-primary font-semibold text-sm tracking-wide">
                      {item.year}
                    </span>

                    <h3 className="text-lg text-white mt-2 ">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-2 text-sm leading-relaxed font-secondary">
                      {item.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FlowJourney;
