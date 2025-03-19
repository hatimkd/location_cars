import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Pour l'animation

export default function Loading({ onLoaded }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoaded) onLoaded();
    }, 3000); // Délai de 3 secondes avant la disparition
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50  flex-col">
          {/* Animation de la voiture */}
          {/* <motion.h1
            className="text-3xl font-bold text-blue-600 mb-8" // Styles pour le texte
            initial={{ opacity: 0 }} // Démarrage avec opacité 0
            animate={{ opacity: 1 }} // Transition à opacité 1
            transition={{ duration: 1.5, ease: "easeInOut" }} // Transition douce
          >
            Bienvenue à la Location
          </motion.h1> */}
          <motion.img
            src="Gle.webp"
            alt="Loading Car"
            className="w-64 h-auto"
            initial={{ x: 0, opacity: 1, scale: 1 }} // Démarrage avec opacité 1 et taille normale
            animate={{ x: "100vw", opacity: 3, scale: 1.5 }} // Animation qui fait sortir la voiture avec un zoom
          
            // transition={{ duration: 2, ease: "easeInOut" }}
          />
           <motion.h1
            className="text-3xl font-bold text-blue-600 mb-8" // Styles pour le texte
            initial={{ opacity: 0 }} // Démarrage avec opacité 0
            animate={{ opacity: 1 }} // Transition à opacité 1
           
            // transition={{ duration: 1.5, ease: "easeInOut" }} // Transition douce
          >
            Bienvenue à la Location
          </motion.h1>
        </div>
      )}
    </>
  );
}
