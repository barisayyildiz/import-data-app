import { render, screen } from "@testing-library/react";
import Heading from "../../../components/Heading";

import { createMockComponent } from "../../helpers";

describe("Should render Heading", () => {
  it("Should render correct text", () => {
    render(createMockComponent(<Heading />));

    expect(screen.getByText(/import data/i)).toBeInTheDocument();
  });

  it("Should render Jotform Icon", () => {
    render(createMockComponent(<Heading />));
    const icon = screen.getByTestId("heading_icon");
    expect(icon).toBeInTheDocument();
  });
});
