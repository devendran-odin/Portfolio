import cursorLogo from "../../assets/cursorLogo.jpeg";
import { Fade } from "react-awesome-reveal";
export const About = () => {
  const programmingFrameworks = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },

    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      path: "devicon-express-original",
    },

    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
  ];

  const cloudDevTools = [
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      path: "devicon-github-original",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Cursor",
      icon: cursorLogo,
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "Jenkins",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 z-10"
    >
      <Fade cascade damping={0.5}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center md:text-left">
              Passionate developer with expertise in building web applications
              and creating innovative solutions. These are some of the
              technologies I use to bring ideas to life
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6  border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Programming & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingFrameworks.map((tech, key) => (
                    <div
                      key={key}
                      className="flex items-center gap-3 mb-0.5 border border-blue-400 py-1.5 px-3 rounded-full"
                    >
                      {tech.icon ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 h-6"
                        />
                      ) : (
                        <i className={tech.path + " text-[22px]"}></i>
                      )}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6  border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4"> Cloud & Dev Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {cloudDevTools.map((tech, key) => (
                    <div
                      key={key}
                      className="flex items-center gap-3 mb-0.5 border border-blue-400 py-1.5 px-3 rounded-full"
                    >
                      {tech.icon ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 h-6"
                        />
                      ) : (
                        <i className={tech.path + " text-[22px]"}></i>
                      )}

                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.E in Computer Science </strong> <br />
                </li>
                <li>
                  <strong>MNM Jain Engineering College</strong> <br />
                  <span className="pl-6">2021 - 2025</span>
                </li>
                <li>
                  <strong> Relevant Coursework</strong> <br></br>Data
                  Structures, Object-Oriented Programming, Computer Networking,
                  Database Management System.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl  border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    DevOps Intern at SentinelFox <br />
                    July 2024 - Aug 2024
                  </h4>
                  <ul className="list-disc pt-2.5 list-inside text-gray-300 space-y-2">
                    <li>
                      {" "}
                      Managed and optimized cloud infrastructure using AWS (EC2,
                      VPC, S3), automated deployments with Terraform, and
                      containerized applications using Docker.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};
