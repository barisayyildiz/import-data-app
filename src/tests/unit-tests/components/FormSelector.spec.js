import configureStore from "redux-mock-store";
import { screen, fireEvent } from "@testing-library/react";

import FormSelector from "../../../components/FormSelector";
import { renderWithProviders } from "../../helpers";

describe("FormsSelector test cases", () => {
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
    renderWithProviders(<FormSelector />, {
      preloadedState: initialState,
    });
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
    renderWithProviders(<FormSelector />, {
      preloadedState: initialState,
    });
    const inputField = screen.getByPlaceholderText(/search in forms/i);
    fireEvent.change(inputField, { target: { value: "testing..." } });
    expect(inputField.value).toBe("testing...");
  });

  it("modal is closed when close button is clicked", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
      form: {
        allForms: [],
        selectedForm: null,
      },
    };
    const { store } = renderWithProviders(<FormSelector />, {
      preloadedState: initialState,
    });
    const cancelBtn = screen.getByText(/cancel/i);
    fireEvent.click(cancelBtn);
    expect(store.getState().modal.isOpen).toBe(false);
  });
});
