// // import React from "react";
// // import Navbar from "../components/Navbar";
// // import Section from "../components/Home/Section";
// // import BrandCar from "../components/Home/BrandCar";
// // import CarSection from "../components/Home/CarSection";
// // import State from "../components/Home/State";
// // import Footer from "../components/Home/Footer";

// // const Home = () => {
// //   return (
// //     <div className="w-full  flex flex-col   lg:px-12  px-3     p-1  rounded-b-3xl  bg-slate-100  shadow-blue-300">
// //       <Section />

// //       <BrandCar />
// //       <CarSection />
// //       <State />

// //       {/* <Navbar /> */}
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { Suspense, lazy } from "react";
// import Navbar from "../components/Navbar";
// import Section from "../components/Home/Section";
// import Footer from "../components/Home/Footer";

// const BrandCar = lazy(() => import("../components/Home/BrandCar"));
// const CarSection = lazy(() => import("../components/Home/CarSection"));
// const State = lazy(() => import("../components/Home/State"));

// const Home = () => {
//   return (
//     <div className="w-full flex flex-col lg:px-12 px-3 p-1 rounded-b-3xl bg-slate-100 shadow-blue-300">
//       <Section />

//       <Suspense fallback={<div>Chargement...</div>}>
//         <BrandCar />
//         <CarSection />
//         <State />

//         <Footer />
//       </Suspense>

//       {/* <Navbar /> */}
//     </div>
//   );
// };

// export default Home;

import React, { Suspense, lazy, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Section from "../components/Home/Section";
import Footer from "../components/Home/Footer";
import Loading from "../components/Home/Loading";
import { Helmet } from "react-helmet-async";

const BrandCar = lazy(() => import("../components/Home/BrandCar"));
const CarSection = lazy(() => import("../components/Home/CarSection"));
const State = lazy(() => import("../components/Home/State"));

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Arrêter l'affichage de la page de chargement après 1 seconde
    }, 1000);
    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté
  }, []);
  // Utiliser useInView pour observer le défilement
  const { ref: brandCarRef, inView: brandCarVisible } = useInView({
    threshold: 0.1, // Définir le seuil d'activation
  });

  const { ref: carSectionRef, inView: carSectionVisible } = useInView({
    threshold: 0.1,
  });

  const { ref: stateRef, inView: stateVisible } = useInView({
    threshold: 0.1,
  });

  // if (loading) {
  // return <FaTruckLoading />; // Affiche la page de chargement pendant 1 seconde
  // }
  return (
    <div className="w-full flex flex-col lg:px-12 px-3 p-1 rounded-b-3xl bg-slate-50 shadow-blue-300">
      <Helmet>
        <title>Accueil - Location de Voitures</title>
        <meta
          name="description"
          content="Trouvez et louez la voiture parfaite en quelques clics ! Large choix et meilleurs prix garantis."
        />
        <meta
          name="keywords"
          content="location voiture, louer voiture, location auto, véhicules, voitures de location, cars, véhicules de location, location de véhicules, location, touareg"
        />
        <meta name="author" content="Location Car" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="Accueil - Location de Voitures" />
        <meta
          property="og:description"
          content="Trouvez et louez la voiture parfaite en quelques clics !"
        />
        <meta
          property="og:image"
          content="GLE.webp"
        />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accueil - Location de Voitures" />
        <meta
          name="twitter:description"
          content="Trouvez et louez la voiture parfaite en quelques clics !"
        />
        <meta
          name="twitter:image"
          content="GLE.webp"
        />
      </Helmet>

      <Section />

      <Suspense
        fallback={
          <div className="w-full flex justify-center">
            <Loading />
          </div>
        }
      >
        <div
          ref={brandCarRef}
          className={`transition-opacity duration-700 ${
            brandCarVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <BrandCar />
        </div>

        <div
          ref={carSectionRef}
          className={`transition-opacity duration-700 ${
            carSectionVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <CarSection />
        </div>

        <div
          ref={stateRef}
          className={`transition-opacity duration-700 ${
            stateVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <State />
        </div>

        <Footer />
      </Suspense>

      {/* <Navbar /> */}
    </div>
  );
};

export default Home;
