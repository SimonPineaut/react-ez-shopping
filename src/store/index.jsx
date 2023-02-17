import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { userSlice } from "./userSlice";
import { basketSlice } from "./basketSlice";
import logger from '../middleware//middleware'

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        user: userSlice.reducer,
        basket: basketSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // preloadedState: {
    //     user: JSON.parse(localStorage.getItem('user'))
    // }
});

export default store;