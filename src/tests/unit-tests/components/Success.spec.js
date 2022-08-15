import { screen } from "@testing-library/react";
import SuccessPage from "../../../pages/SuccessPage";
import { renderWithProviders } from "../../helpers";

describe("Success page unit tests", () => {
  it("renders correct text", () => {
    renderWithProviders(<SuccessPage />);
    expect(screen.getByText("Imported Successfully!"));
    expect(screen.getByText(/import more data/i));
    expect(screen.getByText(/go to jotform tables/i));
  });

  // TODO: Butonlar test edilecek
});
