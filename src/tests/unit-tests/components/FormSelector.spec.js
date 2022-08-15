import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { render, screen, fireEvent } from "@testing-library/react";
import FormSelector from "../../../components/FormSelector";

import { createMockComponent } from "../../helpers";

const mockStore = configureStore();

describe("FormsSelector test cases", () => {
  it.todo("test");

  // it("input field rendered", () => {
  //   const initialState = {
  //     modal: {
  //       isOpen: true,
  //     },
  //     form: {
  //       allForms: [],
  //       selectedForm: null,
  //     },
  //   };
  //   const store = mockStore(initialState);
  //   render(
  //     <Provider store={store}>
  //       <FormSelector />
  //     </Provider>
  //   );
  //   const inputField = screen.getByPlaceholderText(/search in forms/i);
  //   expect(inputField).toBeInTheDocument();
  // });

  // it("input field has the correct value", () => {
  //   const initialState = {
  //     modal: {
  //       isOpen: true,
  //     },
  //     form: {
  //       allForms: [],
  //       selectedForm: null,
  //     },
  //   };
  //   const store = mockStore(initialState);
  //   render(
  //     <Provider store={store}>
  //       <FormSelector />
  //     </Provider>
  //   );
  //   const inputField = screen.getByPlaceholderText(/search in forms/i);
  //   fireEvent.change(inputField, { target: { value: "testing..." } });
  //   expect(inputField.value).toBe("testing...");
  // });

  // it("modal is closed when close button is clicked", () => {
  //   const initialState = {
  //     modal: {
  //       isOpen: true,
  //     },
  //     form: {
  //       allForms: [],
  //       selectedForm: null,
  //     },
  //   };
  //   const store = mockStore(initialState);
  //   render(
  //     <Provider store={store}>
  //       <FormSelector />
  //     </Provider>
  //   );

  //   console.log(store.getState());
  //   const cancelBtn = screen.getByText(/cancel/i);
  //   store.dispatch({
  //     type: "modal/closeModal",
  //   });
  //   fireEvent.click(cancelBtn);
  //   console.log(store.getState());
  //   // expect(screen.getByText(/Please select one of your forms to continue/i)).not.toBeInTheDocument()
  // });
});

// describe("FormsSelector test cases", () => {
//   it("input field has the correct value", () => {
//     const initialState = {
//       modal: {
//         isOpen: true,
//       },
//       form: {
//         allForms: [],
//         selectedForm: null,
//       },
//     };
//     render(createMockComponent(<FormSelector />, initialState));
//     const inputField = screen.findByPlaceholderText(/search in forms/i);
//     console.log(inputField);
//   });
// });
