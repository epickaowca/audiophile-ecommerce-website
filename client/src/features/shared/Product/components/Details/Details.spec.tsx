import { screen } from "@testing-library/react";
import { Details } from "./index";
import { render } from "../../../../../../tests/render";

it("should render price", async () => {
  render(
    <Details cartImg="cartImgTest" name="test" price={50} tag="XX99-Mark-2" />
  );

  const price = screen.getByText("$ 50");
  expect(price).toBeInTheDocument();
});
