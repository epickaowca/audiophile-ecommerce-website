import { BannerLarge } from "./index";
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
  render(<BannerLarge />);
  expect(screen.getByAltText("ZX9 product image")).toBeInTheDocument();
});

it("displays ProductDescription with correct props", () => {
  render(<BannerLarge />);

  expect(ProductDescriptionProps).toHaveBeenCalledWith({
    ariaLabel: "ZX9 speaker",
    category: "speaker",
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    href: "/details/ZX9",
    name: "ZX9",
    variant: "black",
  });
});
