// src/pages/Dashboard.js
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../features/Users/UserSlice";
import DashboardLayout from "../../components/Home/DashbordLayout";
import { User, Mail, FileText, Loader2, AlertCircle } from "lucide-react";

const DashboardUsr = () => {
  const dispatch = useDispatch();
  const { userInfo, isLoading, errorMessage } = useSelector((state) => state.user);

  useEffect(() => {
    if (!localStorage.getItem("AUTH_TOKEN_KEY")) {
      window.location.href = "/";
    }
    dispatch(fetchUserDetails());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
        <span className="ml-2 text-indigo-500">Chargement...</span>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span>Erreur: {errorMessage}</span>
      </div>
    );
  }

  if (!userInfo) {
    return <div className="text-center text-gray-500">Aucune information d'utilisateur disponible.</div>;
  }

  return (
    <DashboardLayout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="px-6 sm:px-20 sm:py-7"
      >
        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
          <User className="w-6 h-6 text-indigo-500 mr-2" />
          Profil de l'utilisateur
        </h3>
        <p className="mt-1 text-gray-500">Détails personnels et informations de compte.</p>
      </motion.div>

      <div className="mt-6 border-t border-gray-200 sm:px-20">
        <dl className="divide-y divide-gray-200">
          {[
            { label: "Nom d'utilisateur", value: userInfo.username, icon: <User className="text-indigo-500 w-5 h-5" /> },
            { label: "Email", value: userInfo.email, icon: <Mail className="text-indigo-500 w-5 h-5" /> },
            { label: "Prénom", value: userInfo.first_name, icon: <User className="text-indigo-500 w-5 h-5" /> },
            { label: "Nom de famille", value: userInfo.last_name, icon: <User className="text-indigo-500 w-5 h-5" /> },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: index * 0.1 }}
              className="px-4 py-4 flex items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            >
              <dt className="text-sm font-medium text-gray-900 flex items-center">
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{item.value}</dd>
            </motion.div>
          ))}

          {/* Section des pièces jointes */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.4 }}
            className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
          >
            <dt className="text-sm font-medium text-gray-900 flex items-center">
              <FileText className="text-indigo-500 w-5 h-5" />
              <span className="ml-2">Pièces jointes</span>
            </dt>
            <dd className="text-gray-500">En cours de construction...</dd>
          </motion.div>
        </dl>
      </div>
    </DashboardLayout>
  );
};

export default DashboardUsr;
