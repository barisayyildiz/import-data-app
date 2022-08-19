import { screen } from "@testing-library/react";
import FormPicker from "../../../components/FormPicker";
import { renderWithProviders } from "../../helpers";

describe("FormPicker unit tests", () => {
  it("renders skeleton", () => {
    renderWithProviders(<FormPicker />);
    expect(screen.getByTestId("form_picker_skeleton")).toBeInTheDocument();
  });

  it("renders form after api call", async () => {
    renderWithProviders(<FormPicker />);
    const node = await screen.findByText(/submissions. Updated on/i);
    expect(node).toBeInTheDocument();
  });
});
