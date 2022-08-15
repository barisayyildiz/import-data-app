import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { render, screen, fireEvent } from "@testing-library/react";
import FormSelector from "../../../components/FormSelector";

import { createMockComponent } from "../../helpers";

const mockStore = configureStore();

describe("FormsSelector test cases", () => {
  it("test", () => {
    expect(1).toBe(1);
  });
  it("input field rendered", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
      form: {
        allForms: [],
        selectedForm: null,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <FormSelector />
      </Provider>
    );
    const inputField = screen.getByPlaceholderText(/search in forms/i);
    expect(inputField).toBeInTheDocument();
  });

  it("input field has the correct value", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
      form: {
        allForms: [],
        selectedForm: null,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <FormSelector />
      </Provider>
    );
    const inputField = screen.getByPlaceholderText(/search in forms/i);
    fireEvent.change(inputField, { target: { value: "testing..." } });
    expect(inputField.value).toBe("testing...");
  });
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
