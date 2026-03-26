import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BsJavascript,
  BsGit,
  BsGithub,
} from "react-icons/bs";
import {
  DiReact,
  DiDocker,
  DiNodejs,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiGraphql,
  SiFirebase,
  SiRedux,
  SiVercel,
} from "react-icons/si";
import { DatabaseIcon, Server, Code2 } from "lucide-react";

const skills = [
  // 🔹 Frontend
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: BsJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: DiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },

  // 🔹 Backend
  { name: "Node.js", icon: DiNodejs },
  { name: "Express.js", icon: SiExpress },
  { name: "REST API", icon: Server },
  { name: "GraphQL", icon: SiGraphql },

  // 🔹 Database
  { name: "MongoDB", icon: DiMongodb },
  { name: "PostgreSQL", icon: DiPostgresql },
  { name: "MySQL", icon: DatabaseIcon },
  { name: "Prisma ORM", icon: SiPrisma },

  // 🔹 Tools & DevOps
  { name: "Git", icon: BsGit },
  { name: "GitHub", icon: BsGithub },
  { name: "Docker", icon: DiDocker },
  { name: "Firebase", icon: SiFirebase },
  { name: "Vercel", icon: SiVercel },

  // 🔹 Concepts
  { name: "System Design", icon: Server },
  { name: "API Design", icon: Server },
  { name: "Authentication", icon: Server },
];

export default function Marque() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2); // half width for looping
    }
  }, []);

  return (
    <section className="py-20 overflow-hidden relative bg-transparent">
      {/* Gradient overlay like react-fast-marquee */}
      <div className="absolute inset-0 bg-linear-to-r from-bg/10 via-transparent to-black/10  z-10" />
      
      <motion.div
        className="flex gap-10 whitespace-nowrap opacity-45"
        animate={{ x: [-width, 0] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
        }}
        ref={marqueeRef}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="m-10 font-semibold flex items-center gap-4"
          >
            <skill.icon size={64} className="text-primary-light" />
            <p className=" glow-outline  text-5xl md:text-6xl ">{skill.name}</p>
          </div>
        ))}
        {/* Duplicate for seamless looping */}
        {skills.map((skill, index) => (
          <div
            key={`dup-${index}`}
            className="m-10  font-semibold flex items-center gap-4"
          >
            <skill.icon size={64} className="text-white" />
            <p className="  text-5xl md:text-6xl text-clip">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
