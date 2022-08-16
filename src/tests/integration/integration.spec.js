import { screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../helpers";

import App from "../../components/App";
import ImportPage from "../../pages/ImportPage";

describe("Integration tests", () => {
  it("modal gets opened when import submission button is clicked", () => {
    renderWithProviders(<App />);

    expect(screen.queryByText("Select Forms")).toBeNull();
    const btn = screen.getByTestId("import_submissions_button");
    fireEvent.click(btn);
    expect(screen.getByText("Select Forms")).toBeInTheDocument();
  });

  it.skip("modal gets closed when cancel button is clicked", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
    };
    renderWithProviders(<App />, {
      preloadedState: initialState,
    });

    const btn = screen.getByTestId("modal_cancel");
    fireEvent.click(btn);
    expect(screen.findByText("Select Forms")).toBeNull();
  });

  it.skip("modal get closed when close button is clicked", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
    };
    renderWithProviders(<App />, {
      preloadedState: initialState,
    });

    const btn = screen.getByTestId("modal_close");
    fireEvent.click(btn);
    expect(screen.findByText("Select Forms")).toBeNull();
  });

  it("file input component removed and file preview component added in page after file upload", async () => {
    const initialState = {
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
        ],
        selectedFormId: "#1",
      },
    };

    renderWithProviders(<ImportPage />, {
      preloadedState: initialState,
    });

    expect(screen.getByTestId("file_input")).toBeInTheDocument();

    // upload file
    const file = new File(["test_test_test"], "test.xls");
    let uploader = screen.getByTestId("file_input");

    await waitFor(() => {
      fireEvent.change(uploader, {
        target: { files: [file] },
      });
    });

    expect(screen.queryByTestId("file_input")).toBeNull();
    expect(screen.getByTestId("file_preview")).toBeInTheDocument();
  });

  it("continue button is initially disabled", () => {
    const initialState = {
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
        ],
        selectedFormId: "#1",
      },
    };

    renderWithProviders(<ImportPage />, {
      preloadedState: initialState,
    });

    expect(
      screen.getByText("Continue").closest("button").disabled
    ).toBeTruthy();
  });

  it("file removed when BACK button is clicked after file upload", async () => {
    const initialState = {
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
        ],
        selectedFormId: "#1",
      },
    };

    renderWithProviders(<ImportPage />, {
      preloadedState: initialState,
    });

    expect(screen.getByTestId("file_input")).toBeInTheDocument();

    // upload file
    const file = new File(["test_test_test"], "test.xls");
    let uploader = screen.getByTestId("file_input");

    await waitFor(() => {
      fireEvent.change(uploader, {
        target: { files: [file] },
      });
    });

    const backBtn = screen.getByText(/back/i);
    fireEvent.click(backBtn);

    expect(screen.queryByTestId("file_preview")).toBeNull();
  });

  // FIXME: can't find validation errors
  it.skip("matching form component, form validation", async () => {
    const initialState = {
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
        ],
        selectedFormId: "#1",
      },
    };

    renderWithProviders(<ImportPage />, {
      preloadedState: initialState,
    });

    expect(screen.getByTestId("file_input")).toBeInTheDocument();

    // upload file
    const file = new File(["test_test_test"], "test.xls");
    let uploader = screen.getByTestId("file_input");

    await waitFor(() => {
      fireEvent.change(uploader, {
        target: { files: [file] },
      });
    });

    await waitFor(() => {
      expect(document.querySelectorAll("label").length).toBeGreaterThan(0);
    });

    fireEvent.click(screen.getByText("Continue"));
    expect(screen.getByText(/should be selected/i)).toBeInTheDocument();
  });

  it.todo("user redirected to '/success' page if form is valid");

  it.todo(
    "user redirected to '/' when BACK button is clicked before file upload"
  );

  it.todo(
    "user redirected to '/import' when a form in selected and continue button pressed on modal"
  );

  it.todo("modal gets opened when users clicks on 'change form' button");
});
