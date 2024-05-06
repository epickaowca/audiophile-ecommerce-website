import { BannerLarge } from "./index";
import { render } from "@tests/render";
import { screen } from "@testing-library/react";

jest.mock("@root/features/shared/ProductDescription");

it("displays banner img", () => {
  render(<BannerLarge />);
  expect(screen.getByAltText("ZX9 product image")).toBeInTheDocument();
});

it("displays ProductDescription with correct props", () => {
  render(<BannerLarge />);
  expect(screen.getByText("ZX9")).toBeInTheDocument();
  expect(screen.getByText("black")).toBeInTheDocument();
  expect(screen.getByText("ZX9 speaker")).toBeInTheDocument();
  expect(screen.getByText("speaker")).toBeInTheDocument();
  expect(screen.getByText("/details/ZX9")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
    )
  ).toBeInTheDocument();
});
