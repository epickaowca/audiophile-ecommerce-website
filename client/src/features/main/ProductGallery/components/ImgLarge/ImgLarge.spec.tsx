import { screen } from "@testing-library/react";
import { render } from "../../../../../../tests/render";
import { ImgLarge } from "./index";

it("should render ImgLarge", async () => {
  const props = {
    initialImg: { mobile: "initImgTest" },
    largeImg: { mobile: "largeImgTest" },
  } as const;

  render(<ImgLarge {...props} />);

  const img = screen.getByAltText("gallery-img-3");

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", props.initialImg.mobile);
});
