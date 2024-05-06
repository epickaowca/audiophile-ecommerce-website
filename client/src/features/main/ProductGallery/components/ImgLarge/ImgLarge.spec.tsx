import { screen } from "@testing-library/react";
import { render } from "@tests/render";
import { ImgLarge } from "./index";

it("displays ImgLarge", async () => {
  const props = {
    initialImg: { mobile: "initImgTest" },
    largeImg: { mobile: "largeImgTest" },
  } as const;

  render(<ImgLarge {...props} />);
  expect(screen.getByAltText("gallery-img-3")).toHaveAttribute(
    "src",
    props.initialImg.mobile
  );
});
