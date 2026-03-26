import { motion } from "framer-motion";
import Container from "./Container";

const technologies = [
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    image: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "MongoDB",
    image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_classic.svg",
  },
  {
    name: "Docker",
    image: "https://www.vectorlogo.zone/logos/docker/docker-tile.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Next.js",
    image: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  },
  {
    name: "GraphQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    name: "Redis",
    image: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  },
  {
    name: "AWS",
    image: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  {
    name: "Firebase",
    image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Kubernetes",
    image: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  },
  {
    name: "Git",
    image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "Redux",
    image:
      "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  {
    name: "Jest",
    image: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
  },
  {
    name: "Prisma",
    image: "https://www.vectorlogo.zone/logos/prisma/prisma-icon.svg",
  },
  {
    name: "Vite",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
  },
  {
    name: "Supabase",
    image: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
  },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function Technologies() {
  return (
    <Container>
      <section id="technologies" className="py-16 lg:py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl text-text-on-bg">
            <span className="text-primary-dark">Technologies</span> I KNOW
          </h2>

          <p className="text-sm font-secondary text-text-on-bg-soft mt-2 leading-relaxed  lg:w-10/12 mx-auto">
            I work with a diverse set of modern technologies to design and build
            scalable, high-performance web applications. From crafting intuitive
            user interfaces with frontend frameworks to developing robust
            backend systems and managing databases, I focus on delivering clean,
            efficient, and maintainable solutions. These tools help me turn
            ideas into real-world digital products that are fast, reliable, and
            user-friendly.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="mt-20 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.4,
                rotateY: 15,
              }}
              className="group flex flex-col items-center justify-center p-4 
            from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-linear-to-r to-[#0a0d37]  backdrop-blur-md hover:scale-105 transition duration-300 cursor-pointer"
            >
              {/* Icon */}
              <img
                src={tech.image}
                alt={tech.name}
                className="w-30 h-30 object-contain mb-3 transition"
              />

              {/* Name */}
              <p className="text-xs text-gray-300 group-hover:text-white text-center">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Container>
  );
}

export default Technologies;
