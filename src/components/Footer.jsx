import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="">
      <footer className="bg-gray-600 text-white py-6 bottom-0">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Fitsphere</h2>
            <p className="text-gray-400 text-sm mt-1">
              Stay fit, Stay strong 💪
            </p>
          </div>

          <div className="flex space-x-6 my-2  md:my-0 mr-10">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Contact
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-4">
          &copy; {new Date().getFullYear()} Fitsphere. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
