import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../helpers";

import App from "../../components/App";

describe("Integration tests", () => {
  it("modal is opened when import submission button is clicked", () => {
    renderWithProviders(<App />);

    expect(screen.queryByText("Select Forms")).toBeNull();
    const btn = screen.getByTestId("import_submissions_button");
    fireEvent.click(btn);
    expect(screen.getByText("Select Forms")).toBeInTheDocument();
  });

  it("modal is closed when cancel button is clicked", () => {
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

  it("modal is closed when close button is clicked", () => {
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

  // TODO: when users selects a form on modal, user gets redirected to /import
});
