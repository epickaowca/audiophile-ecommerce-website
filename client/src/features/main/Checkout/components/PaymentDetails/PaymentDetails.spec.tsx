import { screen } from "@testing-library/react";
import { PaymentDetails } from "./index";
import { render } from "../../../../../../tests/render";

it("should render PaymentDetails section", async () => {
  render(<PaymentDetails register={jest.fn()} />);

  const paymentDetails = screen.getByText("Payment Details");

  expect(paymentDetails).toBeInTheDocument();
});
