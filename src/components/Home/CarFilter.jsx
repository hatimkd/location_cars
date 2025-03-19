

import React, { useState, useEffect } from "react";
import { Search, Car } from "lucide-react"; // Icônes de lucide-react

const CarFilter = ({ brands = [], onFilterChange }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  // Filtrer les modèles en fonction de la marque sélectionnée
  const filteredModels =
    brands.find((brand) => brand.value == selectedBrand)?.models || [];

  useEffect(() => {
    // Appel initial avec les filtres vides
    onFilterChange({
      brand: selectedBrand,
      model: selectedModel,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

 

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Search className="mr-2" size={20} /> Filtrer les voitures
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Filtre par marque */}
        <div className="relative">
          <label className="text-sm font-semibold flex items-center mb-1">
            <Car size={16} className="mr-2" /> Marque
          </label>
          <select
            value={selectedBrand}
            onChange={(e) => {
              const newBrand = e.target.value;
              setSelectedBrand(newBrand);
              setSelectedModel(""); // Réinitialiser le modèle lorsque la marque change
              // Appeler le filtre après que l'état a été mis à jour
              onFilterChange({
                brand: newBrand,
                model: "",
              });
            }}
            className="block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Toutes les marques</option>
            {brands.length > 0 ? (
              brands.map((brand) => (
                <option key={brand.value} value={brand.value}>
                  {brand.label}
                </option>
              ))
            ) : (
              <option value="">Aucune marque disponible</option>
            )}
          </select>
        </div>

        {/* Filtre par modèle */}
        <div className="relative">
          <label className="text-sm font-semibold flex items-center mb-1">
            <Car size={16} className="mr-2" /> Modèle
          </label>
          <select
            value={selectedModel}
            onChange={(e) => {
              setSelectedModel(e.target.value);
              // handleFilterChange();
              onFilterChange({
                brand: selectedBrand,
                model: e.target.value,
              });
            }}
            className="block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value=""selected>Tous les modèles</option>
            {filteredModels.length > 0 ? (
              filteredModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))
            ) : (
              <option value="">Aucun modèle disponible</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CarFilter;







