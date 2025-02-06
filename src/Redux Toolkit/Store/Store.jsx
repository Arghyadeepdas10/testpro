import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Slice/AuthSlice"
import CartReducer from "../Slice/CartSlice"

export const Store = configureStore({
    reducer:{
        auth: AuthReducer,
        cart: CartReducer,
    }
})