import { screen } from "@testing-library/react";
import { render } from "../../../../../../tests/render";
import { PaymentDetails } from "./index";

const cashDescription =
  "The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.";

it("displays Payment Method section", () => {
  render(<PaymentDetails register={jest.fn()} />);
  expect(
    screen.getByRole("heading", { name: "Payment Method" })
  ).toBeInTheDocument();
  expect(screen.getByRole("radio", { name: "e-Money" })).toBeInTheDocument();
  expect(
    screen.getByRole("radio", { name: "Cash on Delivery" })
  ).toBeInTheDocument();
});

it("displays e-Money form by default", () => {
  render(<PaymentDetails register={jest.fn()} />);
  expect(screen.getByRole("radio", { name: "e-Money" })).toBeChecked();

  expect(screen.getByLabelText("e-Money Number")).toBeInTheDocument();
  expect(screen.getByLabelText("e-Money PIN")).toBeInTheDocument();
  expect(screen.queryByAltText("cash-icon")).toBeNull;
  expect(screen.queryByText(cashDescription)).toBeNull();
});

it("displays cash description if cash radio is checked", async () => {
  render(<PaymentDetails register={jest.fn()} />);
  await screen.getByRole("radio", { name: "Cash on Delivery" }).click();

  expect(screen.getByAltText("cash-icon")).toBeInTheDocument();
  expect(screen.getByText(cashDescription)).toBeInTheDocument();
  expect(screen.queryByLabelText("e-Money Number")).toBeNull();
  expect(screen.queryByLabelText("e-Money PIN")).toBeNull();
});
