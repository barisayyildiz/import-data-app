import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import modalReducer from "./slices/modalSlice";

export default configureStore({
  reducer: {
    form: formReducer,
    modal: modalReducer,
  },
});
