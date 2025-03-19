// src/features/carRental/carRentalSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchCars = createAsyncThunk(
  "carRental/fetchCars",
  async ({ page = 1, brand = "", model = "" }, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `/cars/?page=${page}&brand=${brand}&model=${model}`
      ); // Inclure la page dans la requête API
      return {
        results: response.data.results, // Les voitures
        pagination: {
          next: response.data.next,
          previous: response.data.previous,
          currentPage: page,
        },
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching cars");
    }
  }
);

// export const fetchCars = createAsyncThunk(
//   'carRental/fetchCars',
//   async ({ page = 1, brand = '', model = '' } = {}, { rejectWithValue }) => {
//     try {
//       // Construire l'URL avec les filtres seulement s'ils ne sont pas vides
//       let url = `/cars/?page=${page}`;

//       // if (brand) {
//       //   url += `&brand=${brand}`;
//       // }

//       // if (model) {
//       //   url += `&model=${model}`;
//       // }

//       const response = await api.get(url);

//       return {
//         results: response.data.results, // Les voitures récupérées
//         pagination: {
//           next: response.data.next,
//           previous: response.data.previous,
//           currentPage: page,
//         },
//       };
//     } catch (error) {
//       // Gestion des erreurs en renvoyant un message d'erreur
//       return rejectWithValue(error.response?.data || 'Error fetching cars');
//     }
//   }
// );

// // export const fetchCars = createAsyncThunk(
// //   "carRental/fetchCars",
// //   async ({ page = 1, filters = {} }, { rejectWithValue }) => {
// //     try {
// //       // Construire l'URL avec les paramètres de filtrage
// //       let filterQuery = `page=${page}`;
// //       if (filters.brand) filterQuery += `&brand=${filters.brand}`;
// //       if (filters.model) filterQuery += `&model=${filters.model}`;
// //       // Vous pouvez ajouter d'autres filtres si nécessaire

// //       const response = await api.get(`/cars/?${filterQuery}`);
// //       return {
// //         results: response.data.results, // Les voitures
//         pagination: {
//           next: response.data.next,
//           previous: response.data.previous,
//           currentPage: page,
//         },
//       };
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Error fetching cars");
//     }
//   }
// );

// Update the addCars thunk to handle file uploads
export const addCars = createAsyncThunk(
  "carRental/addCars",
  async (carData, { rejectWithValue }) => {
    try {
      // Create a FormData object
      const formData = new FormData();
      for (const key in carData) {
        formData.append(key, carData[key]);
      }

      const response = await api.post("/cars/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error adding car");
    }
  }
);

// export const fetchRentals = createAsyncThunk(
//   "carRental/fetchRentals",
//   async (_,{ rejectWithValue }) => {
//     try {
//       const response = await api.get(`/rentals/`);
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Error fetching rentals");
//     }
//   }
// );

export const fetchRentals = createAsyncThunk(
  "carRental/fetchRentals",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/rentals/?page=${page}`);
      return response.data; // Ceci inclut les données de pagination : count, next, previous, results
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching rentals");
    }
  }
);

// Add a new rental
export const addRentals = createAsyncThunk(
  "carRental/addRentals",
  async (rentalData, { rejectWithValue }) => {
    try {
      const response = await api.post("/rentals/", rentalData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error adding rental");
    }
  }
);
// Thunk for deleting a car
export const deleteCar = createAsyncThunk(
  "carRental/deleteCar",
  async (carId, { rejectWithValue }) => {
    try {
      await api.delete(`/cars/${carId}/`);
      return carId;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error deleting car");
    }
  }
);
export const fetchContrat = createAsyncThunk(
  "carRental/fetchContrat",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/pdf-contracts/?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching users");
    }
  }
);
export const fetchUsers = createAsyncThunk(
  "carRental/fetchUsers",
  async (ur, { rejectWithValue }) => {
    try {
      const response = await api.get(ur);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching users");
    }
  }
); // Update the validity of a rental
export const updateRentalValidity = createAsyncThunk(
  "carRental/updateRentalValidity",
  async (rentalId, { rejectWithValue }) => {
    try {
      const response = await api.put(`/rentals/${rentalId}/`, {
        is_valid_admin: true,
      });
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error updating rental validity"
      );
    }
  }
);
// Async thunk for uploading a contract
export const uploadContract = createAsyncThunk(
  "carRental/uploadContract",
  async ({ rental, file }, { rejectWithValue }) => {
    console.log(rental );
    
    const formData = new FormData();

    formData.append("file", file); // Assurez-vous que 'file' est bien un objet File
    formData.append("rental", rental); // Assurez-vous que rentalId est un nombre ou une chaîne

    try {
      const response = await api.post("/upload-pdf/", formData, {
        headers: {
          // "Content-Type": "multipart/form-data", // Assurez-vous de garder ce type
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data; // Return the response data
    } catch (error) {
      console.error("Upload error: ", error); // Pour déboguer les erreurs
      return rejectWithValue(
        error.response?.data || "Error uploading contract"
      ); // Handle error
    }
  }
);
// Redux slice
const carRentalSlice = createSlice({
  name: "carRental",
  initialState: {
    cars: { result: [] },
    rentals: [],
    users: [],
    previousPage: null,
    nextPage: null,
    loading: false,
    // pagination: {},

    pagination: {
      next: null,
      previous: null,
      currentPage: 1,
      totalPages: 1,
    },
    contrats: [],
    error: null,

    uploadError: null,
    updateError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContrat.pending, (state) => {
      state.loading = true; // Mettre l'état de chargement à true
      state.error = null; // Réinitialiser l'erreur
    });
    builder.addCase(fetchContrat.fulfilled, (state, action) => {
      state.loading = false; // Mettre l'état de chargement à false
      state.contrats = action.payload; // Stocker les contrats récupérés
    });
    builder.addCase(fetchContrat.rejected, (state, action) => {
      state.loading = false; // Mettre l'état de chargement à false
      state.error = action.payload; // Stocker le message d'erreur
    });
    builder.addCase(uploadContract.pending, (state) => {
      state.loading = true;
      state.uploadError = null; // Reset upload error
    });
    builder.addCase(uploadContract.fulfilled, (state, action) => {
      state.loading = false;
      // Handle success, for example, update the rental list or show a success message
      console.log("Upload successful:", action.payload);
    });
    builder.addCase(uploadContract.rejected, (state, action) => {
      state.loading = false;
      state.uploadError = action.payload; // Set upload error message
    });
    builder.addCase(updateRentalValidity.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateRentalValidity.fulfilled, (state, action) => {
      state.loading = false;

      console.log(action.payload); // Get the updated rental from the action payload
      // const index = state.rentals.findIndex(rental => rental.id == id);
     
    });

    builder.addCase(updateRentalValidity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Handle car fetching
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.loading = false;
      state.cars = action.payload.results; // Les résultats sont dans "results" avec la pagination
      console.log("pp", action.payload);

      state.pagination = {
        next: action.payload.pagination.next,
        previous: action.payload.pagination.previous,
        currentPage: action.payload.pagination.currentPage,
        // totalPages: Math.ceil(action.payload.count / 6), // Supposons que vous avez 10 résultats par page
        // Ajouter la pagination ici

        totalPages: action.payload.count
          ? Math.ceil(action.payload.count / 6) // Supposons qu'il y a 6 résultats par page
          : 1, // Par défaut, au moins une page

        // totalPages: action.payload.pagination.totalPages,
      };
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handle car adding
    builder.addCase(addCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCars.fulfilled, (state, action) => {
      state.loading = false;
      state.cars.push(action.payload); // Add the new car to the list
    });
    builder.addCase(addCars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handle rental fetching
    builder.addCase(addRentals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addRentals.fulfilled, (state, action) => {
      state.loading = false;

      state.rentals.push(action.payload);
    });
    builder.addCase(addRentals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Handle rental fetching
    builder.addCase(fetchRentals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRentals.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);

      state.rentals = action.payload;

      // Extract pagination details
      state.pagination = {
        next: action.payload.next, // Use the correct value from API response
        previous: action.payload.previous, // Use the correct value from API response
        currentPage: action.meta.arg.page, // Get the current page from the payload
        totalPages: Math.ceil(action.payload.count / 8), // Assuming 10 results per page
      };
    });
    builder.addCase(fetchRentals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handle user fetching
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.nextPage = action.payload.next;
      state.previousPage = action.payload.previous;
    });
    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   state.loading = false;
    //   // state.users = action.payload;

    // });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handle car deletion
    builder.addCase(deleteCar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCar.fulfilled, (state, action) => {
      state.loading = false;
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    });
    builder.addCase(deleteCar.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default carRentalSlice.reducer;
