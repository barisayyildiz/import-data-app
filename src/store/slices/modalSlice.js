import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    isAuthOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    openAuthModal: (state) => {
      state.isAuthOpen = true;
    },
    toggleAuthModal: (state) => {
      state.isAuthOpen = !state.isAuthOpen;
    },
    closeAuthModal: (state) => {
      state.isAuthOpen = false;
    },
  },
});

export const {
  openModal,
  toggleModal,
  closeModal,
  openAuthModal,
  toggleAuthModal,
  closeAuthModal,
} = modalSlice.actions;
export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
