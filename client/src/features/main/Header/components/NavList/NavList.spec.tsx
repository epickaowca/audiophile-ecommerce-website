import { screen } from "@testing-library/react";
import { NavList, menuItems } from "./index";
import { render } from "../../../../../../tests/render";

it("should render NavList", async () => {
  render(<NavList />);

  for (const menuItem of menuItems) {
    const item = screen.getByText(menuItem.label);
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute("href", menuItem.to);
  }
});
