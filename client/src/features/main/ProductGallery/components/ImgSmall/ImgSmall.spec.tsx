import { screen } from "@testing-library/react";
import { render } from "../../../../../../tests/render";
import { ImgSmall } from "./index";

it("should render ImgSmall", async () => {
  const props = {
    img1: { mobile: "img1Test" },
    img2: { mobile: "img2Test" },
  } as const;

  render(<ImgSmall {...props} />);

  const img1 = screen.getByAltText("gallery-img-1");
  const img2 = screen.getByAltText("gallery-img-2");

  expect(img1).toBeInTheDocument();
  expect(img2).toBeInTheDocument();
  expect(img1).toHaveAttribute("src", props.img1.mobile);
  expect(img2).toHaveAttribute("src", props.img2.mobile);
});
