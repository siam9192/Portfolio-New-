import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import JourneyFlow from "./Journy";
import Marquee from "./Marque";
import Projects from "./Projects";
import ScrollProgress from "./ScrollProgress";
import Technologies from "./Technologies";
import WhatILove from "./WhatILove";

function HomePage() {
  return (
    <main className="z-40">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Marquee/>
      <JourneyFlow/>
      <WhatILove />
      <Contact />
      <Footer/>
      <ScrollProgress/>
    </main>
  );
}

export default HomePage;
