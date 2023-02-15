import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productsReceived(state, action) {

    }
  },
});

export const { productsReceived } = userSlice.actions;

// const fetchProductsAPI = () => {
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((response) => { console.log(response) });
// }

// const fetchProducts = () => async (dispatch) => {
//   const response = await fetchProductsAPI();
//   dispatch(response);
// };
