import { screen } from "@testing-library/react";
import FormPicker from "../../../components/FormPicker";
import { renderWithProviders } from "../../helpers";

describe("FormPicker unit tests", () => {
  it("renders correct form", () => {
    const initialState = {
      modal: {
        isOpen: true,
      },
      form: {
        allForms: [
          {
            id: "#1",
            title: "title1",
            updated_at: "2022-08-09 02:43:54",
            count: "12",
            url: "https://",
          },
        ],
        selectedFormId: "#1",
      },
    };

    renderWithProviders(<FormPicker />, {
      preloadedState: initialState,
    });
    expect(screen.getByText("title1")).toBeInTheDocument();
  });

  // TODO: Change forma tıklandığında modal açılıyor
});
