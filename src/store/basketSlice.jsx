import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  quantity: 0
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action) {
      console.log('action ds SLICE', action);
      state.basket = action.payload;
    },
    removeFromBasket(state, action) {
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;


