import React, { memo, useState } from "react";
import { CarIcon, LoaderIcon } from "lucide-react";
import AnimatedIcon from "../AnimatedIcon";

const CarCard = memo(({ car, onReserveClick }) => {
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement de l'image

  const handleImageLoad = () => {
    setIsLoading(false); // L'image a fini de charger
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-64 m-4 flex flex-col transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ">
      <div className="overflow-hidden">
        {isLoading && (
          <div className="bg-gray-200 w-full h-48 animate-pulse flex justify-center   gap-1   items-center">
            {" "}
            <LoaderIcon   /> 


            {/* <CarIcon className="animate-move-in-out w-full  h-16 text-indigo-600" /> */}

            {/* <AnimatedIcon  /> */}
          </div>
        )}{" "}
        {/* Espace réservé */}
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className={`object-cover  w-full transition-transform duration-300  h-full  hover:scale-110 ${
            isLoading ? "hidden" : "block"
          }`}



          onLoad={handleImageLoad} // Gérer le chargement de l'image
          // loading="lazy" // Chargement paresseux
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <p className="text-gray-600 mb-2">
          Prix par jour:{" "}
          <span className="font-bold text-gray-900">
            {car.price_per_day} DH
          </span>
        </p>
        <p className="text-gray-600 mb-2">
          Nombre de places:{" "}
          <span className="font-bold text-gray-900">{car.seats}</span>
        </p>
        <p className="text-gray-600 mb-2">
          Type de carburant:{" "}
          <span className="font-bold text-gray-900">{car.fuel_type}</span>
        </p>
        <p className="text-gray-600 mb-2">
          Couleur: <span className="font-bold text-gray-900">{car.color}</span>
        </p>
        <button
          className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          onClick={() => {
            onReserveClick(car);
          }}
        >
          Réserver
        </button>
      </div>
    </div>
  );
});

export default CarCard;
