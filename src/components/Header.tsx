import { DownloadIcon, Github, WavesArrowDown } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "About", href: "#about-me" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Glass background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-[rgba(3,0,20,0.5)] border-b border-white/5" />

      <Container>
        <div className="relative flex items-center  justify-between h-[70px] px-2 md:px-6">
          {/* ========== LOGO ========== */}
          <a
            href="#about-me"
            className="text-xl md:text-2xl font-semibold tracking-wide text-white group"
          >
            <span className="bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Arafat.dev
            </span>
          </a>

          {/* ========== NAV LINKS ========== */}
          <nav className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-1.5 text-sm text-white/70 hover:text-white transition group"
              >
                {link.name}

                {/* Hover underline animation */}
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 rounded-full bg-white/5 border border-white/10 shadow-lg">
          <a target="_blank" href="https://github.com/siam9192">
              <Github/>
          </a>
          </button>
            {/* ========== CTA BUTTON ========== */}
          <div className="flex items-center gap-2 ">
            <a
              href="#contact"
              className=" px-6 py-2 text-sm  rounded-full bg-linear-to-r from-primary to-purple-500 text-white shadow-md hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2"
            >
           <span className="md:block hidden">
            Download  Resume
           </span>
           <span className="md:hidden text-xs">
             Resume
           </span>
           <WavesArrowDown />
            </a>
          </div>
        </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
