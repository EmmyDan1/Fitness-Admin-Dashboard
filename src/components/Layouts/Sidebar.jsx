import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../Common/DarkModeToggle";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeLink, setActiveLink] = useState("dashboard");

  const links = [
    { name: "Dashboard", icon: "fas fa-home", path: "/", key: "dashboard" },
    {
      name: "Workouts",
      icon: "fas fa-dumbbell",
      path: "/workouts",
      key: "workouts",
    },
    { name: "Goals", icon: "fas fa-bullseye", path: "/goals", key: "goals" },
    { name: "Profile", icon: "fas fa-user", path: "/profile", key: "profile" },
    { name: "Settings", icon: "fas fa-cog", path: "/settings", key: "settings" },
    { name: "Help", icon: "fas fa-question-circle", path: "/help", key: "help" },
  ];

  return (
    <div
      className={`sidebar fixed lg:relative z-20 w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          FitSphere
        </h1>
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              onClick={() => {
                setActiveLink(link.key);
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                activeLink === link.key
                  ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <i className={`${link.icon} w-6 text-center mr-3`}></i>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <DarkModeToggle />
      </div>
    </div>
  );
};
export default Sidebar;
