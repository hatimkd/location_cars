// // src/pages/Rentals.js
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRentals, updateRentalValidity } from "../../features/Cars/CarsSlice";
// import DashboardLayout from "../../components/Home/DashbordLayout";

// const Rentals = () => {
//   const dispatch = useDispatch();
//   const { userInfo, isLoading, errorMessage } = useSelector

//   (
//     (state) => state.user

//     );

//   // Get rentals and loading state from Redux store
//   const { rentals, loading, pagination } = useSelector(
//     (state) => state.carRental
//   );

//   useEffect(() => {
//     if (!localStorage.getItem("AUTH_TOKEN_KEY")) {
//       window.location.href = "/";
//     }
//     console.log(userInfo );

//     // Fetch rentals when the component mounts
//     dispatch(fetchRentals({ page: pagination.currentPage }));
//   }, [dispatch, pagination.currentPage]);

//   if (loading) {
//     return <div className="text-center mt-10">Loading rentals...</div>;
//   }

//   const handleValidation = (rentalId) => {

//     console.log(rentalId);

//     // Dispatch the updateRentals action with the rental ID
//     dispatch(updateRentalValidity(rentalId)); // Modifier en fonction de votre payload
//   };
//   return (
//     <DashboardLayout>
//       <div className="p-6 bg-white shadow-md rounded-lg ">
//         <h1 className="text-2xl font-semibold mb-4">Rentals</h1>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 {/* <tr className="bg-gray-100"> */}
//                 <th className="py-3 px-4 border-b text-left font-medium">ID</th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Utilisateur
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Voiture
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Date de début
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Date de fin
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Prix total
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Valide
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Ville
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Créé à
//                 </th>
//                 {  userInfo &&( userInfo .role  == "admin" ? // Show validation column only for admin
//                   <th className="py-3 px-4 border-b text-left font-medium">
//                     Valider
//                   </th>: ""
//                 )}
//                 {/* </tr> */}
//               </tr>
//             </thead>
//             <tbody>
//               {rentals.results?.map((rental) => (
//                 <tr key={rental.id} className="border-b hover:bg-gray-50">
//                   <td className="py-3 px-4">{rental.id}</td>
//                   <td className="py-3 px-4">{rental.user}</td>
//                   <td className="py-3 px-4">{rental.car_name}</td>
//                   <td className="py-3 px-4">{rental.start_date}</td>
//                   <td className="py-3 px-4">{rental.end_date}</td>
//                   <td className="py-3 px-4">{rental.total_price} MAD</td>
//                   <td className="py-3 px-4">
//                     {rental.is_valid_admin ? "Yes" : "No"}
//                   </td>
//                   <td className="py-3 px-4">{rental.location_city}</td>
//                   <td className="py-3 px-4">
//                     {new Date(rental.created_at).toLocaleDateString()}
//                   </td>
//                   { userInfo && userInfo .role == "admin" && ( // Show validation button only for admin
//                     <td className="py-3 px-4">
//                       <button
//                         onClick={() => handleValidation(rental.id)} // Call handleValidation on button click
//                         className="py-1 px-3 bg-green-500 text-white rounded"
//                       >
//                         Valider
//                       </button>
//                     </td>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* Pagination controls */}
//         <div className="mt-4 flex justify-between items-center">
//           <button
//             onClick={() =>
//               dispatch(fetchRentals({ page: pagination.currentPage - 1 }))
//             }
//             disabled={!pagination.previous}
//             className={`py-2 px-4 bg-blue-500 text-white rounded ${
//               !pagination.previous && "opacity-50 cursor-not-allowed"
//             }`}
//           >
//             Previous
//           </button>
//           <span>
//             Page {pagination.currentPage} of {pagination.totalPages}
//           </span>
//           <button
//             onClick={() =>
//             {
//               console.log(pagination);

//               dispatch(fetchRentals({ page: pagination.currentPage + 1 }))}
//             }
//             disabled={!pagination.next}
//             className={`py-2 px-4 bg-blue-500 text-white rounded ${
//               !pagination.next && "opacity-50 cursor-not-allowed"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Rentals;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchRentals,
//   updateRentalValidity,
//   uploadContract,
// } from "../../features/Cars/CarsSlice"; // Assuming you have this action in CarsSlice
// import DashboardLayout from "../../components/Home/DashbordLayout";

// const Rentals = () => {
//   const dispatch = useDispatch();
//   const { userInfo } = useSelector((state) => state.user);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const [uploadError, setUploadError] = useState("");

//   const { rentals, loading, pagination } = useSelector(
//     (state) => state.carRental
//   );

//   // States for filtering
//   const [filterModel, setFilterModel] = useState("");
//   const [filterValid, setFilterValid] = useState("");

//   useEffect(() => {
//     if (!localStorage.getItem("AUTH_TOKEN_KEY")) {
//       window.location.href = "/";
//     }

//     // Fetch rentals when the component mounts
//     dispatch(fetchRentals({ page: pagination.currentPage }));
//   }, [dispatch, pagination.currentPage, userInfo]);

//   if (loading) {
//     return <div className="text-center mt-10">Loading rentals...</div>;
//   }

//   // Function to handle validation
//   const handleValidation = (rentalId) => {
//     dispatch(updateRentalValidity(rentalId));
//   };

//   // Filter rentals based on selected model and validity
//   const filteredRentals = rentals.results?.filter((rental) => {
//     // const matchesModel = filterModel === "" || rental.car_model === filterModel;
//     const matchesValidity =
//       filterValid === "" || String(rental.is_valid_admin) === filterValid;
//     return matchesValidity;
//   });

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     // if (file) {
//     //   if (file.type !== "application/pdf") {
//     //     setUploadError("Please upload a valid PDF file.");
//     //   } else {
//     setSelectedFile(file);
//     //     setUploadError("");
//     //   }
//     // }
//   };

//   const handleUpload = (rental) => {
//     if (!selectedFile) {
//       setUploadError("No file selected. Please choose a file to upload.");
//       return;
//     }
//     console.log(selectedFile, rental);

//     // dispatch(uploadContract({ rental, file: selectedFile }));
//     dispatch(uploadContract({ rental: rental, file: selectedFile }));
//   };

//   return (
//     <DashboardLayout>
//       <div className="p-3   bg-white shadow-md rounded-lg">
//         <h1 className="text-2xl font-semibold mb-4">Rentals</h1>

//         {/* Filter section */}
//         <div className="mb-4 flex gap-4">
//           {/* <div>
//             <label htmlFor="model-filter" className="block mb-2 text-sm font-medium text-gray-700">
//               Filter by Model:
//             </label>
//             <select
//               id="model-filter"
//               value={filterModel}
//               onChange={(e) => setFilterModel(e.target.value)}
//               className="border border-gray-300 p-2 rounded"
//             >
//               <option value="">All Models</option>
//               {rentals.results?.map((rental) => (
//                 <option key={rental.id} value={rental.car_name }>
//                   {rental.car_name }
//                 </option>
//               ))}
//             </select>
//           </div> */}

//           <div className="flex w-full   items-center gap-2">
//             <label
//               htmlFor="validity-filter"
//               className="block mb-2 text-sm font-medium text-gray-700"
//             >
//               Filter by Validity:
//             </label>
//             <select
//               id="validity-filter"
//               value={filterValid}
//               onChange={(e) => setFilterValid(e.target.value)}
//               className="border border-gray-300 p-2 rounded"
//             >
//               <option value="">All</option>
//               <option value="true">Valid</option>
//               <option value="false">Invalid</option>
//             </select>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 {/* <th className="py-3 px-4 border-b text-left font-medium">ID</th> */}
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Utilisateur
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Voiture
//                 </th>
//                 {/* <th className="py-3 px-4 border-b text-left font-medium">Modèle</th> */}
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Date de début
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Date de fin
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Prix total
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Valide
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Ville
//                 </th>
//                 <th className="py-3 px-4 border-b text-left font-medium">
//                   Créé à
//                 </th>
//                 {userInfo && userInfo.role === "admin" && (
//                   <th className="py-3 px-4 border-b text-left font-medium">
//                     Valider
//                   </th>
//                 )}

//               </tr>
//             </thead>
//             <tbody>
//               {filteredRentals?.map((rental) => (
//                 <tr key={rental.id} className="border-b hover:bg-gray-50">
//                   {/* <td className="py-3 px-4">{rental.id}</td> */}
//                   <td className="py-3 px-4">{rental.user}</td>
//                   <td className="py-3 px-4">{rental.car_name}</td>
//                   {/* <td className="py-3 px-4">{rental.car_model}</td> */}
//                   <td className="py-3 px-4">{rental.start_date}</td>
//                   <td className="py-3 px-4">{rental.end_date}</td>
//                   <td className="py-3 px-4">{rental.total_price} MAD</td>
//                   <td className="py-3 px-4">
//                     {rental.is_valid_admin ? "Yes" : "No"}
//                   </td>
//                   <td className="py-3 px-4">{rental.location_city}</td>
//                   <td className="py-3 px-4">
//                     {new Date(rental.created_at).toLocaleDateString()}
//                   </td>
//                   {userInfo && userInfo.role === "admin" && (
//                     // <td className="py-3 px-4">
//                     //   <input
//                     //     type="file"
//                     //     onChange={handleFileChange}
//                     //     className="mb-2"
//                     //     name="files"
//                     //     // onChange={() => InsertFiles(event.target.files)}
//                     //   />
//                     //   <button
//                     //     onClick={() => handleUpload(rental.id)} // Passer l'ID de la location
//                     //     className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
//                     //   >
//                     //     Upload Contract
//                     //   </button>
//                     //   <button
//                     //     onClick={() => handleValidation(rental.id)}
//                     //     className="py-1 px-3 bg-green-500 text-white rounded"
//                     //   >
//                     //     Valider
//                     //   </button>
//                     // </td>
//                     <td className="py-3 px-4">
//                       <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
//                         {/* File Input */}
//                         <div className="relative w-full lg:w-auto">
//                           <input
//                             type="file"
//                             onChange={handleFileChange}
//                             className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
//                    file:rounded-lg file:border-0 file:text-sm file:font-semibold
//                    file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
//                             name="files"
//                           />
//                           {/* {uploadError && (
//                             <span className="text-red-500 text-xs">
//                               {uploadError}
//                             </span>
//                           )} */}
//                         </div>

//                         {/* Upload Button */}
//                         <button
//                           onClick={() => handleUpload(rental.id)}
//                           className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg
//                  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400
//                  focus:ring-opacity-75 transition duration-150 ease-in-out"
//                         >
//                           Upload Contract
//                         </button>

//                         {/* Validation Button */}
//                         <button
//                           onClick={() => handleValidation(rental.id)}
//                           className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg
//                  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400
//                  focus:ring-opacity-75 transition duration-150 ease-in-out"
//                         >
//                           Valider
//                         </button>
//                       </div>
//                     </td>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination controls */}
//         <div className="mt-4 flex justify-between items-center">
//           <button
//             onClick={() =>
//               dispatch(fetchRentals({ page: pagination.currentPage - 1 }))
//             }
//             disabled={!pagination.previous}
//             className={`py-2 px-4 bg-blue-500 text-white rounded ${
//               !pagination.previous && "opacity-50 cursor-not-allowed"
//             }`}
//           >
//             Previous
//           </button>
//           <span>
//             Page {pagination.currentPage} of {pagination.totalPages}
//           </span>
//           <button
//             onClick={() =>
//               dispatch(fetchRentals({ page: pagination.currentPage + 1 }))
//             }
//             disabled={!pagination.next}
//             className={`py-2 px-4 bg-blue-500 text-white rounded ${
//               !pagination.next && "opacity-50 cursor-not-allowed"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Rentals;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRentals,
  updateRentalValidity,
  uploadContract,
} from "../../features/Cars/CarsSlice";

import { fetchUserDetails } from "../../features/Users/UserSlice";
import DashboardLayout from "../../components/Home/DashbordLayout";
import Modal from "react-modal";
import { Check, Download, File, FileDown, Upload } from "lucide-react";
import { FiDownloadCloud } from "react-icons/fi";

const RentalsNV = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { isAdmin } = useSelector((state) => state.user.role == "admin");
  const [selectedRental, setSelectedRental] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { rentals, loading, pagination } = useSelector(
    (state) => state.carRental
  );

  // States for filtering
  const [filterModel, setFilterModel] = useState("");
  const [filterValid, setFilterValid] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("AUTH_TOKEN_KEY")) {
      window.location.href = "/";
    }

    dispatch(fetchUserDetails());
    // Fetch rentals when the component mounts
    dispatch(fetchRentals({ page: pagination.currentPage }));
  }, [dispatch, pagination.currentPage]);
  // Cette fonction peut être appelée lorsque vous sélectionnez un élément
  const handleSelectRental = (rental) => {
    setSelectedRental(rental);
  };
  if (loading) {
    return <div className="text-center mt-10">Loading rentals...</div>;
  }

  const handleValidation = (rentalId) => {
    dispatch(updateRentalValidity(rentalId));

    window.location.reload();
  };

  const filteredRentals = rentals.results?.filter((rental) => {
    const matchesValidity =
      filterValid === "" || String(rental.is_valid_admin) === filterValid;
    return matchesValidity;
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // if (file.type !== "application/pdf") {
      //   setUploadError("Please upload a valid PDF file.");
      //   return;
      // }
      setSelectedFile(file);
      setUploadError("");
    }
  };

  const handleUpload = (rental) => {
    console.log(rental);

    if (!selectedFile) {
      setUploadError("No file selected. Please choose a file to upload.");
      return;
    }
    console.log(rental);

    dispatch(uploadContract({ rental, file: selectedFile })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        setSuccessMessage("File uploaded successfully!");
        setModalIsOpen(false); // Close modal after successful upload
        setTimeout(() => {
          setSuccessMessage(""); // Clear success message after 1 second
        }, 1000);
      } else {
        setSuccessMessage(""); // Reset success message on failure
        setUploadError("Failed to upload the file. Please try again.");
      }
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedFile(null); // Reset file selection
    setSuccessMessage(""); // Reset success message
    setUploadError(""); // Reset error message
  };

  return (
    <DashboardLayout>
      <div className="p-3 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Rentals</h1>

        {/* Filter section */}
        <div className="mb-4 flex gap-4">
          <div className="flex w-full items-center gap-2">
            <label
              htmlFor="validity-filter"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Filter by Validity:
            </label>
            <select
              id="validity-filter"
              value={filterValid}
              onChange={(e) => setFilterValid(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="">All</option>
              <option value="true">Valid</option>
              <option value="false">Invalid</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left font-medium">
                  Utilisateur
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Voiture
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Date de début
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Date de fin
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Prix total
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Valide
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Ville
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Créé à
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Contrat
                </th>
                {userInfo && userInfo.role == "admin" && (
                  <th className="py-3 px-4 border-b text-center font-medium">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredRentals?.map((rental) => (
                <tr key={rental.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{rental.user}</td>
                  <td className="py-3 px-4">{rental.car_name}</td>
                  <td className="py-3 px-4">{rental.start_date}</td>
                  <td className="py-3 px-4">{rental.end_date}</td>
                  <td className="py-3 px-4">{rental.total_price} MAD</td>
                  <td
                    className={`py-3  ${
                      rental.is_valid_admin ? "text-green-700" : ""
                    } px-4`}
                  >
                    {rental.is_valid_admin}
                  </td>
                  <td className="py-3 px-4">{rental.location_city}</td>
                  <td className="py-3 px-4">
                    {new Date(rental.created_at).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 ">
                    {rental.pdf_contract ? (
                      <a href={rental.pdf_contract.file} download>
                        <button
                          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                        focus:ring-opacity-75 transition duration-150 ease-in-out flex  gap-3"
                        >
                          <FileDown />
                        </button>
                      </a>
                    ) : (
                      "Aucun contract "
                    )}
                  </td>

                  {userInfo && userInfo.role == "admin" && (
                    <td className="py-3 px-4 flex  justify-center h-full  items-center w-full ">
                      <button
                        onClick={() => {
                          openModal();
                          handleSelectRental(rental);
                        }}
                        title="Upload Contract"
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                        focus:ring-opacity-75 transition duration-150 ease-in-out flex  gap-3"
                      >
                        <Upload />
                        {/* Contract */}
                      </button>
                      {/* {rental.is_valid_admin ? (
                        ""
                      ) : (
                        <button
                          onClick={() => handleValidation(rental.id)}
                          className="ml-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg 
                        hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 
                        focus:ring-opacity-75 transition duration-150 ease-in-out"
                        >
                          <Check />
                        </button>
                      )} */}

                      {/* Modal for file upload */}
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
                        overlayClassName="fixed inset-0  backdrop-blur-sm  flex justify-center items-center"
                      >
                        <h2 className="text-lg font-semibold mb-4">
                          Upload Contract
                        </h2>
                        {successMessage && (
                          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                            {successMessage}
                          </div>
                        )}
                        {uploadError && (
                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                            {uploadError}
                          </div>
                        )}
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="mb-4 block w-full text-sm text-gray-900 
                            file:mr-4 file:py-2 file:px-4 file:rounded-lg 
                            file:border-0 file:text-sm file:font-semibold 
                            file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                          name="files"
                        />
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleUpload(selectedRental?.id)}
                            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg 
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                            focus:ring-opacity-75 transition duration-150 ease-in-out"
                          >
                            <Upload />
                            {/* Affichez l'id du rental sélectionné */}
                          </button>
                          <button
                            onClick={closeModal}
                            className="ml-2 bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg 
                            hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 
                            focus:ring-opacity-75 transition duration-150 ease-in-out"
                          >
                            Annuler
                          </button>
                        </div>
                      </Modal>
                    </td>
                  )}

                  {/* } */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() =>
              dispatch(fetchRentals({ page: pagination.currentPage - 1 }))
            }
            disabled={!pagination.previous}
            className={`py-2 px-4 bg-blue-500 text-white rounded ${
              !pagination.previous && "opacity-50 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <span>
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <button
            onClick={() =>
              dispatch(fetchRentals({ page: pagination.currentPage + 1 }))
            }
            disabled={!pagination.next}
            className={`py-2 px-4 bg-blue-500 text-white rounded ${
              !pagination.next && "opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RentalsNV;
