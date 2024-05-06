import { BannerDivided } from "./index";
import { render } from "@tests/render";
import { screen } from "@testing-library/react";

jest.mock("../../../shared/ProductDescription");

it("displays banner img", () => {
  render(<BannerDivided />);
  expect(screen.getByAltText("ZX7 product image")).toBeInTheDocument();
});

it("displays ProductDescription with correct props", () => {
  render(<BannerDivided />);
  expect(screen.getByText("ZX7")).toBeInTheDocument();
  expect(screen.getByText("secondary")).toBeInTheDocument();
  expect(screen.getByText("ZX7 speaker")).toBeInTheDocument();
  expect(screen.getByText("speaker")).toBeInTheDocument();
  expect(screen.getByText("/details/ZX7")).toBeInTheDocument();
  expect(screen.getByText("withoutBr:true")).toBeInTheDocument();
});
