import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    allForms: [],
    selectedFormId: null,
  },
  reducers: {
    setSelectedForm: (state, action) => {
      state.selectedFormId = action.payload;
    },
    setAllForms: (state, action) => {
      state.allForms = action.payload;
    },
  },
});

export const { setSelectedForm, setAllForms } = formSlice.actions;
export const selectForm = (state) => state.form;

export default formSlice.reducer;
