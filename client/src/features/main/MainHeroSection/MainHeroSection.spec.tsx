import { screen } from "@testing-library/react";
import { MainHeroSection } from "./index";
import { render } from "@tests/render";

const ProductDescriptionProps = jest.fn();
jest.mock("@root/features/shared/ProductDescription", () => ({
  ...jest.requireActual("@root/features/shared/ProductDescription"),
  ProductDescription: jest.fn((props) => ProductDescriptionProps(props)),
}));

it("displays hero image", () => {
  render(<MainHeroSection />);
  expect(screen.getByAltText("hero-image")).toBeInTheDocument();
});

it("displays product description", () => {
  render(<MainHeroSection />);
  expect(ProductDescriptionProps).toHaveBeenCalledWith({
    ariaLabel: "SEE XX99 Mark II",
    category: "headphones",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    href: "/details/XX99-Mark-2",
    isNew: true,
    name: "XX99 Mark II",
  });
});
