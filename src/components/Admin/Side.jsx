import React, { useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { FaCalendarAlt, FaUserShield } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../../features/Users/UserSlice";
import { ChartNoAxesColumnDecreasingIcon, CarIcon, Users2Icon } from "lucide-react"; // Assurez-vous d'importer correctement les icônes

const Side = ({ isOpen, toggleSidebar }) => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      dispatch(fetchUserDetails());
    }
  }, [userInfo, dispatch]);

  const list = [
    { path: "/admin/statistics", icon: ChartNoAxesColumnDecreasingIcon, text: "Statistiques" },
    { path: "/admin/add-cars", icon: CarIcon, text: "Ajouter voitures" },
    { path: "/admin/my-cars", icon: FaUserShield, text: "Mes voitures" },
    { path: "/admin/users", icon: Users2Icon, text: "Utilisateurs" },
  ];

  return (
    <div
      className={`fixed z-40 inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 w-64 bg-indigo-800 text-white shadow-lg`}
    >
      {/* Header du sidebar */}
      <div className="flex items-center justify-between h-20 border-b border-indigo-700 p-4">
        <h1 className="text-2xl font-bold">Dashboard - admin</h1>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Fermer le menu"
        >
          <MdMenu size={28} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-2">
          {list.map(({ path, icon: Icon, text }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors ${
                    isActive ? "bg-indigo-700" : "hover:bg-indigo-700"
                  }`
                }
                onClick={toggleSidebar}
              >
                <Icon className="mr-3" size={20} />
                {text}
              </NavLink>
            </li>
          ))}

          

          
        </ul>
      </nav>

      {/* Bouton Déconnexion */}
      <div className="border-t border-indigo-700 py-4">
        <button
          className="flex items-center px-4 py-2 w-full text-left hover:bg-red-700 transition-colors"
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

export default Side;
