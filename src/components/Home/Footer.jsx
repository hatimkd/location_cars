import React from 'react';  // Seulement nécessaire si vous utilisez une ancienne version de React
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Si vous utilisez React Icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full justify-center  flex   rounded-2xl    mt-2 ">
      <div className="container mx-auto px-4">
        <div className="flex  w-full  justify-between  lg:flex-row flex-col items-stretch  lg:gap-0  gap-3 p-14">
          <div>
            <h2 className="text-lg font-semibold">À propos</h2>
            <p className="mt-4 text-gray-400">
              Nous offrons un service de location de voitures fiable <br /> avec une large gamme de véhicules disponibles.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Liens utiles</h2>
            <ul className="mt-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">Accueil</a>
              </li>
              <li>
                <a href="#cars" className="text-gray-400 hover:text-white">Nos voitures</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">À propos de nous</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Suivez-nous</h2>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Read more about Seminole tax hike" >
                <FaFacebook className="w-6 h-6 text-gray-400 hover:text-white" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Read more about Seminole tax hike">
                <FaInstagram className="w-6 h-6 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Location de Voitures. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
