import { render, screen, within } from "@testing-library/react";
import Footer from "../../../components/Footer";
import { companyInfo } from "../../../constants";

import { renderWithProviders } from "../../helpers";

describe("Should render Footer", () => {
  it("Should render company information", () => {
    const { name, location } = companyInfo;
    renderWithProviders(<Footer />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
  });

  it("Should render icons", () => {
    renderWithProviders(<Footer />);
    const icons = screen.getByTestId("footer_icons");
    expect(icons).toBeInTheDocument();
    expect(icons.childElementCount).toBeGreaterThan(0);
  });
});
