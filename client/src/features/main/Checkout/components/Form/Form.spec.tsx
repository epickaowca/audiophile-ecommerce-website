import { screen } from "@testing-library/react";
import { Form } from "./index";
import { render } from "@tests/render";

jest.mock("../PaymentDetails", () => ({
  PaymentDetails: jest.fn(() => <h1>PaymentDetails</h1>),
}));

it("displays checkout heading", async () => {
  render(<Form register={jest.fn()} />);
  expect(
    screen.getByRole("heading", { level: 1, name: "checkout" })
  ).toBeInTheDocument();
});

it("displays Billing Details section", async () => {
  render(<Form register={jest.fn()} />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Billing Details" })
  ).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: "Email Address" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: "Phone Number" })
  ).toBeInTheDocument();
});

it("displays Shipping Info section", async () => {
  render(<Form register={jest.fn()} />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Shipping Info" })
  ).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "Address" })).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "ZIP Code" })).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "City" })).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "Country" })).toBeInTheDocument();
});

it("displays Payment Details section", async () => {
  render(<Form register={jest.fn()} />);
  expect(screen.getByRole("heading", { level: 2, name: "Payment Details" }));
  expect(screen.getByText("PaymentDetails"));
});
