import { screen } from "@testing-library/react";
import { MainHeroSection } from "./index";
import { render } from "../../../../tests/render";

it("should render MainHeroSection", async () => {
  render(<MainHeroSection />);

  const img = screen.getByAltText("hero-image");

  expect(img).toBeInTheDocument();
});
