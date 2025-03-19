// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import carRentalReducer from '../features/Cars/CarsSlice';
import  userReducer from '../features/Users/UserSlice';

import signUpReducer from '../features/auth/signUpSlice';
import     loginReducer from '../features/auth/authSlice';





export const store = configureStore({
  reducer: {
    carRental: carRentalReducer,
    user: userReducer,



    auth: signUpReducer,


    login: loginReducer, // Ajout du loginReducer

  },
});


export default store;
