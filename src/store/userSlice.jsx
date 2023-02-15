import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
    },
    updateUser(state, action) {
    },
  },
});

export const { cretateUser, updateUser } = userSlice.actions;


