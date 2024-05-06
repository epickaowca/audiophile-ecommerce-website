import { screen } from "@testing-library/react";
import { render } from "@tests/render";
import { ImgSmall } from "./index";

it("displays ImgSmall", async () => {
  const props = {
    img1: { mobile: "img1Test" },
    img2: { mobile: "img2Test" },
  } as const;

  render(<ImgSmall {...props} />);

  expect(screen.getByAltText("gallery-img-1")).toHaveAttribute(
    "src",
    props.img1.mobile
  );
  expect(screen.getByAltText("gallery-img-2")).toHaveAttribute(
    "src",
    props.img2.mobile
  );
});
