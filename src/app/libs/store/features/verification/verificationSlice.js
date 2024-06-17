import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const verificationSlice = createSlice({
  name: "verification",
  reducers: {
    updateVerification: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
    updateVerification
} = verificationSlice.actions

export default verificationSlice.reducer