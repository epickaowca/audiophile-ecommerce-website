import { BannerMedium } from "./index";
import { render } from "@tests/render";
import { screen } from "@testing-library/react";

const ProductDescriptionProps = jest.fn();
jest.mock("@root/features/shared/ProductDescription", () => ({
  ...jest.requireActual("@root/features/shared/ProductDescription"),
  ProductDescription: jest.fn((props) => {
    ProductDescriptionProps(props);
  }),
}));
it("displays banner img", () => {
  render(<BannerMedium />);
  expect(screen.getByAltText("YX1 product image")).toBeInTheDocument();
});

it("displays ProductDescription with correct props", () => {
  render(<BannerMedium />);
  expect(ProductDescriptionProps).toHaveBeenCalledWith({
    ariaLabel: "YX1 speaker",
    category: "earphones",
    href: "/details/YX1",
    name: "YX1",
    variant: "secondary",
    withoutBr: true,
  });
});
