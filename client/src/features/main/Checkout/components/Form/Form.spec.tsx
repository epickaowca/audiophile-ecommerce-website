import { screen } from "@testing-library/react";
import { Form } from "./index";
import { render } from "../../../../../../tests/render";

it("should render form sections", async () => {
  render(<Form register={jest.fn()} />);

  const checkout = screen.getByText("checkout");
  const billingDetails = screen.getByText("Billing Details");
  const shippingInfo = screen.getByText("Shipping Info");

  expect(checkout).toBeInTheDocument();
  expect(billingDetails).toBeInTheDocument();
  expect(shippingInfo).toBeInTheDocument();
});
