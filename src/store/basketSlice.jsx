import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  basket: []
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action) {
      const productWithQuantity = Object.assign({ quantity: parseInt(action.payload.quantity) }, action.payload.item);
      state.basket.push(productWithQuantity)
    },
    removeFromBasket(state, action) {
      state.basket.splice(current(state.basket).indexOf(action.payload), 1)
    },
    clearBasket(state, action) {
      state.basket = []
    },
  },
})

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions


