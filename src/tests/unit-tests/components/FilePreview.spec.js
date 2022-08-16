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

  it("onRemove called when delete button is clicked", () => {
    const onRemoveMock = jest.fn();
    renderWithProviders(
      <FilePreview name={"testfilename.csv"} onRemove={onRemoveMock} />
    );

    let wrapper = screen.getByTestId("file_preview");
    let deleteIcon = screen.getByTestId("file_preview_delete");
    expect(wrapper).toBeInTheDocument();

    fireEvent.click(deleteIcon);
    expect(onRemoveMock).toHaveBeenCalled();
  });
});
