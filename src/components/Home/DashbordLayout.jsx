// src/components/DashboardLayout.js
import React, { useState } from 'react';
import Sidebar from './SideBar';
import { FiMenu } from 'react-icons/fi'; // Icone pour ouvrir la sidebar sur mobile
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const location = useLocation();
  return (


    
    <div className="flex   h-[91.4vh] overflow-hidden">
      {/* Sidebar pour desktop et mobile */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Bouton pour ouvrir la sidebar sur mobile */}
        <header className="flex items-center justify-between bg-white shadow-md p-4 lg:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleSidebar}
          >
            <BsFillMenuButtonWideFill  size={24} />
          </button>
          <h1 className="text-xl font-semibold">{location.pathname}</h1>
        </header>
        <main className="flex-1 p-6 bg-slate-100 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
