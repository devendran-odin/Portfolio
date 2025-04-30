import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-center py-6 flex flex-col items-center space-y-3">
      <div className="flex space-x-5 text-white">
        <a
          href="https://github.com/devendran-odin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/devendran05/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="text-[15px] text-gray-300 mt-2">
        Made with <span className="text-red-500">❤️</span> by Dev ©{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
