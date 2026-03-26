import { motion } from "framer-motion";
import Container from "./Container";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as any;

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      id="about"
      className="my-12 lg:my-24 relative"
    >
      <Container>
        <div className="bg-linear-to-b from-[#0a0d1f] to-[#0d0f27] p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Vertical Label */}
          <div className="hidden lg:flex flex-col items-center absolute top-16 -right-10">
            <span className="bg-[#1a1443] text-white rotate-90 px-5 py-2 text-xl rounded-md tracking-wider">
              ABOUT ME 
            </span>
            <span className="h-36 w-[2px] bg-[#1a1443] mt-2"></span>
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
  <p className="font-medium text-primary text-4xl uppercase tracking-wide">
    Who Am I
  </p>

  {/* Introduction */}
  <p className="text-gray-200 text-sm lg:text-lg font-secondary">
    I am a{" "}
    <span className="text-[#16f2b3] font-semibold">Junior Full-Stack Developer</span>{" "}
    passionate about building modern, responsive, and user-centric web applications.
    I specialize in crafting seamless frontend interfaces and robust backend systems,
    always focusing on <span className="text-[#f472b6] font-semibold">performance</span>,{" "}
    <span className="text-[#f472b6] font-semibold">scalability</span>, and{" "}
    <span className="text-[#60a5fa] font-semibold">clean code</span>.
  </p>

  {/* Skills Summary */}
  <p className="text-gray-400 text-sm lg:text-base">
    On the frontend, I work with HTML, CSS, JavaScript, React, and Next.js to build
    intuitive interfaces and dynamic components. On the backend, I use Node.js and
    Express.js to create APIs, manage server logic, and interact with databases like
    MongoDB and PostgreSQL. I’m also familiar with authentication (JWT, sessions),
    version control with Git, and deploying apps on platforms like Vercel and Render.
  </p>

  {/* Education & Certificates */}
  <div className="mt-4">
    <h3 className="text-primary font-semibold mb-2 text-lg">
      Education & Certifications
    </h3>
    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
      <li>SSC - BR High School, 2022</li>
      <li>MERN Stack Developer - Programming Hero</li>
      <li>Full-Stack Web Developer - Programming Hero</li>
    </ul>
  </div>

  {/* Interests */}
  <div className="mt-4">
    <h3 className="text-primary font-semibold mb-2 text-lg">Interests</h3>
    <p className="text-gray-400 text-sm">
      Outside of coding, I enjoy <span className="text-[#f472b6]">gaming</span>,{" "}
      <span className="text-[#60a5fa]">music production</span>, and{" "}
      <span className="text-[#16f2b3]">astrophotography</span>.
    </p>
  </div>
</motion.div>


            {/* Profile Image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border border-[#1b2c68a0]">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/053/346/816/small/an-indian-man-in-a-suit-and-tie-png.png"
                  alt="Profile"
                  className="object-cover w-full h-full"
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
