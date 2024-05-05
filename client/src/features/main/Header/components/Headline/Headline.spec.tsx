import { render } from "../../../../../../tests/render";
import { screen } from "@testing-library/react";
import { Headline } from "./index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(() => ({
    id: "testHeadline",
  })),
}));

it("displays headline text", () => {
  render(<Headline />);
  expect(screen.getByText("testHeadline")).toBeInTheDocument();
});
