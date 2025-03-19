// import {
//   CalendarSearch,
//   CarIcon,
//   ChartNoAxesColumnDecreasingIcon,
//   List,
//   Plus,
//   Users2Icon,
// } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import SideBar, { SideBarItems } from "../../components/Admin/SideBar";
// import Statistic from "./Statistic";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserDetails } from "../../features/Users/UserSlice";
// import { redirect, useNavigate } from "react-router-dom";
// import AddCars from "./AddCars";
// import ShowCars from "./ShowCars";
// import ShowUsers from "./ShowUsers";
// import { FaCar } from "react-icons/fa";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const { userInfo, isLoading, errorMessage } = useSelector(
//     (state) => state.user
//   );
//   const navigate = useNavigate();

//   const [activItem, setActive] = useState("Statistics");

//   useEffect(() => {
//     // Dispatch the action to fetch user details
//     dispatch(fetchUserDetails());
//   }, [dispatch]);

//   useEffect(() => {
//     // Ensure we have userInfo and check role for redirection

//     if (localStorage.getItem("AUTH_TOKEN_KEY") != null) {
//       if (!isLoading && userInfo && userInfo.role != "admin") {
//         // Redirect to home if not admin

//         window.location.href = "/";
//       }
//     } else window.location.href = "/";
//   }, [userInfo, isLoading, navigate]);

//   const handlClick = (text) => {
//     setActive(text);
//   };

//   const list = [
//     { icon: <ChartNoAxesColumnDecreasingIcon size={20} />, text: "Statistics" },
//     { icon: <CarIcon size={20} />, text: "Ajouter voitures" },
//     { icon: <FaCar size={20} />, text: "Mes voitures" },
//     { icon: <Users2Icon size={20} />, text: "Utilisateurs" },
//   ];

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (errorMessage) {
//     return <div>Error: {errorMessage}</div>;
//   }

//   return (
//     <main className="w-full flex">
//       <SideBar
//         first_name={userInfo?.first_name || "N/A"}
//         last_name={userInfo?.last_name || "N/A"}
//         email={userInfo?.email || "N/A"}
//       >
//         {list.map((itm) => (
//           <SideBarItems
//             key={itm.text}
//             icon={itm.icon}
//             text={itm.text}
//             active={itm.text === activItem}
//             onclick={() => handlClick(itm.text)}
//           />
//         ))}
//       </SideBar>
//       <div className="w-full h-full ">
//         {activItem === "Statistics" && <Statistic />}{" "}
//         {activItem === "Ajouter voitures" && <AddCars />}
//         {activItem === "Mes voitures" && <ShowCars />}
//         {activItem === "Utilisateurs" && <ShowUsers />}
//         {/* You can add conditional rendering for other components */}
//       </div>
//     </main>
//   );
// };

// export default Dashboard;



import {
  CalendarSearch,
  CarIcon,
  ChartNoAxesColumnDecreasingIcon,
  Users2Icon,
} from "lucide-react";
import React, { useEffect } from "react";
import { FaCar } from "react-icons/fa";
import SideBar, { SideBarItems } from "../../components/Admin/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../features/Users/UserSlice";
import { useNavigate, Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userInfo, isLoading, errorMessage } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("AUTH_TOKEN_KEY") != null) {
      if (!isLoading && userInfo && userInfo.role !== "admin") {
        window.location.href = "/";
      }
    } else {
      window.location.href = "/";
    }
  }, [userInfo, isLoading, navigate]);

  const list = [
    { path: "/admin/statistics", icon: <ChartNoAxesColumnDecreasingIcon size={20} />, text: "Statistics" },
    { path: "/admin/add-cars", icon: <CarIcon size={20} />, text: "Ajouter voitures" },
    { path: "/admin/my-cars", icon: <FaCar size={20} />, text: "Mes voitures" },
    { path: "/admin/users", icon: <Users2Icon size={20} />, text: "Utilisateurs" },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <main className="w-full flex">
      <SideBar>
        {list.map((itm) => (
          // <NavLink
          //   key={itm.text}
          //   to={itm.path}
          //   className={({ isActive }) =>
          //     `flex items-center py-2 px-3 my-1 font-medium rounded-md transition-colors group h-11 ${
          //       isActive
          //         ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          //         : "hover:bg-indigo-50 text-gray-600"
          //     }`
          //   }
          // >
          //   {itm.icon}
          //   <span className="ml-3">{itm.text}</span>
          // </NavLink>
      
      
          <SideBarItems key={itm.text} icon={itm.icon} text={itm.text} to={itm.path} />
        ))}
      </SideBar>

      <div className="w-full h-full p-4">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
