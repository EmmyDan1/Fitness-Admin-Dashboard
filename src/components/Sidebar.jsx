import { motion } from "framer-motion";
import {
  FaBars,
  FaTachometerAlt,
  FaCog,
  FaClipboardCheck,
  FaHistory,
  FaChartLine,
  FaBullseye,
  FaRocket,
  FaUser,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className="z-50 md:z-0">
      <button
        className="absolute top-4 left-4 text-black  p-0 rounded-full z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="text-xl mt-2" />
      </button>

      <motion.div
        initial={false}
        animate={{ x: isOpen || window.innerWidth >= 768 ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed md:relative top-0 left-0 w-64 h-full bg-gray-300 text-white shadow-lg p-4 md:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-4 translate-y-10 text-black md:translate-y-0">
          FitSphere
        </h1>
        <ul className="mt-10 text-black space-y-2 md:mt-0">
          <li>
            <Link
              to="/"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              <FaTachometerAlt className="inline-block mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
              <FaClipboardCheck className="inline-block mr-2" /> Summary Section
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              <FaChartLine className="inline-block mr-2" /> Progress Tracking
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              <FaHistory className="inline-block mr-2" /> Recent Activities
            </Link>
          </li>
          <li>
            <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
              <FaBullseye className="inline-block mr-2" /> Goals & Challenges
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              <FaRocket className="inline-block mr-2" /> Quick Actions /
              Shortcuts
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              <FaCog className="inline-block mr-2" /> Settings
            </Link>
          </li>
          <li>
            <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
              <FaUser className="inline-block mr-2" /> Profile
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
