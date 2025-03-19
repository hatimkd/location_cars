// src/components/Login.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice'; // Import de l'action
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.login);
    
  
  useEffect (()=> {


    if (localStorage.getItem("AUTH_TOKEN_KEY")) {
      window.location.href = "/users/profile";
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { username: email, password: password };
    dispatch(loginUser(formData));
  };

  return (
    <>
      {error && <div className="bg-red-600 text-white p-2 rounded">{error}</div>}
      {isAuthenticated && <div className="bg-green-600 text-white p-2 rounded">Connexion réussie !</div>}
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Connectez-vous à votre compte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nom d'utilisateur 
                </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe
                  </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? 'Chargement...' : 'Se connecter'}
                </button>
            </div>
          
            {/* <img src="login.svg" alt="" /> */}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link to="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Pas membre ? <span className="text-indigo-600 hover:text-indigo-500">Inscrivez-vous ici</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
