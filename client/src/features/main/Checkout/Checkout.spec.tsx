import { render } from "@tests/render";
import { screen, waitFor } from "@testing-library/react";
import { Checkout } from "./index";
import { Form } from "./components/Form";
const MockedForm = Form as jest.Mock<any>;

jest.mock("./components/ThankYou", () => ({
  ThankYou: jest.fn(() => <div data-testId="Thank You"></div>),
}));

jest.mock("../Cart", () => ({
  Cart: jest.fn((props) => <button type="submit">submit</button>),
}));

jest.mock("./components/Form", () => ({
  Form: jest.fn(() => <h1>Form</h1>),
}));

it("displays Thank You component after form submit", async () => {
  render(<Checkout />);
  await screen.getByText("submit").click();
  await waitFor(async () => {
    expect(screen.getByTestId("Thank You")).toBeInTheDocument();
  });
});

it("does not submit form if required inputs are empty", async () => {
  MockedForm.mockReturnValue(<input required />);
  const { rerender } = render(<Checkout />);
  await screen.getByText("submit").click();
  rerender(<Checkout />);
  expect(screen.queryByTestId("Thank You")).toBeNull();
});
