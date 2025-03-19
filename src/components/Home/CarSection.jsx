import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import des icônes
// import CarCard from "./CarCard"; // Composant de carte
import { fetchCars } from "../../features/Cars/CarsSlice";
// import CarFilter from "./CarFilter";
// import AnimatedIcon from "../AnimatedIcon";
import { ReservationForm } from "./ReservationForm";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css"; // Importez les styles CSS de Swiper

// Chargement dynamique des composants
const CarCard = lazy(() => import("./CarCard")); // Lazy load du composant CarCard
const CarFilter = lazy(() => import("./CarFilter")); // Lazy load du composant CarFilter
const AnimatedIcon = lazy(() => import("../AnimatedIcon")); // Lazy load du composant AnimatedIcon
// const ReservationForm = lazy(() => import("./ReservationForm")); // Lazy load du composant ReservationForm

const CarSection = () => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const { cars, loading, error, pagination } = useSelector(
    (state) => state.carRental
  );
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    // color: "",
  });

  const brands = useMemo(
    () => [
      { value: "BMW", label: "BMW", models: ["Serie 3", "Serie 5", "X5"] },
      {
        value: "Audi",
        label: "Audi",
        models: ["A3", "A4", "Q5", "Q8 e-tron", "A7"],
      },
      {
        value: "Dacia",
        label: "Dacia",
        models: ["Logan", "Sandero Stepway", "Sandero"],
      },
      {
        value: "Mercedes-Benz",
        label: "Mercedes-Benz",
        models: ["Classe A", "Classe C", "E-Class", "GLE"],
      },
      {
        value: "Volkswagen",
        label: "Volkswagen",
        models: ["Golf", "Passat", "Tiguan", "Touareg"],
      },
      {
        value: "Porsche",
        label: "Porsche",
        models: ["911", "Cayenne", "Macan"],
      },
      { value: "Hyundai", label: "Hyundai", models: ["Accent", "Tucson"] },
      {
        value: "Renault",
        label: "Renault",
        models: ["Clio", "Captur", "Mégane"],
      },
      { value: "Peugeot", label: "Peugeot", models: ["208", "3008", "508"] },
      {
        value: "Citroën",
        label: "Citroën",
        models: ["C3", "C4", "C5 Aircross"],
      },
      {
        value: "DS Automobiles",
        label: "DS Automobiles",
        models: ["DS3", "DS4", "DS7"],
      },
      { value: "Alpine", label: "Alpine", models: ["A110"] },
      { value: "Fiat", label: "Fiat", models: ["500", "Panda", "Tipo"] },
      {
        value: "Alfa Romeo",
        label: "Alfa Romeo",
        models: ["Giulia", "Stelvio", "Mito"],
      },
      { value: "Lancia", label: "Lancia", models: ["Ypsilon", "Delta"] },
      {
        value: "Ferrari",
        label: "Ferrari",
        models: ["488", "Portofino", "Roma"],
      },
      {
        value: "Maserati",
        label: "Maserati",
        models: ["Ghibli", "Levante", "Quattroporte"],
      },
      {
        value: "Toyota",
        label: "Toyota",
        models: ["Corolla", "Camry", "Hilux"],
      },
      { value: "Honda", label: "Honda", models: ["Civic", "Accord", "CR-V"] },
      { value: "Ford", label: "Ford", models: ["Focus", "Mustang", "F-150"] },
    ],
    []
  );

  // Nouvelle fonction pour vérifier si un filtre est appliqué
  const [initialLoad, setInitialLoad] = useState(true);

  // useEffect(() => {
  //   if (initialLoad || (filters.brand && filters.model)) {
  //     dispatch(
  //       fetchCars({
  //         page: 1,
  //         brand: filters.brand || "",
  //         model: filters.model || "",
  //       })
  //     );
  //     setInitialLoad(false); // Appliquez un filtre uniquement si l'un des filtres est défini
  //   }
  // }, [
  //   dispatch,
  //   pagination.currentPage,
  //   filters.brand,
  //   filters.model,
  //   initialLoad,
  // ]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (initialLoad || (filters.brand && filters.model)) {
        dispatch(
          fetchCars({ page: 1, brand: filters.brand, model: filters.model })
        );
        setInitialLoad(false);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [filters.brand, filters.model, dispatch]);

  // // useEffect(() => {
  // //   const timeoutId = setTimeout(() => {
  // //     if (filters.brand || filters.model) {
  // //       dispatch(
  // //         fetchCars({ page: 1, brand: filters.brand, model: filters.model })
  // //       );
  // //     }
  // //   }, 500); // 500 ms debounce

  //   return () => clearTimeout(timeoutId);
  // }, [filters.brand, filters.model]);
  const handleNextPage = () => {
    console.log(pagination.next);

    if (pagination.currentPage) {
      // dispatch(fetchCars(pagination.currentPage + 1));
      dispatch(
        fetchCars({
          page: pagination.currentPage + 1,
          brand: filters.brand,
          model: filters.model,
        })
      );
    }
  };

  // Hooks should always be declared at the top of the component, before any early returns
  const handleReserveClick = useCallback((car) => {
    setSelectedCar(car);
    setShowForm(true);
  }, []);

  const handlePreviousPage = () => {
    if (pagination.previous) {
      // dispatch(fetchCars(pagination.currentPage - 1));
      dispatch(
        fetchCars({
          page: pagination.currentPage - 1,
          brand: filters.brand,
          model: filters.model,
        })
      );
    }
  };

  if (loading) {
    return <>{<AnimatedIcon />}</>;
  }

  if (error) {
    return <>{<AnimatedIcon />}</>;
  }

  const handleFilterChange = (newFilters) => {
    console.log("Changement de filtres :", newFilters);

    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
    // Vous pouvez faire un dispatch ici si vous souhaitez filtrer côté serveur
    // dispatch(fetchFilteredCars(newFilters));
  };

  // const filteredCars = Array.isArray(cars)
  //   ? cars.filter(
  //       (car) =>
  //         (filters.brand ? car.brand == filters.brand : true) &&
  //         (filters.model ? car.model == filters.model : true)
  //     )
  //   : [];

  if (cars?.detail) {
    return <div>Erreur: {cars.detail}</div>;
  }

  // const colors = ["Noir", "Blanc", "Rouge", "Bleu", "Gris", "Vert"];

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedCar(null);
  };
  return (
    <div className="p-8">
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            {/* <Suspense fallback={<div>Loading ...</div>}> */}
            <ReservationForm car={selectedCar} onClose={handleCloseForm} />
            {/* </Suspense> */}
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6">Nos Voitures Disponibles</h1>
      {/* <CarFilter
        brands={['Renault', 'Dacia', 'Mercedes']} // Remplacez par vos données dynamiques si nécessaire
        models={['Megane', 'Sandero Stepway', 'C-Class']} // Remplacez par vos données dynamiques
        colors={['Noir', 'Blanc', 'Rouge']} // Remplacez par vos données dynamiques
        onFilterChange={handleFilterChange}
      /> */}
      <Suspense fallback={<div>Loading filters...</div>}>
        <CarFilter brands={brands} onFilterChange={handleFilterChange} />
      </Suspense>

      <div id="cars" className="  flex-  justify-center  w-full      ">
        {/* <div id="cars"  className="flex lg:flex-wrap justify-center flex-row lg:flex-row"> */}

        {/* {(Array.isArray(cars) ? cars : []).slice(0, 8).map((car) => (
          <CarCard key={car.id} car={car} onReserveClick={handleReserveClick} />
        ))} */}

        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1} // Nombre de cartes visibles sur mobile
          breakpoints={{
            640: {
              slidesPerView: 1, // Nombre de cartes visibles à partir de 640px
            },
            1024: {
              slidesPerView: 4, // Nombre de cartes visibles à partir de 1024px
            },
          }}
        >
          {(Array.isArray(cars) ? cars : []).slice(0, 8).map((car) => (
            <SwiperSlide key={car.id} className="  ">
              <div className=" flex justify-center w-full " id="cars">
                <Suspense fallback={<div>Loading ...</div>}>
                  <CarCard car={car} onReserveClick={handleReserveClick} />
                </Suspense>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-6 flex justify-between">
        {/* Bouton Précédent avec icône seulement */}
        <button
          onClick={handlePreviousPage}
          disabled={!pagination.previous}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 disabled:opacity-50"
          name="next"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>

        <h3> Page {pagination.currentPage} </h3>
        {/* Bouton Suivant avec icône seulement */}
        <button
          onClick={handleNextPage}
          name="prv"
          disabled={!pagination.next}
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CarSection;
