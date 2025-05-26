import { useState } from "react";
import Sidebar from "./components/Layouts/Sidebar";
import Navbar from "./components/Layouts/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Layouts/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-6 bg-gray-100 dark:bg-gray-900 flex-1 overflow-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
