import { useRef, useState } from "react";
import { IntroScreen } from "./components/IntroScreen";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { SkillsMarquee } from "./components/sections/SkillsMarquee";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import Footer from "./components/Footer";
import { useReveal, prefersReducedMotion } from "./hooks/useReveal";
import { profile } from "./data/profile";
import { experience } from "./data/experience";
import { projects } from "./data/projects";

// Nav links only appear for sections that have content.
const navLinks = [
  { label: "About", href: "#about" },
  experience.length && { label: "Experience", href: "#experience" },
  projects.length && { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
].filter(Boolean);

function App() {
  const [introDone, setIntroDone] = useState(prefersReducedMotion);
  // The hero starts animating while the intro is still fading out.
  const [heroReady, setHeroReady] = useState(prefersReducedMotion);
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-clip bg-bg text-ink">
      {!introDone && (
        <IntroScreen
          onReveal={() => setHeroReady(true)}
          onDone={() => setIntroDone(true)}
        />
      )}
      <Background />
      <Navbar links={navLinks} resumeUrl={profile.resumeUrl} />
      <main className="relative z-[1]">
        <Hero ready={heroReady} />
        <SkillsMarquee />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
