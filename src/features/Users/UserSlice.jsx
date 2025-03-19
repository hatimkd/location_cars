import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// Thunk for fetching user details
export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users/user-details/");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching user information"
      );
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (username ) => {
    const response = await api.delete(`/users/${username}/delete/`);
    return response.data;
  }
);

export const makeAdmin = createAsyncThunk(
  "users/makeAdmin",
  async (username) => {
    const response = await api.put(`/users/${username}/make_admin/`);
    return response.data;
  }
);

// Redux slice for user state management
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null, // Initialize as null to handle object data
    isLoading: false, // Indicates loading state
    errorMessage: null, // Stores error messages if API call fails
 
 


    deleteSuccessMessage: null, // Message when a user is successfully deleted
    makeAdminSuccessMessage: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending state (loading)
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null; // Reset error message when loading starts
    });

    // Handle fulfilled state (success)
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload || null; // Store user information
    });

    // Handle rejected state (error)
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload; // Store error message
    });
     // Delete user
     builder
     .addCase(deleteUser.pending, (state) => {
       state.isLoading = true;
       state.errorMessage = null;
       state.deleteSuccessMessage = null;
     })
     .addCase(deleteUser.fulfilled, (state, action) => {
       state.isLoading = false;
       state.deleteSuccessMessage = action.payload.message;
     })
     .addCase(deleteUser.rejected, (state, action) => {
       state.isLoading = false;
       state.errorMessage = action.payload;
     });

   // Make admin
   builder
     .addCase(makeAdmin.pending, (state) => {
       state.isLoading = true;
       state.errorMessage = null;
       state.makeAdminSuccessMessage = null;
     })
     .addCase(makeAdmin.fulfilled, (state, action) => {
       state.isLoading = false;
       state.makeAdminSuccessMessage = action.payload.message;
     })
     .addCase(makeAdmin.rejected, (state, action) => {
       state.isLoading = false;
       state.errorMessage = action.payload;
     });
  },
});

export default userSlice.reducer;
