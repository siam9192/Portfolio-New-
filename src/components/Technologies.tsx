import { motion } from "framer-motion";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const technologies = [
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/960px-CSS3_logo.svg.png",
  },

  {
    name: "Javascript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/960px-Unofficial_JavaScript_logo_2.svg.png",
  },

  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Node.js",
    image: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "MongoDB",
    image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/250px-Postgresql_elephant.svg.png",
  },
  // {
  //   name: "Docker",
  //   image: "https://www.vectorlogo.zone/logos/docker/docker-tile.svg",
  // },
  {
    name: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Next.js",
    image: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  },
  // {
  //   name: "GraphQL",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  // },
  {
    name: "Redis",
    image: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  },
  // {
  //   name: "AWS",
  //   image: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  // },
  // {
  //   name: "Firebase",
  //   image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  // },
  // {
  //   name: "Python",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  // },
  // {
  //   name: "Kubernetes",
  //   image: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  // },

  {
    name: "Redux",
    image:
      "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  // {
  //   name: "Jest",
  //   image: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
  // },
  {
    name: "Prisma",
    image:
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png",
  },
  {
    name: "Mongoose",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQEk8opKsyHhRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693917399837?e=2147483647&v=beta&t=L_IQgiz-aKgF-m3L2lYQxNFCwIKvn09DwxghjuWIF-I",
  },
  {
    name: "Vite",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
  },

  {
    name: "Git",
    image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "Postman",
    image:
      "https://avatars.slack-edge.com/2024-04-05/6934042159649_ac803d1cddbcbef8f110_512.png",
  },

  // {
  //   name: "Supabase",
  //   image: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
  // },
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
      <section id="skills" className="py-16 lg:py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <SectionHeader
            title="Technologies I"
            highlight="Work With"
            description="I build scalable, high-performance web applications using modern technologies, focusing on clean and efficient solutions."
          />
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
                scale: 1.2,
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
