import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlics";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import adminPrdouctReducer from "./slices/adminProductSlice"
import adminOrdersReducer from "./slices/adminOrderSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    orders: orderReducer,
    admin: adminReducer,
    adminProducts:adminPrdouctReducer,
    adminOrders:adminOrdersReducer
  },
});

export default store;

// Component → Dispatch Action → Reducer → Store updates → UI re-renders
