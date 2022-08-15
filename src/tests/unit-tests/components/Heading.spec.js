import { screen } from "@testing-library/react";
import Heading from "../../../components/Heading";

import { renderWithProviders } from "../../helpers";

describe("Should render Heading", () => {
  it("test", () => {
    const { store } = renderWithProviders(<Heading />);
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
