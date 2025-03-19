// import {
//   ChevronFirst,
//   ChevronFirstIcon,
//   ChevronLast,
//   MoreVertical,
// } from "lucide-react";
// import React, {  createContext, useContext, useState } from "react";
// const SideBarContext = createContext();
// const SideBar = ({ children }) => {
//   const [expanded, setExpanded] = useState(true);
//   const [logout, setLog] = useState(false);
 
//   // )

//   return (
//     <aside className={`   h-full  ${expanded ? "w-72  " : "w-28"}    `}>
//       <nav className="h-full flex flex-col bg-white ">
//         <div className="p-4 pb-2 flex justify-between items-center">
        

//           <h3
//             className={`font-semibold  ${
//               expanded ? "flex" : "invisible"
//             } w-full justify-center text-center `}
//           >
//             Admin - Panel{" "}
//           </h3>

//           <button
//             className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
//             onClick={() => {
//               setExpanded((curr) => !curr);
//             }}
//           >
//             {expanded ? <ChevronFirst /> : <ChevronLast />}
//             {/* <ChevronFirst /> */}
//           </button>
//         </div>
//         <SideBarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">
//             {React.Children.map(children, (child) => (
//               <li>{child}</li>
//             ))}
//           </ul>
//         </SideBarContext.Provider>

//       </nav>
//     </aside>
//   );
// };

// export const SideBarItems = ({ icon, text, active, alert, onclick }) => {
//   const { expanded } = useContext(SideBarContext);
//   return (
//     <li
//       className={` relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors   group
         
//      h-11 
//           ${
//             active
//               ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
//               : " hover:bg-indigo-50 text-gray-600"
//           }`}
//       onClick={onclick}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all o       ${
//           expanded ? "w-52 ml-3 " : "w-0"
//         }`}
//       >
//         {text}
//       </span>
//       {alert && (
//         <div
//           className={`absolute right-2  w-2 h-2 rounded bg-indigo-400    ${
//             expanded ? "" : "top-2"
//           }`}
//         />
//       )}

//       {!expanded && (
//         <div
//           className={`
//               absolute left-full rounded-md px-2 py-1 ml-6
//               bg-indigo-100 text-indigo-800 text-sm
//               invisible opacity-20 -translate-x-3 transition-all
//               group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//           `}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   );
// };

// export default SideBar;


import {
  ChevronFirst,
  ChevronLast,
} from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarContext = createContext();

const SideBar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-full ${expanded ? "w-72" : "w-28"}`}>
      <nav className="h-full flex flex-col bg-white shadow-md">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h3 className={`font-semibold ${expanded ? "flex" : "invisible"} w-full justify-center text-center`}>
            Admin - Panel
          </h3>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            {React.Children.map(children, (child) => (
              <li>{child}</li>
            ))}
          </ul>
        </SideBarContext.Provider>
      </nav>
    </aside>
  );
};

export const SideBarItems = ({ icon, text, to, alert }) => {
  const { expanded } = useContext(SideBarContext);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center py-2 px-3 my-1 font-medium rounded-md transition-colors h-11
        ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`
      }
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}
      {!expanded && (
        <div
          className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
        >
          {text}
        </div>
      )}
    </NavLink>
  );
};

export default SideBar;
