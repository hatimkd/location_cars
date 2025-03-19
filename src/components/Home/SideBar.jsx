import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { FiHome, FiUsers, FiSettings, FiLogOut, FiBriefcase } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div
      className={`fixed z-40 inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 w-64 bg-gray-800 text-white shadow-lg`}
    >
      <div className="flex items-center justify-between h-20 border-b border-gray-700 p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="lg:hidden text-white focus:outline-none" onClick={toggleSidebar}>
          <BsFillMenuButtonFill size={24} />
        </button>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/users/profile"
              className={({ isActive }) => 
                `flex items-center px-4 py-2 ${isActive ? "bg-gray-700" : "hover:bg-gray-700"} transition-colors`
              }
              onClick={toggleSidebar}
            >
              <FiHome className="mr-3" size={20} />
              Mon profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users/rentals"
              className={({ isActive }) => 
                `flex items-center px-4 py-2 ${isActive ? "bg-gray-700" : "hover:bg-gray-700"} transition-colors`
              }
              onClick={toggleSidebar}
            >
              <FiBriefcase className="mr-3" size={20} />
              {userInfo?.role === "admin" ? "Les" : "Mes"} réservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => 
                `flex items-center px-4 py-2 ${isActive ? "bg-gray-700" : "hover:bg-gray-700"} transition-colors`
              }
              onClick={toggleSidebar}
            >
              <FiSettings className="mr-3" size={20} />
              Paramètres
            </NavLink>
          </li>
          {userInfo?.is_staff && (
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => 
                  `flex items-center px-4 py-2 ${isActive ? "bg-gray-700" : "hover:bg-gray-700"} transition-colors`
                }
                onClick={toggleSidebar}
              >
                <AiFillDashboard className="mr-3" size={20} />
                Admin
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <div className="border-t border-gray-700 py-4">
        <button
          className="flex px-4 py-2 hover:bg-red-600 transition-colors w-full text-left items-center"
          onClick={() => {
            localStorage.removeItem("AUTH_TOKEN_KEY");
            window.location.href = "/";
          }}
        >
          <FiLogOut className="mr-3" size={20} />
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
