import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../helpers";

import Home from "../../../components/Home";
import { homePageTexts } from "../../../constants";

describe("Should render home page", () => {
  it("Should render texts correct", () => {
    const {
      header,
      subHeader,
      buttonText,
      usage: { header: usageHeader, steps },
    } = homePageTexts;
    renderWithProviders(<Home />);
    const texts = [header, subHeader, buttonText];
    texts.forEach((text) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("Should render Human Icon", () => {
    const { getByTestId } = renderWithProviders(<Home />);
    const humansIcon = getByTestId("humans_icon");
    expect(humansIcon).toBeInTheDocument();
  });

  it("Should render import submissions button", () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(/import submissions now/i));
  });

  // TODO: Butona basıldığında modal açılıyor mu (integration test...)
});
