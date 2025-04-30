import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="flex">
            <span className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Devendran
            </span>
            <span className="hidden md:block ml-2 text-5xl md:text-7xl font-bold">
              👋
            </span>
          </div>

          <p className="tex-gray-400 text-[16px] md:text-lg mb-8 max-w-xl  mx-auto">
            I'm a full-stack developer eager to contribute to impactful projects
            and grow as a developer. I build clean, scalable websites that solve
            real-world problems and deliver great user experiences. I'm excited
            to collaborate and make a difference through technology.
          </p>
          <div className="flex  flex-col md:flex-row justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] w-full"
            >
              View Projects
            </a>

            <a
              href="/Devendran-Resume.pdf"
              download
              className="mt-3.5 md:mt-0 border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 w-full"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
