import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loading({ onLoaded  , text="Bienvenue à la Location"} ) {
  const [isVisible, setIsVisible] = useState(true);
  const letters = text.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoaded) onLoaded();
    }, 3000); // Disparition après 3s
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50 flex-col"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }} // Disparition douce après 2.5s
        >
          <motion.h1 className="text-3xl font-bold text-blue-600 mb-8 flex">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }} // Chaque lettre commence en haut avec opacité 0
                animate={{ opacity: 1, y: 0 }} // Descente progressive
                transition={{
                  duration: 0.4,
                  delay: index * 0.1, // Chaque lettre a un petit délai par rapport à la précédente
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter} {/* Gérer les espaces */}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </>
  );
}
