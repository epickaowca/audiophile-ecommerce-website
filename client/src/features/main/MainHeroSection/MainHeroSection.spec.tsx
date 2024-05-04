import { screen } from "@testing-library/react";
import { MainHeroSection } from "./index";
import { render } from "../../../../tests/render";

jest.mock("../../shared/ProductDescription");

it("displays hero image", () => {
  render(<MainHeroSection />);
  expect(screen.getByAltText("hero-image")).toBeInTheDocument();
});

it("displays product description", () => {
  render(<MainHeroSection />);
  expect(screen.getByText("/details/XX99-Mark-2")).toBeInTheDocument();
  expect(screen.getByText("SEE XX99 Mark II")).toBeInTheDocument();
  expect(screen.getByText("XX99 Mark II")).toBeInTheDocument();
  expect(screen.getByText("headphones")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("isNew:true")).toBeInTheDocument();
});
