import { screen } from "@testing-library/react";
import { Product } from "./index";
import { render } from "@tests/render";

const ProductDescriptionProps = jest.fn();
jest.mock("@root/features/shared/ProductDescription", () => ({
  ...jest.requireActual("@root/features/shared/ProductDescription"),
  ProductDescription: jest.fn((props) => ProductDescriptionProps(props)),
}));

jest.mock("./components/Details", () => ({
  Details: jest.fn(() => <div data-testId="Details"></div>),
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
  expect(ProductDescriptionProps).toHaveBeenCalledWith({
    ariaLabel: `SEE ${defaultProps.name}`,
    category: defaultProps.category,
    href: `/details/${defaultProps.tag}`,
    name: defaultProps.name,
  });
});

it("does not display Details by default", async () => {
  render(<Product {...defaultProps} />);
  expect(screen.queryByTestId("Details")).toBeNull();
});

it("displays Details", async () => {
  render(
    <Product
      {...defaultProps}
      detailCase={{ cartImg: "", maxQuantity: 4, price: 50 }}
    />
  );
  expect(screen.getByTestId("Details")).toBeInTheDocument();
});
