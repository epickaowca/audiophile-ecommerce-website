import { fireEvent } from "@testing-library/react";
import { Navigation } from "./index";
import { render } from "../../../../../../tests/render";

window.scrollTo = jest.fn();

it("should call closeNav on escape", async () => {
  const closeNav = jest.fn();
  const { container } = render(
    <Navigation closeNav={closeNav} $headerHeight="50" $isNavOpen={true} />
  );

  fireEvent.keyDown(container.querySelector(".productCategoriesWrapper")!, {
    key: "Escape",
    code: "Escape",
  });

  expect(closeNav).toHaveBeenCalledTimes(1);
});
