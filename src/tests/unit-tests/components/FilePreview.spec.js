import { fireEvent, screen } from "@testing-library/react";
import FilePreview from "../../../components/FilePreview";
import { renderWithProviders } from "../../helpers";

describe("FilePreview unit tests", () => {
  it("renders correct file", () => {
    renderWithProviders(
      <FilePreview name={"testfilename.csv"} onRemove={jest.fn()} />
    );

    expect(screen.getByText("testfilename.csv")).toBeInTheDocument();
  });

  // TODO: removed when remove button clicked
});
