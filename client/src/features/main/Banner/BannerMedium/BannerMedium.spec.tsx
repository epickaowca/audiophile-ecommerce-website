import { BannerMedium } from "./index";
import { render } from "@tests/render";
import { screen } from "@testing-library/react";

jest.mock("@root/features/shared/ProductDescription");

it("displays banner img", () => {
  render(<BannerMedium />);
  expect(screen.getByAltText("YX1 product image")).toBeInTheDocument();
});

it("displays ProductDescription with correct props", () => {
  render(<BannerMedium />);
  expect(screen.getByText("YX1")).toBeInTheDocument();
  expect(screen.getByText("secondary")).toBeInTheDocument();
  expect(screen.getByText("YX1 speaker")).toBeInTheDocument();
  expect(screen.getByText("earphones")).toBeInTheDocument();
  expect(screen.getByText("/details/YX1")).toBeInTheDocument();
  expect(screen.getByText("withoutBr:true")).toBeInTheDocument();
});
