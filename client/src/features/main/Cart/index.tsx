import { FC } from "react";
import { CartProvider as CP, useCart as UC } from "./context";
import { StyledCart, Wrapper } from "./Cart.styled";
import { Overlay } from "../../shared/Overlay";
import { CartProduct } from "./components/CartProduct";
import { Button } from "../../shared/Button";
import { priceWithComma } from ".././../../utils";

export const CartProvider = CP;
export const useCart = UC;

export const Cart: FC = () => {
  const { isCartOpen, productList, toggleCart, updateQuantity } = useCart();

  const closeCart = () => {
    toggleCart("close");
  };

  return (
    <>
      {isCartOpen && (
        <>
          <Wrapper $isCartOpen={isCartOpen}>
            <StyledCart>
              <div className="heading">
                <span>CART (3)</span>
                <button>Remove all</button>
              </div>
              <div className="product-list">
                {productList.map((product) => (
                  <CartProduct
                    key={product.productTag}
                    imgSrc={product.imgSrc}
                    price={product.price}
                    productName={product.productName}
                    quantity={product.quantity}
                    setQuantity={(quantity) =>
                      updateQuantity({
                        productTag: product.productTag,
                        quantity,
                      })
                    }
                  />
                ))}
              </div>
              <div className="total">
                <span className="text">TOTAL</span>
                <span className="price">
                  $
                  {priceWithComma(
                    productList.reduce(
                      (accumulator, { price, quantity }) =>
                        accumulator + price * quantity,
                      0
                    )
                  )}
                </span>
              </div>
              <Button
                text="CHECKOUT"
                variant="primary"
                as="link"
                href="#CHECKOUT"
              />
            </StyledCart>
          </Wrapper>
          <Overlay onClick={closeCart} />
        </>
      )}
    </>
  );
};
