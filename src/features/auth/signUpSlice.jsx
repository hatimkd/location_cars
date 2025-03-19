import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';
// import api from '../api';

// Async thunk to handle sign-up
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/users/register/', formData);
      window.location.href = "/login"
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const signUpSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    resetMessages(state) {
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
        state.successMessage = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.successMessage = 'Sign up successful!';
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload?.message || 'Sign up failed!';
      });
  },
});

export const { resetMessages } = signUpSlice.actions;
export default signUpSlice.reducer;
