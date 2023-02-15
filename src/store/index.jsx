import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { userSlice } from "./userSlice";
import { basketSlice } from "./basketSlice";

// Export des actions
const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        user: userSlice.reducer,
        basket: basketSlice.reducer,
    },
});

// pour contextualiser le store dans l'arbre React
export default store;