import { screen } from "@testing-library/react";
import { Product } from "./index";
import { render } from "../../../../tests/render";

jest.mock("../ProductDescription");
jest.mock("./components/Details", () => ({
  Details: jest.fn(() => <h1>Details</h1>),
}));

const defaultProps = {
  category: "earphones",
  initialImg: { mobile: "testInitialImg" },
  largeImg: { mobile: "testLargeImg" },
  name: "nameTest",
  tag: "tagTest",
} as const;

it("displays product img", async () => {
  render(<Product {...defaultProps} />);
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    defaultProps.initialImg.mobile
  );
});

it("displays ProductDescription", async () => {
  render(<Product {...defaultProps} />);
  expect(screen.getByText(`SEE ${defaultProps.name}`)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
  expect(screen.getByText(defaultProps.category)).toBeInTheDocument();
});

it("does not display Details by default", async () => {
  render(<Product {...defaultProps} />);
  expect(screen.queryByText("Details")).toBeNull();
});

it("displays Details", async () => {
  render(
    <Product
      {...defaultProps}
      detailCase={{ cartImg: "", maxQuantity: 4, price: 50 }}
    />
  );
  expect(screen.getByText("Details")).toBeInTheDocument();
});
