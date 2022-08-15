import { render, screen, within } from "@testing-library/react";
import Footer from "../../../components/Footer";
import { companyInfo } from "../../../constants";

import { createMockComponent } from "../../helpers";

describe("Should render Footer", () => {
  it.todo("test");
  // it("Should render company information", () => {
  //   const { name, location } = companyInfo;
  //   render(createMockComponent(<Footer />));

  //   expect(screen.getByText(name)).toBeInTheDocument();
  //   expect(screen.getByText(location)).toBeInTheDocument();
  // });

  // it("Should render icons", () => {
  //   render(createMockComponent(<Footer />));
  //   const icons = screen.getByTestId("footer_icons");
  //   expect(icons).toBeInTheDocument();
  //   expect(icons.childElementCount).toBeGreaterThan(0);
  // });
});
