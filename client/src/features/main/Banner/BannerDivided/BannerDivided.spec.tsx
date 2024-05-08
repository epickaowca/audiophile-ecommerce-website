import { BannerDivided } from "./index";
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
  render(<BannerDivided />);
  expect(screen.getByAltText("ZX7 product image")).toBeInTheDocument();
});

it("displays ProductDescription with correct props", () => {
  render(<BannerDivided />);
  expect(ProductDescriptionProps).toHaveBeenCalledWith({
    ariaLabel: "ZX7 speaker",
    category: "speaker",
    href: "/details/ZX7",
    name: "ZX7",
    variant: "secondary",
    withoutBr: true,
  });
});
