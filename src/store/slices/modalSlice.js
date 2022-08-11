import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleModal, closeModal } = modalSlice.actions;
export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
