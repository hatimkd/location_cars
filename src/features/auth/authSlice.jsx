// src/features/auth/loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api'; // Assure-toi que l'API est correctement configurée ici

// Thunk pour gérer la requête de connexion
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/token/', formData);
      const token = response.data.access;
      localStorage.setItem('AUTH_TOKEN_KEY', token);

      window.location.href = "/users/profile"
      return token;
    } catch (error) {
      return rejectWithValue(error.response?.data?.detail || 'Erreur lors de la connexion');
    }
  }
);

const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('AUTH_TOKEN_KEY');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
