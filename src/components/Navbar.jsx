// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // Si vous utilisez react-router-dom

// const navigationItems = [
//   { name: 'accueil', href: '/', current: true },
//   { name: 'à propos de nous', href: '/about', current: false },
//   { name: 'voitures', href: '/#cars', current: false },
//   { name: 'aide', href: '#', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   const location = useLocation();
//   const [currentNav, setCurrentNav] = useState('');

//   useEffect(() => {
//     // Détecte la page active en fonction de l'URL
//     const currentPath = window.location.pathname;
//     const currentItem = navigationItems.find((item) => item.href === currentPath);
//     if (currentItem) {
//       setCurrentNav(currentItem.name);
//     } else {
//       setCurrentNav('accueil');
//     }
//   }, [location.pathname]); // Change lorsque l'URL change

//   const handleNavClick = (name) => {
//     setCurrentNav(name); // Met à jour la navigation actuelle
//   }

//   return (
//     <Disclosure as="nav" className="bg-white">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button */}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigationItems.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => handleNavClick(item.name)} // Met à jour l'état lorsque l'élément est cliqué
//                     aria-current={currentNav === item.name ? 'page' : undefined}
//                     className={classNames(
//                       currentNav === item.name ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-100 hover:text-gray-900',
//                       'rounded-md px-3 py-2 text-sm font-medium'
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="h-6 w-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     className="h-8 w-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//               >
//                 <MenuItem>
//                   <a href="/login" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <button onClick={() =>  {localStorage .removeItem ("AUTH_TOKEN_KEY")  ; window.location.href = '/'}} className=" px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 w-full  flex justify-start">
//                     Sign out
//                   </button>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigationItems.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               onClick={() => handleNavClick(item.name)} // Met à jour l'état
//               aria-current={currentNav === item.name ? 'page' : undefined}
//               className={classNames(
//                 currentNav === item.name ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-100 hover:text-gray-900',
//                 'block rounded-md px-3 py-2 text-base font-medium'
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { capitalize } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { name: "accueil", href: "/", current: true },
  { name: "à propos de nous", href: "/about", current: false },
  // { name: "voitures", href: "#cars", current: false },
  { name: "voitures", href: "/#cars", current: false },

  { name: "aide", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const [currentNav, setCurrentNav] = useState("");
  const isLoggedIn = !!localStorage.getItem("AUTH_TOKEN_KEY"); // Vérifie si le token est présent

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentItem = navigationItems.find(
      (item) => item.href === currentPath
    );
    if (currentItem) {
      setCurrentNav(currentItem.name);
    } else {
      setCurrentNav("");
    }
  }, [location.pathname]);

  const handleNavClick = (name) => {
    setCurrentNav(name);
  };

  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
            <div className="flex flex-shrink-0 items-center">
              {/* <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              /> */}

              <Link to="/">
                <h3 className="w-full flex justify-center items-center  font-bold text-2xl text-blue-900  mr-3">
                  Location voiture
                </h3>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.name)}
                    aria-current={currentNav === item.name ? "page" : undefined}
                    className={classNames(
                      currentNav === item.name
                        ? "bg-gray-900 text-white"
                        : "text-gray-900 hover:bg-gray-100 hover:text-gray-900",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {capitalize(item.name)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {isLoggedIn ? (
                  <MenuItem>
                    <Link
                      to="/users/profile"
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                    >
                      Votre Profil
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                    >
                      Se connecter
                    </Link>
                  </MenuItem>
                )}
                {/* <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">
                    Paramètres
                  </a>
                </MenuItem> */}
                {isLoggedIn && (
                  <MenuItem>
                    <button
                      onClick={() => {
                        localStorage.removeItem("AUTH_TOKEN_KEY");
                        window.location.href = "/";
                      }}
                      className="px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 w-full flex justify-start"
                    >
                      Se déconnecter
                    </button>
                  </MenuItem>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigationItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              aria-current={currentNav === item.name ? "page" : undefined}
              className={classNames(
                currentNav === item.name
                  ? "bg-gray-900 text-white"
                  : "text-gray-900 hover:bg-gray-100 hover:text-gray-900",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {capitalize(item.name)}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
