import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    selectedFormId: null,
  },
  reducers: {
    setSelectedForm: (state, action) => {
      state.selectedFormId = action.payload;
    },
  },
});

export const { setSelectedForm } = formSlice.actions;
export const selectForm = (state) => state.form;

export default formSlice.reducer;
