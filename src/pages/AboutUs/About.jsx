import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-slate-100 shadow-xl rounded-lg justify-center items-center p-9 lg:p-8 gap-8">
      <div className="flex justify-center items-center w-full">
        <h3 className="text-xl font-semibold text-slate-700 text-justify indent-10 leading-relaxed  p-9 ">
          Découvrez une expérience de conduite unique avec notre service de
          location de voitures. Que ce soit pour un voyage d’affaires, des
          vacances en famille ou une exploration urbaine, nous vous proposons
          une large sélection de véhicules modernes et bien entretenus.
          Profitez de nos options de location flexibles, d’un excellent rapport
          qualité-prix, et d’une réservation en ligne rapide. Notre équipe est
          disponible 24/7 pour vous accompagner à chaque étape.
        </h3>
      </div>
      <div className="flex justify-center items-center w-full">
        <img src="Location (1).webp" alt="Car Rental" className="rounded-2xl  p-9" />
      </div>
    </div>
  );
};

export default About;
