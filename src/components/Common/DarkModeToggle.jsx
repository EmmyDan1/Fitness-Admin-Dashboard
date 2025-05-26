import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <div className="flex items-center">
        <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"} mr-3`}></i>
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </div>
      <div
        className={`w-12 h-6 rounded-full relative ${
          darkMode ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
            darkMode ? "transform translate-x-7" : "transform translate-x-1"
          }`}
        ></div>
      </div>
    </button>
  );
};

export default DarkModeToggle;
