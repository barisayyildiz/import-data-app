import { fireEvent, screen, waitFor } from "@testing-library/react";
import FileInput from "../../../components/FileInput";
import { renderWithProviders } from "../../helpers";

describe("FileInput unit tests", () => {
  it("renders the correct text", () => {
    renderWithProviders(<FileInput />);

    expect(screen.getByText(/upload your file/i)).toBeInTheDocument();
  });

  it("file upload works correctly", async () => {
    renderWithProviders(<FileInput />);

    const file = new File(["test_test_test"], "test.xls");
    let uploader = screen.getByTestId("file_input");

    await waitFor(() => {
      fireEvent.change(uploader, {
        target: { files: [file] },
      });
    });

    uploader = screen.getByTestId("file_input");
    expect(uploader.files[0].name).toBe("test.xls");
    expect(uploader.files.length).toBe(1);
  });
});
