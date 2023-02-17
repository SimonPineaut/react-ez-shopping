import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { userSlice } from "./userSlice";
import { basketSlice } from "./basketSlice";
import logger from '../middleware//middleware'

const local = () => {
    if (localStorage.getItem('user') === null) {
        return {
            user: {
                firstname: null,
                lastname: null,
                email: null
            }
        }
    }
    const user = JSON.parse(localStorage.getItem('user'))
    return { user }
}

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        user: userSlice.reducer,
        basket: basketSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState: local()
});

export default store;
