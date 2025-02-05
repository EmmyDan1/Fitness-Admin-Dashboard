import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col transition-all duration-300">
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

        <div className="p-4 flex-1 overflow-auto bg-gray-100">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Layout;
