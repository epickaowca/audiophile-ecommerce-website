import { render } from "../../../../tests/render";
import { screen, waitFor } from "@testing-library/react";
import { Checkout } from "./index";

jest.mock("./components/ThankYou", () => ({
  ThankYou: jest.fn(() => <h1>Thank You</h1>),
}));

jest.mock("../Cart", () => ({
  Cart: jest.fn(({ cartType }) => (
    <>
      <h1>{cartType}</h1>
      <button type="submit">submit</button>
    </>
  )),
}));

it("displays Thank You component after form submit", async () => {
  jest.mock("./components/Form", () => ({
    Form: jest.fn(() => <h1>Form</h1>),
  }));
  const { rerender } = render(<Checkout />);
  await screen.getByText("submit").click();
  rerender(<Checkout />);
  expect(screen.getByText("Thank You")).toBeInTheDocument();
});

it("does not submit form if required inputs are empty", async () => {
  const { rerender } = render(<Checkout />);
  await screen.getByText("submit").click();
  rerender(<Checkout />);
  expect(screen.queryByText("Thank You")).toBeNull();
});
