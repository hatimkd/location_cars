// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/admin/Dashboard";
// import UserProfile from "./pages/CarsList";
// import About from "./pages/AboutUs/About";
// import Login from "./pages/auth/Login";
// import ProfileForm from "./pages/auth/ProfileForm";
// import SignUpForm from "./pages/auth/SignUpForm";
// import DashboardUsr from "./pages/Users/Dashboard";
// import Rentals from "./pages/Users/Rentals";
// import RentalsNV from "./pages/Users/RentalsNV";
// import Error from "../src/pages/Error";
// import Footer from "./components/Home/Footer";

// // import Dashbord from './pages/Dashbord';

// const AppRoutes = () => {
//   return (

//     <Router>
//       <Navbar />

//       {/* <AdminLayout /> */}
//       <Routes>
//         {/* Route pour la page d'accueil */}

//         <Route path="/" element={<Home />} />

//         <Route path="/cars" element={<UserProfile />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/admin" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/sign-up" element={<SignUpForm />} />

//         <Route path="/users/profile" element={<DashboardUsr />} />
//         <Route path="/users/rentals" element={<Rentals />} />
//         <Route path="/users/rentals_non_valid" element={<RentalsNV />} />
//         <Route path="*" element={<Error />} />

//         {/* <Route path="/dashboard" element={<Dashbord />} /> */}
//       </Routes>

//       {/* <Footer /> */}
//     </Router>
//   );
// };

// export default AppRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/admin/Dashboard";
import AddCars from "./pages/admin/AddCars";
import ShowCars from "./pages/admin/ShowCars";
import ShowUsers from "./pages/admin/ShowUsers";
import Statistic from "./pages/admin/Statistic";
// import Dashboard from "./pages/admin/Dashboard";
import UserProfile from "./pages/CarsList";
import About from "./pages/AboutUs/About";
import Login from "./pages/auth/Login";
import SignUpForm from "./pages/auth/SignUpForm";
import DashboardUsr from "./pages/Users/Dashboard";
import Rentals from "./pages/Users/Rentals";
import RentalsNV from "./pages/Users/RentalsNV";
import Error from "../src/pages/Error";
import Layout from "./components/Layouts";
import DashboardLayout from "./components/Home/DashbordLayout";
// import Dashboard from "./pages/admin/Dashboard";

const AppRoutes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/cars" element={<UserProfile />} />
        <Route path="/about" element={<About />} /> */}
        {/* Routes publiques avec la Navbar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="cars" element={<UserProfile />} /> */}
          {/* <Route path="help" element={<Help />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          {/* <Route path="/users/profile" element={<DashboardUsr />} /> */}

         <Route path="/users" element={<DashboardLayout />}>
          <Route path="profile" element={<DashboardUsr />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="rentals_non_valid" element={<RentalsNV />} />
        </Route>

          {/* Routes Admin avec Outlet */}
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<Statistic />} />
            <Route path="statistics" element={<Statistic />} />
            <Route path="add-cars" element={<AddCars />} />
            <Route path="my-cars" element={<ShowCars />} />
            <Route path="users" element={<ShowUsers />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
