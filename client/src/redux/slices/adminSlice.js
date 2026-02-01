import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getAuthConfig from "../utils/axiosConfig";

// Async Thunk to fetch all admin user
export const fetchAdminUser = createAsyncThunk(
  "admin/fetchAdminUser",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
      getAuthConfig(),
    );
    return response.data;
  },
);

// Async Thunk to create admin user
export const addUser = createAsyncThunk(
  "admin/addUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
        userData,
        getAuthConfig(),
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async Thunk for update user info

export const updateUser = createAsyncThunk(
  "admin/updateUser",
  async ({ id, name, email, role }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
        {
          name,
          email,
          role,
        },
        getAuthConfig(),
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async Thunk for deleting the user
export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
        getAuthConfig(),
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// create Slice
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchAdminUser
      .addCase(fetchAdminUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //updateUser
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const userIndex = state.users.findIndex(
          (user) => user._id === updatedUser._id,
        );
        if (userIndex !== -1) {
          state.users[userIndex] = updatedUser;
        }
      })
      // deleteUser
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      })
      //addUser
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;

        const newUser = action.payload.user || action.payload;
        state.users.push(newUser);
      })

      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default adminSlice.reducer;
