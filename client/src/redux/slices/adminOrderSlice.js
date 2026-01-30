import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;

// Async Thunk to fetch all orders
export const fetchAllOrders = createAsyncThunk(
  "adminOrder/fetchAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL}/api/admin/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async Thunk to update order status
export const updateOrderStatus = createAsyncThunk(
  "adminOrder/updateOrderStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${URL}/api/admin/orders/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async Thunk to delete order
export const deleteOrder = createAsyncThunk(
  "adminOrder/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${URL}/api/admin/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// create Slice
const adminOrderSlice = createSlice({
    name: "adminOrders",
    initialState:{
        orders: [],
        totalOrders:0,
        totalSales:0,
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // Fetch all orders
       .addCase(fetchAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllOrders.fulfilled, (state,action)=>{
        state.loading = false;
        state.orders = action.payload;
        state.totalOrders = action.payload.length;

        // calculate total sales
        const totalSales = action.payload.reduce((acc,order)=>{
            return acc + order.totalPrice;
        },0);
        state.totalSales = totalSales;
      })
     .addCase(fetchAllOrders.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload.message;
      })  
      // upate Order Status
      .addCase(updateOrderStatus.fulfilled, (state,action)=>{
        const updateOrder = action.payload;
        const orderIndex = state.orders.findIndex((order)=> order._id === updateOrder._id);
        if(orderIndex !== -1){
            state.orders[orderIndex] = updateOrder;
        }
      })
      // Delete Order
      .addCase(deleteOrder.fulfilled, (state,action)=>{
        state.orders = state.orders.filter((order)=>order._id !== action.payload);
      })
    }
});

export default adminOrderSlice.reducer;
