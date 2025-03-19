import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-24 bg-white space-y-12 lg:space-y-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Texte */}
      <motion.div
        className="max-w-lg space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-4xl font-bold text-gray-800 leading-snug">
          Découvrez une nouvelle façon de louer
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Profitez d’une expérience unique avec notre service de location de voitures. 
          Que ce soit pour un voyage d’affaires, des vacances en famille ou une exploration urbaine, 
          nous avons ce qu’il vous faut.
        </p>
        <p className="text-gray-600">
          📌 Réservation rapide &nbsp; | &nbsp; 💼 Assistance{" "}
          <span className="text-blue-600 font-medium">24/7</span> &nbsp; | &nbsp; 🚗 Flotte moderne
        </p>
      </motion.div>

      {/* Image stylée et agrandie */}
      <motion.div
        className="w-full max-w-lg flex justify-center relative overflow-hidden rounded-3xl shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img
          src="Location (1).webp"
          alt="Car Rental"
          className="rounded-3xl w-full h-auto object-cover transition-transform duration-500 hover:scale-105  p-5"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
      </motion.div>
    </motion.div>
  );
};

export default About;
