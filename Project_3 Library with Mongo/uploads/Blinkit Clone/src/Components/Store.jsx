import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ItemSlice";

export const store = configureStore({
    reducer:{
        dataKey : ProductSlice,
    }
})