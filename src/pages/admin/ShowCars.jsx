import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2Icon } from "lucide-react";
import { deleteCar, fetchCars } from "../../features/Cars/CarsSlice";

const ShowCars = () => {
  const dispatch = useDispatch();
  const { cars, loading, error, pagination } = useSelector(
    (state) => state.carRental
  );

  useEffect(() => {
    console.log(cars);
    
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  const handleDelete = (carId) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      dispatch(deleteCar(carId));
    }
  };

  const handlePageChange = (page) => {
    if (page) {
      dispatch(fetchCars({ page: page }));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Car List</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Marque
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Modèle
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Lieu
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prix par Jour
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Disponibilité
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Immatriculation
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Couleur
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre de places
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.isArray(cars) && cars.length > 0 ? (
            cars.map((car) => (
              <tr key={car.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.brand}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.model}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.price_per_day}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.availability ? "Available" : "Not Available"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.matricule}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.color}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {car.seats}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleDelete(car.id)}
                    className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out"
                  >
                    <Trash2Icon size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center py-4 text-gray-500">
                No cars available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={!pagination.previous}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        {/* <span>Page {pagination.currentPage} </span> */}
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

export default ShowCars;

