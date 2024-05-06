import { screen } from "@testing-library/react";
import { Details } from "./index";
import { render } from "@tests/render";
import { useCart } from "@root/features/main/Cart";

jest.mock("@root/features/shared/QuantitySelector", () => ({
  QuantitySelector: jest.fn(() => <h1>QuantitySelector</h1>),
}));

const defaultProps = {
  cartImg: "cartImgTest",
  name: "test",
  price: 50,
  tag: "XX99-Mark-2",
};

it("should render price", async () => {
  render(<Details {...defaultProps} />);
  expect(screen.getByText("$ 50")).toBeInTheDocument();
});

it("displays QuantitySelector", async () => {
  render(<Details {...defaultProps} />);
  expect(screen.getByText("QuantitySelector")).toBeInTheDocument();
});

it("calls addProduct after button click", async () => {
  const { name, price, tag } = defaultProps;
  const { addProduct } = useCart();
  render(<Details {...defaultProps} />);
  await screen.getByText("ADD TO CART").click();
  expect(addProduct).toHaveBeenCalledWith({
    imgSrc: defaultProps.cartImg,
    name,
    price,
    quantity: 1,
    tag,
  });
});
