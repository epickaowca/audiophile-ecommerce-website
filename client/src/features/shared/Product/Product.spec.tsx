import { screen } from "@testing-library/react";
import { Product } from "./index";
import { render } from "../../../../tests/render";

it("should render product img", async () => {
  const mobileInitial = "testInitialImg";
  render(
    <Product
      category="earphones"
      initialImg={{ mobile: mobileInitial }}
      largeImg={{ mobile: "testLargeImg" }}
      name="nameTest"
      tag="tagTest"
    />
  );
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", mobileInitial);
});
