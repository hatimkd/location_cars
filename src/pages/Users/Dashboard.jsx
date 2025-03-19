// src/pages/Dashboard.js
import React, { useEffect } from "react";
import DashboardLayout from "../../components/Home/DashbordLayout";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../features/Users/UserSlice";
import { User, Mail } from "lucide-react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const DashboardUsr = () => {
  const dispatch = useDispatch();
  const { userInfo, isLoading, errorMessage } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!localStorage.getItem("AUTH_TOKEN_KEY")) {
      window.location.href = "/";
    }
    dispatch(fetchUserDetails()); // Récupère les détails de l'utilisateur lors du montage du composant
  }, [dispatch]);

  if (isLoading) {
    return <div>Chargement des informations...</div>; // Affiche un message de chargement
  }

  if (errorMessage) {
    return <div>Erreur: {errorMessage}</div>; // Affiche l'erreur s'il y en a
  }

  if (!userInfo) {
    return <div>Aucune information d'utilisateur disponible.</div>; // Gère le cas où il n'y a pas d'informations utilisateur
  }

  return (
    <DashboardLayout>
      <div className="px-4  sm:px-28 sm:py-7">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Profil de l'utilisateur
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Détails personnels et informations d'application.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100  sm:px-28  ">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nom d'utilisateur
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {userInfo.username}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {userInfo.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Prénom
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {userInfo.first_name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nom de famille
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {userInfo.last_name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Pièces jointes
            </dt>
            {/* <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        profile_info.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Télécharger
                    </a>
                  </div>
                </li>
              </ul>
            </dd> */}

            <dd>En cours de construire</dd>
          </div>
        </dl>
      </div>
    </DashboardLayout>
  );
};

export default DashboardUsr;
