import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCars } from "../../features/Cars/CarsSlice";
import { Verified, VerifiedIcon } from "lucide-react";
import api from "../../features/api";

const fuelTypes = [
  { value: "Petrol", label: "Essence" },
  { value: "Diesel", label: "Diesel" },
  { value: "Electric", label: "Électrique" },
];

const AddCars = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState();
  const [carDetails, setCarDetails] = useState({
    brand: "",
    model: "",
    matricule: "",
    location: "",
    color: "",
    seats: "",
    fuel_type: "",
    price_per_day: "",
    availability: true,
    image: null,
  });

  const brands = [
    { value: "BMW", label: "BMW", models: ["Serie 3", "Serie 5", "X5"] },
    {
      value: "Audi",
      label: "Audi",
      models: ["A3", "A4", "Q5", "Q8 e-tron", "A7"],
    },
    {
      value: "Dacia",
      label: "Dacia",
      models: ["Logan", "Sandero Stepway", "Sandero"],
    },
    {
      value: "Mercedes-Benz",
      label: "Mercedes-Benz",
      models: ["Classe A", "Classe C", "E-Class", "GLE"],
    },
    {
      value: "Volkswagen",
      label: "Volkswagen",
      models: ["Golf", "Passat", "Tiguan", "Touareg"],
    },
    { value: "Porsche", label: "Porsche", models: ["911", "Cayenne", "Macan"] },
    { value: "Hyundai", label: "Hyundai", models: ["Accent", "Tucson"] },

    // Marques populaires en France
    {
      value: "Renault",
      label: "Renault",
      models: ["Clio", "Captur", "Mégane"],
    },
    { value: "Peugeot", label: "Peugeot", models: ["208", "3008", "508"] },
    { value: "Citroën", label: "Citroën", models: ["C3", "C4", "C5 Aircross"] },
    {
      value: "DS Automobiles",
      label: "DS Automobiles",
      models: ["DS3", "DS4", "DS7"],
    },
    { value: "Alpine", label: "Alpine", models: ["A110"] },

    // Marques populaires en Italie
    { value: "Fiat", label: "Fiat", models: ["500", "Panda", "Tipo"] },
    {
      value: "Alfa Romeo",
      label: "Alfa Romeo",
      models: ["Giulia", "Stelvio", "Mito"],
    },
    { value: "Lancia", label: "Lancia", models: ["Ypsilon", "Delta"] },
    {
      value: "Ferrari",
      label: "Ferrari",
      models: ["488", "Portofino", "Roma"],
    },
    {
      value: "Maserati",
      label: "Maserati",
      models: ["Ghibli", "Levante", "Quattroporte"],
    },
    { value: "Toyota", label: "Toyota", models: ["Corolla", "Camry", "Hilux"] },
    { value: "Honda", label: "Honda", models: ["Civic", "Accord", "CR-V"] },
    { value: "Ford", label: "Ford", models: ["Focus", "Mustang", "F-150"] },
  ];
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addCars(carDetails));
      setMessage("Voiture ajoutée avec succès !");
      setMessageType("success");
      setCarDetails({
        brand: "",
        model: "",
        matricule: "",
        location: "",
        color: "",
        seats: "",
        fuel_type: "",
        price_per_day: "",
        availability: true,
        image: null,
      });
    } catch (error) {
      console.error("Erreur détaillée :", error);
      if (error.matricule) {
        setMessage(`Erreur: ${error.matricule}`);
      } else {
        setMessage("Erreur lors de l'ajout de la voiture.");
      }
      setMessageType("error");
    } finally {
      // Afficher le message pendant 3 secondes
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const [selectedBrand, setSelectedBrand] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const cities = [
    { value: "casablanca", label: "Casablanca" },
    { value: "rabat", label: "Rabat" },
    { value: "marrakech", label: "Marrakech" },
    { value: "fes", label: "Fès" },
    { value: "tanger", label: "Tanger" },
    { value: "agadir", label: "Agadir" },
    { value: "meknes", label: "Meknès" },
    { value: "oujda", label: "Oujda" },
    { value: "taza", label: "Taza" },
    { value: "eljadida", label: "El Jadida" },
  ];

  const currentBrand = brands.find((b) => b.value === selectedBrand);

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setSelectedBrand(selectedBrand);
    setCarDetails({ ...carDetails, brand: selectedBrand, model: "" });
  };

 
  return (
    <div className="flex justify-center items-center bg-gray-100 min px-8 py-1.5">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        {message && (
          <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-white font-semibold transition-opacity duration-500 ${
              messageType === "success" ? "bg-green-600" : "bg-red-600"
            } shadow-lg animate-fade-in-out`}
            style={{ animationDuration: "8s" }}
          >
            {" "}
            {message}
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Ajouter une Voiture
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700"
              >
                Marque
              </label>
              <select
                id="brand"
                name="brand"
                value={carDetails.brand}
                onChange={handleBrandChange}
                className="mt-1 block w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Sélectionner une marque</option>
                {brands.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700"
              >
                Modèle
              </label>
              <select
                id="model"
                name="model"
                value={carDetails.model}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Sélectionner un modèle</option>
                {currentBrand
                  ? currentBrand.models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))
                  : null}
              </select>
            </div>
            {[
              //   { id: 'brand', label: 'Marque', type: 'text', required: true },
              //   { id: 'model', label: 'Modèle', type: 'text', required: true },
              {
                id: "matricule",
                label: "Matricule",
                type: "text",
                required: true,
              },

              //   { id: 'location', label: 'Location', type: 'text', required: true },
              { id: "color", label: "Couleur", type: "text", required: true },
              {
                id: "seats",
                label: "Sièges",
                type: "number",
                min: 1,
                max: 20,
                required: true,
              },
              {
                id: "price_per_day",
                label: "Prix par jour",
                type: "number",
                min: 1,
                max: 1000,
                required: true,
              },
            ].map(({ id, label, type, required, min, max }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  min={min}
                  max={max}
                  name={id}
                  value={carDetails[id] || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required={required}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Ville
              </label>
              <select
                id="location"
                name="location"
                value={carDetails.location}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Sélectionner une ville</option>
                {cities.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="fuel_type"
                className="block text-sm font-medium text-gray-700"
              >
                Type de carburant
              </label>
              <select
                id="fuel_type"
                name="fuel_type"
                value={carDetails.fuel_type}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Sélectionner un type de carburant</option>
                {fuelTypes.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image de la voiture
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="mt-1 block w-full text-gray-700 border-gray-300 rounded-lg  px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="availability"
                className="inline-flex items-center text-sm font-medium text-gray-700"
              >
                <input
                  type="checkbox"
                  id="availability"
                  name="availability"
                  checked={carDetails.availability}
                  onChange={() =>
                    setCarDetails({
                      ...carDetails,
                      availability: !carDetails.availability,
                    })
                  }
                  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span className="ml-3">Disponible</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
          >
            Ajouter Voiture
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default AddCars;
