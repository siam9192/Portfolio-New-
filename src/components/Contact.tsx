import { motion } from "framer-motion";
import Container from "./Container";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={40} />,
    title: "Email",
    value: "your@email.com",
    link: "mailto:your@email.com",
  },
  {
    icon: <Github size={40} />,
    title: "GitHub",
    value: "github.com/yourusername",
    link: "https://github.com/yourusername",
  },
  {
    icon: <Linkedin size={40} />,
    title: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: <MapPin size={40} />,
    title: "Location",
    value: "Bangladesh",
    link: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function ContactInfo() {
  return (
    <Container>
      <motion.section
        initial={{ opacity: 0, scale: 0.4, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        id="contact"
        className="py-16 lg:py-24"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-text-on-bg">
            <span className="text-primary-dark">How to</span> Contact Me
          </h2>
          <p className="text-text-on-bg-soft mt-3 text-sm max-w-xl mx-auto font-secondary">
            Feel free to reach out through any of the platforms below. I'm
            always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid  grid-cols-2  lg:grid-cols-4 gap-6  bg-[#0a0d1f]/90 p-5 lg:p-20 rounded-lg"
        >
          {contacts.map((itemData, index) => (
            <motion.a
              key={index}
              href={itemData.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative p-[1px] rounded-xl 
              bg-linear-to-br from-primary/40 via-purple-500/20 to-transparent 
              hover:from-primary hover:via-purple-500 hover:to-pink-500 transition"
            >
              {/* Inner */}
              <div
                className="rounded-xl p-6 h-full 
              bg-[#0a0d1f]/90 backdrop-blur-xl 
              border border-white/5 
              flex flex-col items-center text-center gap-3"
              >
                {/* Icon */}
                <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition ">
                  {itemData.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm text-gray-400">{itemData.title}</h3>

                {/* Value */}
                <p className="text-white text-sm  font-secondary break-all">
                  {itemData.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-10 text-center font-secondary text-gray-400 text-sm">
          Open to freelance, collaborations, and full-time opportunities.
        </div>
      </motion.section>
    </Container>
  );
}

export default ContactInfo;
