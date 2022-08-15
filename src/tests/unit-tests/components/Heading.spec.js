import { render, screen } from "@testing-library/react";
import Heading from "../../../components/Heading";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducers } from "../../../store";
import { renderWithProviders } from "../../helpers";

describe("Should render Heading", () => {
  it("test", () => {
    // // with initial state
    // const { store } = renderWithProviders(<Heading />, {
    //   preloadedState: { modal: { isOpen: true } },
    // });
    const { store } = renderWithProviders(<Heading />);
    console.log(store.getState());
    console.log(
      store.dispatch({
        type: "modal/toggleModal",
      })
    );
    console.log(store.getState());
    expect(screen.getByText(/import data/i)).toBeInTheDocument();
  });

  it("Should render correct text", () => {
    renderWithProviders(<Heading />);

    expect(screen.getByText(/import data/i)).toBeInTheDocument();
  });

  it("Should render Jotform Icon", () => {
    renderWithProviders(<Heading />);
    const icon = screen.getByTestId("heading_icon");
    expect(icon).toBeInTheDocument();
  });
});
