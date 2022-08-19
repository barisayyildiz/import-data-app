import { screen, fireEvent, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FORMS_PER_SCROLL } from "../../../constants";
import FormSelector from "../../../components/FormSelector";
import { renderWithProviders } from "../../helpers";

describe("FormsSelector test cases", () => {
  it("input field rendered", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
      form: {
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
        selectedForm: null,
      },
    };
    const { store } = renderWithProviders(<FormSelector />, {
      preloadedState: initialState,
    });
    const cancelBtn = screen.getByTestId("modal_cancel");
    fireEvent.click(cancelBtn);
    expect(store.getState().modal.isOpen).toBe(false);
  });

  it("spinner is loaded initially", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
    };
    renderWithProviders(<FormSelector />, {
      preloadedState: initialState,
    });

    expect(screen.getByTestId("scroll_loader")).toBeInTheDocument();
  });

  // FIXME: forms are not found
  it.skip("right amount of form is fetched first scroll", async () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
    };

    const forms = await screen.findAllByText(/submissions. Updated on/i);
    expect(forms.length).toBeLessThanOrEqual(FORMS_PER_SCROLL);
  });

  // TODO: filtering works correctly
  it.todo("filtering works correctly");
});
