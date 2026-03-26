import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import JourneyFlow from "./Journy";
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
      <JourneyFlow/>
      <WhatILove />
      <Contact />
      <ScrollProgress/>
    </main>
  );
}

export default HomePage;
