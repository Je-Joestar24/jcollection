import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import uiReducer from "./uiSlice";
import productReducer from "./productSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uiReducer,
        product: productReducer,
    },
});
