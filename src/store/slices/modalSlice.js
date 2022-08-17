import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    isAuthOpen: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleAuthModal: (state) => {
      state.isAuthOpen = !state.isAuthOpen;
    },
    closeAuthModal: (state) => {
      state.isAuthOpen = false;
    },
  },
});

export const { toggleModal, closeModal, toggleAuthModal, closeAuthModal } =
  modalSlice.actions;
export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
