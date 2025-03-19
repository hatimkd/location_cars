// import React, { useState } from "react";
// import Swip from "./Swiper";
// import { LogIn, Phone } from "lucide-react";

// const Section = () => {
//   const [formData, setFormData] = useState({
//     start_date: "",
//     end_date: "",
//     location_city: "",
//   }); // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }; // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate or process form data here
//     console.log("Form data submitted:", formData);
//   };

//   return (
//     <div className=" w-full flex      flex-col  lg:flex-row  ">
//       <div className="w-full  flex  flex-col     justify-center items-center">
//         <h3 className="lg:text-8xl font-bold text-7xl  w-full  justify-center items-center lg:p-0   flex  flex-col  ">
//           <span>Rent The</span>
//           <span>
//             Best <span className=" text-blue-700">SUVs</span>
//           </span>
//         </h3>
//         <div className="lg:w-2/3  rounded-2xl     flex flex-col  w-full    bg-slate-300    lg:m-7   mt-7 justify-center items-center  lg:p-8   p-7  ">
//           {/* <h3 className="text-xl font-semibold bg-blue-700  p-3 rounded-2xl text-white   mb-3 ">
//             Distance
//           </h3> */}

//           {/* <form onSubmit={handleSubmit} className="w-full  ">
//             <div className="mb-4">
//               <label
//                 htmlFor="start_date"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Date de Début
//               </label>
//               <input
//                 type="date"
//                 id="start_date"
//                 name="start_date"
//                 value={formData.start_date}
//                 onChange={handleInputChange}

//                 disabled

//                 className="mt-1 w-full  p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="end_date"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Date de Fin
//               </label>
//               <input
//                 type="date"
//                 id="end_date"
//                 name="end_date"
//                 value={formData.end_date}
//                 onChange={handleInputChange}

//                 disabled

//                 className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="location_city"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Localisation
//               </label>
//               <input
//                 type="text"
//                 id="location_city"
//                 name="location_city"
//                 value={formData.location_city}
//                 onChange={handleInputChange}
//                 placeholder="Entrez la localisation"

//                 disabled
//                 className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <button
//               type="submit"

//               disabled

//               className="mt-4 w-full py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//             Réserver au-dessous
//             </button>
//           </form> */}
//           <h3 className="text-xl     font-semibold   leading-relaxed text-justify">
//             Notre service de location de voitures permet de réserver rapidement
//             des véhicules en ligne avec une interface intuitive. Les
//             administrateurs peuvent facilement gérer les véhicules et suivre les
//             réservations en toute sécurité.
//           </h3>

//           <div className="w-full flex  gap-1">
//             <button
//               type="submit"
//               disabled
//               className="mt-4 w-full py-2 rounded-lg flex  gap-2 justify-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//                <Phone />  Contacter Nous
//             </button>
//             <button
//               type="submit"
//               disabled
//               className="mt-4 w-full py-2 rounded-lg bg-blue-700 flex   text-white hover:bg-blue-800   gap-2 focus:outline-none justify-center    focus:ring-2 focus:ring-blue-500"
//             >
//               <LogIn /> Inscrire
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* <div className="w-full   flex  justify-center items-center ">
//         <img src="file.png" alt="" className=" hidden md:block" />

//       </div> */}
//       <div className="w-full lg:w-1/2    lg:flex justify-center items-center hidden">
//         <Swip />
//       </div>
//     </div>
//   );
// };

// export default Section;

import React, { useState } from "react";
import Swip from "./Swiper";
import { LogIn, Phone } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Section = () => {
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    location_city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire soumises :", formData);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full flex flex-col justify-center items-center p-1">
        <h3 className="lg:text-8xl font-bold text-7xl w-full justify-center items-center lg:p-0 flex flex-col gap-1">
          <span>Louez les</span>
          <h2>
            Meilleurs <br />
            <h2 className="text-blue-700  text-centre bg-yellow-100 w-full flex justify-center  items-center rounded-2xl ">
              SUVs
            </h2>
          </h2>
        </h3>
        <div className="lg:w-2/3 rounded-2xl flex flex-col w-full bg-slate-300 lg:m-7 mt-7 justify-center items-center lg:p-8 p-7">
          <h3
            className="text-xl font-semibold leading-relaxed text-justify"
            style={{ width: "100%", minHeight: "100px" }} // Par exemple, 100% de largeur et 100px de hauteur minimale
          >
            {/* Découvrez notre service de location de véhicules fiable et intuitif,
            offrant une expérience de réservation fluide. Gérez facilement vos
            locations et profitez d’une administration professionnelle en toute
            sérénité. */}

            <Typewriter
              words={
                [
                  "Découvrez notre service de location de véhicules fiable et intuitif, offrant une expérience de réservation fluide. Gérez facilement vos locations et profitez d’une administration professionnelle en toute sérénité.",
                ]
                // ]
              }
              loop={1} // Défilement des phrases une seule fois
              cursor // Afficher le curseur
              cursorBlinking // Clignotement du curseur
              delaySpeed={200} // Délai avant de commencer la suppression
              deleteSpeed={25} // Vitesse de suppression
              typeSpeed={19} // Vitesse de frappe
            />
          </h3>

          <div className="w-full flex gap-1">
            <Link
              // type="submit"
              to ="/"
              className="mt-4 w-full py-2   rounded-lg flex gap-2 justify-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Phone /> Contacter
            </Link>
            <Link
              // type="submit"
              to ="/login"
              className="mt-4 w-full py-2 rounded-lg bg-blue-700 flex text-white hover:bg-blue-800 gap-2 focus:outline-none justify-center focus:ring-2 focus:ring-blue-500"
            >
              <LogIn /> S'inscrire
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:flex justify-center items-center hidden ">
        <Swip />
      </div>
    </div>
  );
};

export default Section;
