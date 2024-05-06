import { screen } from "@testing-library/react";
import { AudioGear } from "./index";
import { render } from "@tests/render";

it("displays title", async () => {
  render(<AudioGear />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Bringing you the best audio gear"
  );
});

it("displays description", async () => {
  render(<AudioGear />);
  const description = screen.getByText(
    "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
  );
  expect(description).toBeInTheDocument();
});

it("displays img", async () => {
  render(<AudioGear />);
  expect(screen.getByAltText("audio-gear-image")).toBeInTheDocument();
});
