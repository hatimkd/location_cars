// api/axiosInstance.js
import axios from 'axios';

// Create a centralized Axios instance
const api = axios.create({
  baseURL:"https://locationcarapi-production.up.railway.app/api"  , // Replace with your actual API URL 
  // baseURL:'http://192.168.1.201:8000/api', // Replace with your actual API URL 

  timeout: 5000, // Set a request timeout
  headers: {
    'Content-Type': 'application/json',

  },
}); 

// Request interceptor to attach tokens, if any
api.interceptors.request.use(
  (config) => {

    // localStorage.setItem('AUTH_TOKEN_KEY'
    // )
    const token = localStorage.getItem('AUTH_TOKEN_KEY');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (optional)
    return Promise.reject(error);
  }
);

export default api;
