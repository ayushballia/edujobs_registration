import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verificationType: "",
};

const verificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    updateVerification: (state, action) => {
      return { ...state, ...action.payload };
    },
    setVerificationType: (state, action) => {
      state.verificationType = action.payload;
    },
  },
});

export const { updateVerification, setVerificationType } = verificationSlice.actions;

export default verificationSlice.reducer;
