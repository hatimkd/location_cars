import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRentals, uploadContract } from "../../features/Cars/CarsSlice"; // Ensure this is the correct path
import { fetchUserDetails } from "../../features/Users/UserSlice";

const ShowRentals = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState("");

  const {
    rentals,
    loading,
    error,
    pagination,
    uploadError: sliceUploadError,
  } = useSelector((state) => state.carRental);

  useEffect(() => {
    // Fetch rentals when the component mounts or when currentPage changes
    console.log("kk", rentals.result);

    dispatch(fetchRentals({ page: currentPage }));
    dispatch(fetchUserDetails());
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    if (page) {
      setCurrentPage(page); // Trigger useEffect to refetch the data
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setUploadError("Please upload a valid PDF file.");
      } else {
        setSelectedFile(file);
        setUploadError("");
      }
    }
  };

  const handleUpload = (rental) => {
    if (!selectedFile) {
      setUploadError("No file selected. Please choose a file to upload.");
      return;
    }

    dispatch(uploadContract({ rental, file: selectedFile }));
  };
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Rental List</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Car
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Start Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              End Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Admin Validation
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rentals.result && rentals.result.length > 0 ? (
            rentals.result.map((rental) => (
              <tr key={rental.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.user}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.car}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.start_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.end_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.total_price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.location_city}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.is_valid_admin ? "Validated" : "Not Validated"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="mb-2"
                  />
                  <button
                    onClick={() => handleUpload(rental.id)} // Passer l'ID de la location
                    className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
                  >
                    Upload Contract
                  </button>
                  <button
                    // onClick={() => handleDelete(rental.id)}
                    className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4 text-gray-500">
                No rentals available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={!pagination.previous}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        <span>Page {pagination.currentPage}</span>
        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={!pagination.next}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowRentals;
