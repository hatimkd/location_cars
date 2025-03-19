import React, { useEffect } from "react";
import { FaCar, FaClipboardList, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCars,
  fetchRentals,
  fetchUsers,
} from "../../features/Cars/CarsSlice";

function Statistic() {
  const dispatch = useDispatch();
  const { cars, users, rentals, loading, error, pagination } = useSelector(
    (state) => state.carRental
  );

  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
    dispatch(fetchUsers("/users/"));

    dispatch(fetchRentals({ page: 1 }));
  }, [dispatch]);
  return (
    <div className="p-6 bg-gray-50  h-[90vh] overflow-scroll flex flex-col space-y-8">
      {/* Section Revenu */}
      <div className="flex justify-around space-x-6">
        {/* Carte Total Utilisateurs */}
        <div className="flex justify-between items-center bg-white p-8 rounded-xl shadow-md w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <FaUser className="text-5xl text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-600">
                Total Utilisateurs
              </h2>
              <p className="text-3xl font-bold text-gray-800"> {users.count}</p>
              <span className="text-green-500 text-sm">
                +5% depuis le mois dernier
              </span>
            </div>
          </div>
          {/* <div className="text-right">
            <h4 className="text-base text-gray-500">Nouveaux Utilisateurs</h4>
            {/* <p className="text-xl font-medium text-gray-700">75</p> */}
          {/* <span className="text-sm text-gray-400">Ce mois-ci</span> */}
          {/* </div>  */}
        </div>

        {/* Carte Total Voitures */}
        <div className="flex justify-between items-center bg-white p-8 rounded-xl shadow-md w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <FaCar className="text-5xl text-green-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-600">
                Total Voitures
              </h2>
              <p className="text-3xl font-bold text-gray-800">{cars.length}</p>
              <span className="text-green-500 text-sm">
                +10 nouvelles voitures
              </span>
            </div>
          </div>
        </div>

        {/* Carte Total Locations */}
        <div className="flex justify-between items-center bg-white p-8 rounded-xl shadow-md w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <FaClipboardList className="text-5xl text-red-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-600">
                Total Locations
              </h2>
              <p className="text-3xl font-bold text-gray-800">
                {" "}
                {rentals.count}
              </p>
              <span className="text-green-500 text-sm">
                +8% depuis le mois dernier
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Meilleures Locations */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Meilleures Locations de Voitures
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-600">Toyota Corolla</span>
              <span className="text-gray-800 font-semibold">227 459 €</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">BMW X5</span>
              <span className="text-gray-800 font-semibold">142 823 €</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Honda Civic</span>
              <span className="text-gray-800 font-semibold">89 935 €</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Mercedes Benz E-Class</span>
              <span className="text-gray-800 font-semibold">37 028 €</span>
            </li>
          </ul>
        </div>

        {/* Lieux de Prise en Charge Populaires */}
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Lieux de Prise en Charge Populaires
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-600">Los Angeles</span>
              <span className="text-gray-800 font-semibold">
                45% des locations
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">New York</span>
              <span className="text-gray-800 font-semibold">
                35% des locations
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Miami</span>
              <span className="text-gray-800 font-semibold">
                15% des locations
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">San Francisco</span>
              <span className="text-gray-800 font-semibold">
                5% des locations
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
