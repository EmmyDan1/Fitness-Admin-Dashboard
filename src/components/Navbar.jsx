import { AiOutlineBell, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import PropTypes from "prop-types";

function Navbar({ toggleSidebar }) {
  const profileImage = "https://randomuser.me/api/portraits/men/45.jpg";

  return (
    <div className="bg-white text-white p-4 shadow-md flex justify-between items-center">
      <button className="text-white text-2xl md:hidden" onClick={toggleSidebar}>
        <AiOutlineMenu className="hidden" />
      </button>
      <h1 className="text-3xl font-bold text-black hidden md:block">Good Day Daniel!</h1>
      <h1 className="text-xl font-bold text-black md:hidden">Dashboard</h1>

      <div className="relative w-1/3 m-auto hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-200  text-black px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="flex items-center space-x-4">
        {/* Bell Icon */}
        <button className="relative hover:text-blue-400 transition">
          <AiOutlineBell className="w-6 h-6 text-black" />
          <span className="absolute top-0 right-0 bg-red-500 text-xs px-2 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2 hover:bg-gray-600 p-2 rounded-lg transition">
          <img
            src={profileImage}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
