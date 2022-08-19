import { screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../helpers";

import { setCookie, getCookie } from "../../utils";

import App from "../../components/App";
import ImportPage from "../../pages/ImportPage";

describe("Integration tests", () => {
  it("auth modal gets opened when import submission button is clicked", () => {
    renderWithProviders(<App />);

    expect(screen.queryByTestId("auth_iframe")).toBeNull();
    const btn = screen.getByTestId("import_submissions_button");
    fireEvent.click(btn);
    expect(screen.queryByTestId("auth_iframe")).toBeInTheDocument();
  });

  it("form modal gets opened when import submission button is clicked", () => {
    const { store } = renderWithProviders(<App />);

    setCookie("apiKey", "mock");

    expect(screen.queryByText(/select forms/i)).toBeNull();
    const btn = screen.getByTestId("import_submissions_button");
    fireEvent.click(btn);
    expect(screen.getByText(/select forms/i)).toBeInTheDocument();
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

  it("user redirected to '/' when BACK button is clicked before file upload", async () => {
    const initialState = {
      form: {
        selectedFormId: "#1",
      },
    };

    renderWithProviders(<ImportPage />, {
      preloadedState: initialState,
    });

    const backBtn = screen.getByText(/back/i);
    fireEvent.click(backBtn);
    expect(window.location.pathname).toBe("/");
  });

  // FIXME: form seçildikten sonra /import'a yönlendirilmiyor
  it.skip("user redirected to '/import' when a form in selected and continue button pressed on modal", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
      form: {
        selectedFormId: null,
      },
    };
    const { store } = renderWithProviders(<App />, {
      preloadedState: initialState,
    });

    const list = screen.getAllByText(/updated on/i);
    fireEvent.click(list[0]);
    const doneBtn = screen.getByText(/done/i);
    fireEvent.click(doneBtn);
    console.log(store.getState());
    expect(window.location.pathname).toBe("/import");
  });

  it.todo("modal gets opened when users clicks on 'change form' button");

  it.todo("user redirected to '/success' page if form is valid");
});
