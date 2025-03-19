import { CarFrontIcon, CarIcon } from "lucide-react";
import React from "react";
import { FaBeer } from "react-icons/fa"; // Remplace par l'icône de ton choix

export default function AnimatedIcon() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <div className="absolute flex items-center justify-center">
          <CarIcon className="animate-move-in-out w-full  h-16 text-indigo-600" />
        </div>
        <div className="fixed inset-0 bg-gray-800 opacity-75 animate-fade-in-out"></div>
      </div>
    </div>
  );
}
