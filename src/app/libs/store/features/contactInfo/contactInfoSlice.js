import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  selectedType: null,
  password: "",
  cpassword: "",
  mobile: "",
  selectedGender: null,
  terms: false,
  updates: false,
};

const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    updateContactInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSelectedGender: (state, action) => {
      state.selectedGender = action.payload;
    },
    setTerms: (state, action) => {
      state.terms = action.payload;
    },
    setUpdates: (state, action) => {
      state.updates = action.payload;
    },
  },
});

export const { updateContactInfo, setSelectedType, setSelectedGender, setTerms, setUpdates } =
  contactInfoSlice.actions;

export default contactInfoSlice.reducer;
