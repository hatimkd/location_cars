import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers} from "../../features/Cars/CarsSlice";



import {  deleteUser, makeAdmin } from "../../features/Users/UserSlice";

const ShowUsers = () => {
  const dispatch = useDispatch();
  const { users, nextPage, previousPage, loading } = useSelector((state) => state.carRental);
  
  const [currentPageUrl, setCurrentPageUrl] = useState("/users/");

  // Fetch users on component mount and whenever page changes
  useEffect(() => {
    dispatch(fetchUsers(currentPageUrl));
  }, [dispatch, currentPageUrl]);

  const handleNextPage = () => {
    if (nextPage) setCurrentPageUrl(nextPage);
  };

  const handlePreviousPage = () => {
    if (previousPage) setCurrentPageUrl(previousPage);
  };

  const handleDeleteUser = (username) => {
    // Dispatch action to delete user
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      dispatch(deleteUser(username));
    }
  };

  const handleMakeAdmin = (username) => {
    // Dispatch action to promote user to admin
    if (window.confirm("Êtes-vous sûr de vouloir promouvoir cet utilisateur en tant qu'admin ?")) {
      dispatch(makeAdmin(username));
    }
  };

  if (loading) {
    return <p className="text-center text-lg">Chargement des utilisateurs...</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Liste des Utilisateurs</h1>
      
      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-5 text-left text-sm font-semibold">Nom d'utilisateur</th>
              <th className="py-3 px-5 text-left text-sm font-semibold">Email</th>
              <th className="py-3 px-5 text-left text-sm font-semibold">Prénom</th>
              <th className="py-3 px-5 text-left text-sm font-semibold">Nom</th>
              <th className="py-3 px-5 text-left text-sm font-semibold">Rôle</th>
              <th className="py-3 px-5 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users && users.results ? (
              users.results.map((user) => (
                <tr key={user.username} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-5 text-sm">{user.username}</td>
                  <td className="py-3 px-5 text-sm">{user.email}</td>
                  <td className="py-3 px-5 text-sm">{user.first_name || "N/A"}</td>
                  <td className="py-3 px-5 text-sm">{user.last_name || "N/A"}</td>
                  <td className="py-3 px-5 text-sm">{user.is_staff ? "Admin" : "Utilisateur"}</td>
                  <td className="py-3 px-5 text-sm">
                    {/* Button to delete user */}
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                    >
                      Supprimer
                    </button>
                    
                    {/* Button to make admin (only if user is not already admin) */}
                    {!user.is_staff && (
                      <button
                        onClick={() => handleMakeAdmin(user.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Faire Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 px-5 text-center text-gray-500">
                  Aucun utilisateur trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={!previousPage}
          className={`py-2 px-5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all ${!previousPage ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Précédent
        </button>
        <button
          onClick={handleNextPage}
          disabled={!nextPage}
          className={`py-2 px-5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all ${!nextPage ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default ShowUsers;
