const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedInstitutionType: [],
  selectedSchoolName: [],
  schoolBoard: "",
  website: "",
  address: ""
};

const institutionDetailsSlice = createSlice({
  name: "institutionDetails",
  initialState,
  reducers: {
    updateInstitutionDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    setSelectedInstitutionType: (state, action) => {
      state.selectedInstitutionType = action.payload;
    },
    setSelectedSchoolName: (state, action) => {
      state.selectedSchoolName = action.payload;
    },
    setSchoolBoard: (state, action) => {
      state.schoolBoard = action.payload;
    },
  },
});

export const {
  updateInstitutionDetails,
  setSelectedInstitutionType,
  setSelectedSchoolName,
  setSchoolBoard
} = institutionDetailsSlice.actions;

export default institutionDetailsSlice.reducer;
