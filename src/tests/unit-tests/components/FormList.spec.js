import configureStore from "redux-mock-store";

import { render, screen } from "@testing-library/react";
import FormsList from "../../../components/FormsList";

const mockStore = configureStore();

describe("FormList unit tests", () => {
  it("form number is correct", () => {
    const forms = [
      {
        id: "#1",
        title: "title1",
        updated_at: "2022-08-09 02:43:54",
        count: "12",
        url: "https://",
      },
      {
        id: "#2",
        title: "title2",
        updated_at: "2022-08-09 02:43:54",
        count: "25",
        url: "https://",
      },
    ];
    render(<FormsList forms={forms} />);
    const formNodes = screen.getAllByText(/updated on/i);
    expect(formNodes.length).toBe(2);
  });
});
