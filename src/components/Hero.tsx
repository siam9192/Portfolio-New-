"use client";
import { motion } from "framer-motion";
import Container from "./Container";
import Typewriter from "typewriter-effect";
import Counter from "./Counter";


const Hero = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  } as any;

  const itemVars = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as any;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ========== BACKGROUND VIDEO ========== */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute -top-140 lg:-top-70 inset-0 w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </motion.video>

      <Container>
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 py-20 gap-12 items-center"
        >
          {/* ========== CONTENT ========== */}
          <div className="relative z-20 px-6 max-w-3xl">
            <motion.p
              variants={itemVars}
              className="text-xl text-primary mb-3 tracking-widest uppercase"
            >
            Passionate Developer
            </motion.p>

            <motion.h1
              variants={itemVars}
              className="text-5xl md:text-7xl text-text-on-bg leading-tight font-semibold"
            >
              HELLO,
              <br />
              <p className=" text-transparent bg-linear-to-r from-primary to-purple-500 bg-clip-text ">
                <Typewriter
                  options={{
                    loop: true,
                    cursorClassName: "typewriter-cursor",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("I'M ARAFAT")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("Full Stack Dev.")
                      .pauseFor(1500)
                      .deleteAll() 
                      .start();
                  }}
                />
              </p>
            </motion.h1>

            <motion.p
              variants={itemVars}
              className="mt-5 text-text-on-bg-soft text-sm font-secondary leading-relaxed"
            >
              I specialize in building modern web applications using React,
              Next.js, and Node.js. My focus is on performance, clean
              architecture, and creating smooth user experiences.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={itemVars}
              className="mt-8 flex flex-col sm:flex-row md:items-center gap-4 text-center"
            >
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-linear-to-r from-primary to-purple-500 text-text-on-primary shadow-shadow-glow hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-border-on-dark text-text-on-bg hover:bg-white/5 hover:border-primary transition"
              >
                Contact Me
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={itemVars}
              className="mt-10 flex items-center gap-4 md:gap-8 text-text-on-bg-soft text-sm"
            >
              {[
                { label: "Projects Completed", value: 10, symbol: "+" },
                { label: "Years Learning", value: 2, symbol: "+" },
                { label: "Passion", value: 100, symbol: "%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center px-4 py-3 rounded-xl border border-[#1b2c68a0] bg-linear-to-r from-[#0d1224] to-[#0a0d37] backdrop-blur-md hover:scale-105 transition  text-center"
                >
                  <p className=" text-2xl md:text-3xl font-bold text-text-on-bg">
                    <Counter targetValue={stat.value} />
                    <span className="text-primary">{stat.symbol}</span>
                  </p>
                  <p className="mt-1 text-[9px] tracking-wide uppercase">
                    {stat.label}
                  </p>
                 
                </div>
              ))}
            </motion.div>
          </div>

          {/* ========== CODE BLOCK ========== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-linear-to-r to-[#0a0d37]"
          >
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-linear-to-r from-transparent via-pink-500 to-violet-600"></div>

              <div className="h-[1px] w-full bg-linear-to-r from-violet-600 to-transparent"></div>
            </div>

            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>

                <div className="h-3 w-3 rounded-full bg-orange-400"></div>

                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>

            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>

                  <span className="mr-2 text-white">coder</span>

                  <span className="mr-2 text-pink-500">=</span>

                  <span className="text-gray-400">{"{"}</span>
                </div>

                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>

                  <span className="text-gray-400">{`'`}</span>

                  <span className="text-amber-300">Arafat Hasan Siam</span>

                  <span className="text-gray-400">{`',`}</span>
                </div>

                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>

                  <span className="text-gray-400">{`['`}</span>

                  <span className="text-amber-300">React</span>

                  <span className="text-gray-400">{"', '"}</span>

                  <span className="text-amber-300">NextJS</span>

                  <span className="text-gray-400">{"', '"}</span>

                  <span className="text-amber-300">Redux</span>

                  <span className="text-gray-400">{"', '"}</span>

                  <span className="text-amber-300">Express</span>

                  <span className="text-gray-400">{"', '"}</span>

                  <span className="text-amber-300">NestJS</span>

                  <span className="text-gray-400">{"', '"}</span>

                  <span className="text-amber-300">MySql</span>

                  <span className="text-gray-400">{"', '"}</span>

                  <span className="text-amber-300">MongoDB</span>

                  <span className="text-gray-400">{"', '"}</span>

                  <span className="text-amber-300">Docker</span>

                  <span className="text-gray-400">{"', '"}</span>

                  <span className="text-amber-300">AWS</span>

                  <span className="text-gray-400">{"'],"}</span>
                </div>

                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    hardWorker:
                  </span>

                  <span className="text-orange-400">true</span>

                  <span className="text-gray-400">,</span>
                </div>

                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    quickLearner:
                  </span>

                  <span className="text-orange-400">true</span>

                  <span className="text-gray-400">,</span>
                </div>

                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    problemSolver:
                  </span>

                  <span className="text-orange-400">true</span>

                  <span className="text-gray-400">,</span>
                </div>

                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                    hireable:
                  </span>

                  <span className="text-orange-400">function</span>

                  <span className="text-gray-400">{"() {"}</span>
                </div>

                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                    return
                  </span>

                  <span className="text-gray-400">{`(`}</span>
                </div>

                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>

                  <span className="mr-2 text-white">hardWorker</span>

                  <span className="text-amber-300">&amp;&amp;</span>
                </div>

                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>

                  <span className="mr-2 text-white">problemSolver</span>

                  <span className="text-amber-300">&amp;&amp;</span>
                </div>

                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>

                  <span className="mr-2 text-white">skills.length</span>

                  <span className="mr-2 text-amber-300">&gt;=</span>

                  <span className="text-orange-400">5</span>
                </div>

                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                </div>

                <div>
                  <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                </div>

                <div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
              </code>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
