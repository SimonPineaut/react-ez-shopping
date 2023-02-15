import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProducts(state, action) {
    },
    productsReceived(state, action) {

    }
  },
});

export const { addToBasket, removeFromBasket } = userSlice.actions;

const fetchProductsAPI = () =>
  fetch("https://reqres.in/api/users").then((response) => response.json());

export const fetchProducts = () => async (dispatch) => {
  const response = await fetchProducts();
  dispatch(usersReceived(response.data));
};
