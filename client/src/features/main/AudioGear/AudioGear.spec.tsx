import { screen } from "@testing-library/react";
import { AudioGear } from "./index";
import { render } from "../../../../tests/render";

it("should render AudioGear component", async () => {
  render(<AudioGear />);
  const img = screen.getByAltText("audio-gear-image");
  const description = screen.getByText(
    "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
  );
  expect(img).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
