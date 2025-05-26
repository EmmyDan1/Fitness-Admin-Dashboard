import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto py-4 px-6 text-sm text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Built by Daniel. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
