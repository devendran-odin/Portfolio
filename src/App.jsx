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
import { Fade } from "react-awesome-reveal";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full blur-[100px] animate-blob pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 rounded-full blur-[100px] animate-blob pointer-events-none"></div>
      </div>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-transparent text-gray-100`}
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
