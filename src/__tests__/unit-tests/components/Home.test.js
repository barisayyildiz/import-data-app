import { render, screen } from "@testing-library/react";
import Home from "../../../components/Home";
import { homePageTexts } from "../../../constants";

test("should contain heading", () => {
  const {
    header,
    subHeader,
    buttonText,
    usage: { header: usageHeader, steps },
  } = homePageTexts;
  render(<Home />);
  let text = screen.getByText(header);
  expect(text).toBeInTheDocument();
  text = screen.getByText(subHeader);
  expect(text).toBeInTheDocument();
  text = screen.getByText(buttonText);
  expect(text).toBeInTheDocument();
});
