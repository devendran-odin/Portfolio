import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import Footer from "./components/Footer";
import FollowCursor from "./components/FollowCursor/FollowCursor";
import TrailingCursor from "./components/FollowCursor/TrailingCursor";
import BlurText from "./blocks/TextAnimations/BlurText/BlurText";
import { Fade } from "react-awesome-reveal";
import { AnimatedBackground } from "animated-backgrounds";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground animationName="starryNight" blendMode="Multiply" />
      </div> */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }  text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Fade damping={1.5} duration={3500}>
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Fade>
        {/* <FollowCursor /> */}
        <TrailingCursor />
      </div>
    </>
  );
}

export default App;
