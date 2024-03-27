import { screen } from "@testing-library/react";
import { Product } from "./index";
import { render } from "../../../../../../tests/render";

it("should render Product", async () => {
  const props = {
    href: "hrefTest",
    initialImg: { mobile: "imgTestInit" },
    largeImg: { mobile: "imgTestLarge" },
    productName: "headphones",
  } as const;

  render(<Product {...props} />);
  const img = screen.getByAltText(props.productName);
  const h1 = screen.getByText(props.productName);

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", props.initialImg.mobile);
  expect(h1).toBeInTheDocument();
});
