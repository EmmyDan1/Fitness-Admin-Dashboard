import mockUser from "../../data/mockUser";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="mr-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 lg:hidden"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        <h1 className="text-xl md:text-3xl font-bold sm:block">Good Day Daniel! </h1>
      </div>

      <div className="flex items-center space-x-4 mr-7">
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 relative">
          <i className="fas fa-bell text-xl text-yellow-500 "></i>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <img
            src={mockUser.avatar}
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="hidden md:inline font-semibold">{mockUser.name}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
