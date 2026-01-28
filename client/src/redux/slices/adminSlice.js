import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to fetch all admin user
export const fetchAdminUser = createAsyncThunk(
  "admin/fetchAdminUser",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      },
    );
    response.data;
  });
