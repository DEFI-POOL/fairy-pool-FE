import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  web3: null,
};

export const web3Slice = createSlice({
  name: "web3",
  initialState,
  reducers: {
    web3Set: (state, action) => {
      state.web3 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { web3Set } = web3Slice.actions;

export default web3Slice.reducer;
