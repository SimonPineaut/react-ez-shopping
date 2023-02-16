import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productsReceived(state, action) {
      state.products = action.payload;
    },
  }
});

export const { productsLoading, productsReceived } = productSlice.actions;

const fetchProductsAPI = () =>
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .catch(function (error) {
      return error;
    })

export const fetchProducts = () => async (dispatch) => {
  const response = await fetchProductsAPI();
  dispatch(productsReceived(response));
};