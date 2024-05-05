import { screen } from "@testing-library/react";
import { render } from "../../../../../../tests/render";
import { Info } from "./index";

it("should render Info", async () => {
  const props = {
    features: "featureTest",
    includes: [{ item: "itemTest", quantity: 2 }],
  };

  render(<Info {...props} />);

  expect(screen.getByText("FEATURES")).toBeInTheDocument();
  expect(screen.getByText(props.features)).toBeInTheDocument();
  expect(screen.getByText("IN THE BOX")).toBeInTheDocument();
  expect(screen.getByText(props.includes[0].item)).toBeInTheDocument();
  expect(
    screen.getByText(`${props.includes[0].quantity}x`)
  ).toBeInTheDocument();
});
