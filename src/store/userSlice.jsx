import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  firstname: null,
  lastname: null,
  email: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
      state.email = action.payload.email
    },
  },
});

export const { createUser } = userSlice.actions;


