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
    const cancelBtn = screen.getByTestId("modal_cancel");
    fireEvent.click(cancelBtn);
    expect(store.getState().modal.isOpen).toBe(false);
  });

  // FIXME: debounce dan kaynaklı bir sorun var
  it.skip("filtering works correctly", async () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
      form: {
        allForms: [
          {
            id: "#1",
            title: "hazard detection",
            updated_at: "2022-08-09 02:43:54",
            count: "12",
            url: "https://",
          },
          {
            id: "#2",
            title: "save transaction",
            updated_at: "2022-08-09 02:43:54",
            count: "12",
            url: "https://",
          },
          {
            id: "#3",
            title: "buy concert tickets",
            updated_at: "2022-08-09 02:43:54",
            count: "12",
            url: "https://",
          },
        ],
        selectedFormId: null,
      },
    };
    const { store } = renderWithProviders(<FormSelector />, {
      preloadedState: initialState,
    });

    let formList = screen.getAllByText(/updated on/i);
    const inputField = screen.getByPlaceholderText(/search in forms/i);

    expect(formList.length).toBe(3);

    // fireEvent.change(inputField, { target: { value: "save" } });

    await waitFor(() => {
      userEvent.paste(inputField, "save");
    });

    console.log(inputField.value);

    formList = await screen.findAllByText(/updated on/i);

    expect(formList.length).toBe(1);
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
});
