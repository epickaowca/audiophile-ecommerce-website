import { screen } from "@testing-library/react";
import { render } from "../../../../../../tests/render";
import { CardContent } from "./index";

it("should render CardContent", async () => {
  const props = {
    name: "nameTest",
    category: "earphones",
    href: "hrefTest",
  } as const;

  render(<CardContent cardType="divided" {...props} />);
  const h1 = screen.getByText(`${props.name} ${props.category}`);
  const button = screen.getByText("SEE PRODUCT");

  expect(h1).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
