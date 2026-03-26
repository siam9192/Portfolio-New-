// Demo data
const personalData = {
  description:
    "I am a passionate Full Stack Developer from Bangladesh. I specialize in building modern, scalable, and user-friendly web applications using React, Next.js, Node.js, and more. I love crafting smooth user experiences and solving complex problems.",
  profile: "/profile-demo.jpg", // Replace with your demo image path
};
import { motion } from "framer-motion";
import Container from "./Container";

// Demo skills
const skills = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "MongoDB",
  "MySQL",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as any;

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.4, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: .5 }}
      id="about"
      className="my-12 lg:my-24 relative "
    >
   <Container>
     <div className="bg-linear-to-b from-[#0a0d1f] to-[#0d0f27] p-6 lg:p-12 rounded-2xl shadow-lg">
       {/* Vertical label */}
        <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Section Title */}
            <p className="font-medium mb-5 text-primary text-4xl uppercase">
              Who I am?
            </p>

            {/* Introduction */}
            <p className="text-gray-200 text-sm lg:text-lg font-secondary">
              I'm a{" "}
              <span className="text-[#16f2b3] font-semibold">
                Full Stack Developer
              </span>{" "}
              passionate about building modern web applications that are{" "}
              <span className="text-[#f472b6] font-semibold">
                fast, scalable,
              </span>{" "}
              and{" "}
              <span className="text-[#60a5fa] font-semibold">user-focused</span>
              . I love crafting seamless experiences that combine{" "}
              <span className="text-[#facc15] font-semibold">performance</span>{" "}
              with clean, maintainable code.
            </p>

            <p className="text-gray-400 text-sm lg:text-base">
              Over the years, I've worked on projects ranging from{" "}
              <span className="text-[#f472b6]">dynamic web apps</span> to{" "}
              <span className="text-[#60a5fa]">real-time platforms</span>,
              always striving to deliver elegant solutions that solve real-world
              problems.
            </p>

            {/* Skills List */}
            {/* <div className="flex flex-wrap gap-3">
    {skills.map((skill, idx) => (
      <motion.span
        key={idx}
        className="px-3 py-1 text-xs bg-gradient-to-r from-[#16f2b3] to-[#f472b6] text-black rounded-full font-semibold shadow-sm"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {skill}
      </motion.span>
    ))}
  </div> */}

            {/* Experience / Timeline */}
            {/* <div className="mt-6">
    <h3 className="text-primary font-semibold mb-3 text-lg">Experience</h3>
    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
      <li>
        <span className="text-[#16f2b3] ">2023 - Present:</span>{" "}
        Full Stack Developer at <span className="text-[#f472b6]">TechCorp</span>
      </li>
      <li>
        <span className="text-[#16f2b3] ">2021 - 2023:</span>{" "}
        Frontend Developer at <span className="text-[#f472b6]">Webify</span>
      </li>
      <li>
        <span className="text-[#16f2b3] ">2020:</span> Freelance
        Web Developer
      </li>
    </ul>
  </div> */}

            {/* Education / Certifications */}
            <div className="mt-4">
              <h3 className="text-primary font-semibold mb-3 text-lg">
                Education & Certificates
              </h3>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>B.Sc in Computer Science - XYZ University</li>
                <li>Certified React Developer - ABC Institute</li>
                <li>Node.js & Express Certification - Online Course</li>
              </ul>
            </div>

            {/* Fun facts / Interests */}
            <div className="mt-4">
              <h3 className="text-primary font-semibold mb-3 text-lg">
                Fun Facts
              </h3>
              <p className="text-gray-400 text-sm">
                When I'm not coding, I enjoy{" "}
                <span className="text-[#f472b6]">gaming</span>,
                <span className="text-[#60a5fa]"> music production</span>, and
                <span className="text-[#16f2b3]"> astrophotography</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            {/* <div className="mt-6 flex flex-wrap gap-4">
    <a
      href="/demo-cv.pdf"
      className="px-6 py-3 bg-primary text-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
    >
      Download CV
    </a>
    <a
      href="#contact"
      className="px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition"
    >
      Contact Me
    </a>
  </div> */}
          </motion.div>

          {/* Image */}
          <motion.div
            className=" order-1 lg:order-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className=" w-100 h-100 mx-auto bg-black  rounded-full overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/053/346/816/small/an-indian-man-in-a-suit-and-tie-png.png"
                alt=""
                className=" h-[95%] mt-10 mx-auto"
              />
            </div>
          </motion.div>
        </div>
    </div>
   </Container>
    </motion.section>
  );
}

export default About;
