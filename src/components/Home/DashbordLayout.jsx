import React, { useState } from 'react';
import Sidebar from './SideBar';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { useLocation, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-[91.4vh] overflow-hidden">
      {/* Sidebar pour desktop et mobile */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* En-tête mobile */}
        <header className="flex items-center justify-between bg-white shadow-md p-4 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <BsFillMenuButtonWideFill size={24} />
          </button>
          <h1 className="text-xl font-semibold">{location.pathname}</h1>
        </header>

        {/* Zone de contenu principal */}
        <main className="flex-1 p-6 bg-slate-100 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
