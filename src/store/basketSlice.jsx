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
      state.basket.push(action.payload)
    },
    removeFromBasket(state, action) {
      console.log(state.basket.indexOf(action.payload));
      state.basket.splice(state.basket.indexOf(action.payload), 1)
    },
    clearBasket(state, action) {
      state.basket = []
    }
  },
})

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions


