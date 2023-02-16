import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  basket: []
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.basket.push(action.payload)
    },
    removeFromBasket(state, action) {
      state.basket.filter((product) =>
        product.id !== action.payload.id
      )

    },
    clearBasket(state, action) {
      state.basket = []
    }
  },
})

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions


