import { screen } from "@testing-library/react";
import { NavList, menuItems } from "./index";
import { render } from "../../../../../../tests/render";

it("displays list of links", async () => {
  render(<NavList />);
  for (const menuItem of menuItems) {
    expect(screen.getByText(menuItem.label)).toHaveAttribute(
      "href",
      menuItem.to
    );
  }
});
