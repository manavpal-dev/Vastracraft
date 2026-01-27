import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlics"
import productReducer  from "./slices/productSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer
     },
});

export default store;






// Component → Dispatch Action → Reducer → Store updates → UI re-renders
