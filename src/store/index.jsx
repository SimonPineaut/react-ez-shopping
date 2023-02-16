import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { userSlice } from "./userSlice";
import { basketSlice } from "./basketSlice";
import logger from '../middleware//middleware'

// Export des actions
const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        user: userSlice.reducer,
        basket: basketSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

// pour contextualiser le store dans l'arbre React
export default store;