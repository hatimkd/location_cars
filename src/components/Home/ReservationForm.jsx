// import React, { useEffect, useState } from "react";
// import { addRentals } from "../../features/Cars/CarsSlice";
// import { useDispatch } from "react-redux";

// export const ReservationForm = ({ car, onClose }) => {
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [locationCity, setLocationCity] = useState("");
//   const [totalPrice, setTotalPrice] = useState(0);

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState("");

//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate dates
//     // const today = new Date();
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     if (start >= end) {
//       setMessage("La date de fin doit être postérieure à la date de début.");
//       setMessageType("error");
//       // setTimeout(() => {
//       //   setMessage(""); // Clear the message after 1 second
//       // }, 1000);
//       return;
//     }

//     if( ! localStorage.getItem ("AUTH_TOKEN_KEY")){

//       window. location. href = "/login"
//     }

//     const formData = {
//       car: car.id,
//       start_date: startDate,
//       end_date: endDate,
//       total_price: totalPrice,
//       location_city: locationCity,
//       is_valid: false,
//     };

//     try {
//       setLoading(true);
//       setMessage(""); // Clear previous messages
//       console.log("Envoi de la réservation:", formData);
//       setMessage("Réservation réussie !");
//       setMessageType("success");
//       await dispatch(addRentals(formData));

//       // setMessage("Réservation réussie !");
//       // setMessageType("success");
//       console.log(message , messageType);

//       // setTimeout(() => {
//       //   setMessage(""); // Clear the message after 1 second
//       //   onClose(); // Close the form after showing the message
//       //   window.location.href = "/"; // Redirect after success
//       // }, 1000);
//     } catch (error) {
//       console.error("Erreur lors de la réservation:", error); // Log error for debugging
//       setMessage("Erreur lors de la réservation. Veuillez réessayer.");
//       setMessageType("error");
//       setTimeout(() => {
//         setMessage(""); // Clear the message after 1 second
//       }, 1000);
//     } finally {
//       setLoading(false);
//       console.log("Chargement terminé, état:", loading);
//     }
//   };

//   useEffect(() => {
//     if (startDate && endDate) {
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       const timeDiff = end - start;
//       const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

//       if (days > 0) {
//         setTotalPrice(car.price_per_day * days);
//         setMessage(""); // Clear error if dates are valid
//       } else {
//         setTotalPrice(0);
//       }
//     } else {
//       setTotalPrice(0);
//     }
//   }, [startDate, endDate, car.price_per_day]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full aspect-square mx-auto">
//         {message && (
//           <div
//             className={`mb-4 px-4 py-2 rounded-lg text-white font-semibold transition-opacity duration-500 ${
//               messageType == "success" ? "bg-green-600" : "bg-red-600"
//             } shadow-lg animate-fade-in-out`}
//             style={{ animationDuration: "8s" }}
//           >
//             {message}
//           </div>
//         )}
//         {loading && <div className="text-blue-600 mb-4">Chargement...</div>}

//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Réserver le véhicule
//         </h2>

//         <div className="mb-6 p-4 border border-gray-300 rounded-lg">
//           <p className="text-gray-600">
//             Modèle:{" "}
//             <span className="font-semibold">
//               {car.brand} {car.model}
//             </span>
//           </p>
//           <p className="text-gray-600">
//             Prix par jour:{" "}
//             <span className="font-semibold text-red-700">
//               {car.price_per_day} DH
//             </span>
//           </p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-1">
//             <label className="block text-gray-600 mb-2" htmlFor="start_date">
//               Date de début:
//             </label>
//             <input
//               type="date"
//               id="start_date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-1">
//             <label className="block text-gray-600 mb-2" htmlFor="end_date">
//               Date de fin:
//             </label>
//             <input
//               type="date"
//               id="end_date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-gray-600 mb-2" htmlFor="location_city">
//               Ville de location:
//             </label>
//             <input
//               type="text"
//               id="location_city"
//               value={locationCity}
//               onChange={(e) => setLocationCity(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-1">
//             <p className="text-gray-600 mb-0.5">
//               Prix total: <span className="font-bold">{totalPrice} DH</span>
//             </p>
//           </div>
//           <div className="flex justify-center gap-0.5">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
//               disabled={loading}
//             >
//               {loading ? "Chargement..." : "Soumettre"}
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
//             >
//               Annuler
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState, useCallback } from "react";
import { addRentals } from "../../features/Cars/CarsSlice";
import { useDispatch } from "react-redux";

export const ReservationForm = ({ car, onClose }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    locationCity: "",
    totalPrice: 0,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateDates = () => {
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    if (start >= end) {
      setMessage("La date de fin doit être postérieure à la date de début.");
      setMessageType("error");
      return false;
    }
    return true;
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateDates()) return;

      if (!localStorage.getItem("AUTH_TOKEN_KEY")) {
        // setMessage("Vous nete pa connecter")

        setMessage("Vous n'êtes pas connecté");

        setMessageType("error");
       
          window.location.href = "/login";
          return;
        // }, 500);
      }

      const { startDate, endDate, locationCity } = formData;

      const submissionData = {
        car: car.id,
        start_date: startDate,
        end_date: endDate,
        total_price: formData.totalPrice,
        location_city: locationCity,
        is_valid: false,
      };

      try {
        setLoading(true);
        setMessage(""); // Clear previous messages
        console.log("Envoi de la réservation:", formData);

        await dispatch(addRentals(submissionData));

        // setMessage("Réservation réussie !");
        // setMessageType("success");
        console.log(message, messageType);

        setTimeout(() => {
          setMessage(""); // Clear the message after 1 second
          onClose(); // Close the form after showing the message
          window.location.href = "/users/rentals"; // Redirect after success
        }, 1000);
      } catch (error) {
        console.error("Erreur lors de la réservation:", error);
        setMessage("Erreur lors de la réservation. Veuillez réessayer.");
        setMessageType("error");
      } finally {
        setLoading(false);
      }
    },
    [dispatch, formData, car.id, onClose]
  );

  useEffect(() => {
    const { startDate, endDate } = formData;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = end - start;
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if (days > 0) {
        setFormData((prev) => ({
          ...prev,
          totalPrice: car.price_per_day * days,
        }));
        // setMessage(""); // Clear error if dates are valid
      } else {
        setFormData((prev) => ({ ...prev, totalPrice: 0 }));
      }
    } else {
      setFormData((prev) => ({ ...prev, totalPrice: 0 }));
    }
  }, [formData.startDate, formData.endDate, car.price_per_day]);

  return (
    <div className="fixed inset-0 flex h-full  items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4  rounded-lg h-2/3 sm:h-auto    shadow-lg max-w-md w-full aspect-square mx-auto">
        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded-lg text-white font-semibold transition-opacity duration-500   ${
              messageType === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {message}
          </div>
        )}
        {loading && <div className="text-blue-600 mb-4">Chargement...</div>}

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Réserver le véhicule
        </h2>

        <div className="mb-6 p-4 border border-gray-300 rounded-lg">
          <p className="text-gray-600">
            Modèle:{" "}
            <span className="font-semibold">
              {car.brand} {car.model}
            </span>
          </p>
          <p className="text-gray-600">
            Prix par jour:{" "}
            <span className="font-semibold text-red-700">
              {car.price_per_day} DH
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label className="block text-gray-600 mb-2" htmlFor="startDate">
              Date de début:
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-600 mb-2" htmlFor="endDate">
              Date de fin:
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-600 mb-2" htmlFor="locationCity">
              Ville de location:
            </label>
            <input
              type="text"
              id="locationCity"
              name="locationCity"
              value={formData.locationCity}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-1">
            <p className="text-gray-600 mb-0.5">
              Prix total:{" "}
              <span className="font-bold">{formData.totalPrice} DH</span>
            </p>
          </div>
          <div className="flex justify-center gap-0.5 mt-5 lg:mt-0">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Chargement..." : "Soumettre"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
