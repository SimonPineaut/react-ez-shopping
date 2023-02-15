import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: []
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action) {
    },
    removeProduct(state, action) {
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;


