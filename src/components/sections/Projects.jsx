import { RevealOnScroll } from "../RevealOnScroll";
import rentify from "../../assets/rentify3.png";
import delicious from "../../assets/delicious.png";
import movieverse from "../../assets/movieverse.png";
import fitclub from "../../assets/fitclub.png";
import jobadmin from "../../assets/job-admin.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src={rentify} alt="rentify" className="rounded-xl w-full" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-6 ">
                Rentify
              </h3>
              <p className="text-gray-400 mb-4">
                A full-stack rental platform enabling property listings, secure
                user authentication (JWT), advanced search filters, image
                uploads via Cloudinary, and automated emails with SendGrid, plus
                admin tools for efficient management.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://rentify-houserent.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={delicious}
                alt="delicious"
                className="rounded-xl w-full"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-6 ">
                Delicious
              </h3>
              <p className="text-gray-400 mb-4">
                A mobile-responsive recipe search web app using the Edamam API
                to explore global dishes. Features an intuitive UI built with
                Tailwind CSS and JavaScript, offering seamless API integration
                and real-time recipe data fetching.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://delicious-dish-recipe.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={movieverse}
                alt="movieverse"
                className="rounded-xl w-full"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-6 ">
                MovieVerse
              </h3>
              <p className="text-gray-400 mb-4">
                An intuitive movie exploration platform powered by React and
                TMDB API, offering responsive design, smart search features, and
                dynamic content for seamless user engagement. Implements
                real-time browsing to enhance the overall user experience.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://movieverse-list.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src={fitclub} alt="fitclub" className="rounded-xl w-full" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-6 ">
                Fitclub
              </h3>
              <p className="text-gray-400 mb-4">
                A modern fitness website UI crafted with Tailwind CSS,
                showcasing responsive design and engaging layouts for gyms and
                personal trainers. Focuses on clean aesthetics, structured
                sections, and mobile-first design for a polished web presence.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://fitclub-gymclass.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={jobadmin}
                alt="jobadmin"
                className="rounded-xl w-full"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-6 ">
                Job Admin Interface
              </h3>
              <p className="text-gray-400 mb-4">
                An interactive job admin dashboard enabling job creation,
                publishing, and real-time search with advanced filters like
                range sliders. Built with optimized UX features including
                debounced input for smooth, responsive filtering and seamless
                job management.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://create-jobs.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
