import { fireEvent, screen } from "@testing-library/react";
import MatchingForm from "../../../components/MatchingForm";
import { renderWithProviders } from "../../helpers";

describe("MatchingForm unit tests", () => {
  let importedColumns = [];
  let formQuestions = [];

  beforeAll(() => {
    importedColumns = [
      {
        value: "#1",
        label: "name",
      },
      {
        value: "#2",
        label: "Your Adress",
      },
      {
        value: "#3",
        label: "Work",
      },
    ];
    formQuestions = ["Name", "Adress", "Work"];
    renderWithProviders(
      <MatchingForm
        onSubmit={jest.fn()}
        importedColumns={importedColumns}
        formQuestions={formQuestions}
        errors={[]}
      />
    );
  });

  it("renders correct inputs", () => {
    const inputs = document.querySelectorAll("select");
    expect(inputs.length).toBe(formQuestions.length);
  });
});
