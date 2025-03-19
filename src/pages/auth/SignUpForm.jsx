// import { useState } from "react";
// import api from "../../features/api";

// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     first_name: "",
//     last_name: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [showProgress, setShowProgress] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const rp = await api.post("/users/register/", formData);

//       // Show success message and progress
//       setSuccessMessage("Account successfully created!");
//       setShowProgress(true);

//       // Hide the message after 3 seconds
//       setTimeout(() => {
//         setSuccessMessage("");
//         setShowProgress(false);
//       }, 3000);

//     } catch (error) {
//       console.error(error.message);
//     }
//     console.log(formData);
//   };

//   return (
//     <div className="w-full h-[90vh] flex flex-col justify-center items-center bg-blue-50 ">
//       {/* Success message */}
//       {successMessage && (
//         <div className="fixed top-0 w-full flex justify-center z-50">
//           <div className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//             {successMessage}
//             {showProgress && (
//               <div className="h-1 bg-white mt-2">
//                 <div
//                   className="h-full bg-green-300"
//                   style={{ animation: "progress 3s linear" }}
//                 ></div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="p-6 bg-white lg:backdrop-blur-3xl w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
//       >
//         <h2 className="text-lg font-semibold leading-7 text-gray-900 mb-4">          S'inscrire</h2>
//         <p className="text-sm text-gray-600 mb-6">Create your account to get started.</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div>
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-sm font-medium text-gray-900">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md h-8  px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-900">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md h-8  px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">
//                 First Name
//               </label>
//               <input
//                 id="first_name"
//                 name="first_name"
//                 type="text"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md h-8  px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="mb-4">
//               <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">
//                 Last Name
//               </label>
//               <input
//                 id="last_name"
//                 name="last_name"
//                 type="text"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md h-8  px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-900">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md h-8  px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md h-8  px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 flex items-center justify-end gap-x-6">
//           <button
//             type="button"
//             className="text-sm font-semibold leading-6 text-gray-900"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//                       S'inscrire

//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp, resetMessages } from "../../features/auth/signUpSlice";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Dispatch the signUp action if passwords match
    setError(""); // Clear any previous errors
    dispatch(signUp(formData));
  };

  useEffect(() => {

      if (localStorage.getItem("AUTH_TOKEN_KEY")) {
        window.location.href = "/users/profile";
      }
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        dispatch(resetMessages());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage, dispatch]);

  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center bg-blue-50 ">
      {successMessage && (
        <div className="fixed top-0 left-0 w-full p-4 bg-green-500 text-white text-center transition duration-300 ease-in-out">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="fixed top-0 left-0 w-full p-4 bg-red-500 text-white text-center transition duration-300 ease-in-out">
          {errorMessage}
        </div>
      )}
      {error && (
        <div className="fixed top-0 left-0 w-full p-4 bg-red-500 text-white text-center transition duration-300 ease-in-out">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white lg:backdrop-blur-3xl w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
      >
        <h2 className="text-lg font-semibold leading-7 text-gray-900 mb-4">
          S'inscrire
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Créez votre compte pour commencer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900"
              >
                Nom d'utilisateur
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md h-8 px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md h-8 px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-900"
              >
                Prénom
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md h-8 px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-900"
              >
                Nom de famille
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md h-8 px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md h-8 px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-900"
              >
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md h-8 px-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? "Submitting..." : "S'inscrire"}
          </button>
        </div>
      </form>
    </div>
  );
}
