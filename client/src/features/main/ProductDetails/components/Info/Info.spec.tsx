import { screen } from "@testing-library/react";
import { render } from "../../../../../../tests/render";
import { Info } from "./index";

it("should render Info", async () => {
  const props = {
    features: "featureTest",
    includes: [{ item: "itemTest", quantity: 2 }],
  };

  render(<Info {...props} />);

  const featuresHeader = screen.getByText("FEATURES");
  const includesHeader = screen.getByText("IN THE BOX");
  const features = screen.getByText(props.features);
  const includesItem = screen.getByText(props.includes[0].item);
  const includesQuantity = screen.getByText(`${props.includes[0].quantity}x`);

  expect(featuresHeader).toBeInTheDocument();
  expect(includesHeader).toBeInTheDocument();
  expect(features).toBeInTheDocument();
  expect(includesItem).toBeInTheDocument();
  expect(includesQuantity).toBeInTheDocument();
});
