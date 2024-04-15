import { FC, useRef } from "react";
import { Button } from "../../../../shared/Button";
import { StyledCart } from "./CartComponent.styled";
import { Price } from "./components/Price";
import { AdditionalPricingDetails } from "./components/AdditionalPricingDetails";
import { ProductList } from "../ProductList";
import { useNavigate } from "react-router-dom";
import { getTotal, useCart } from "../../context";
import { CloseBtn } from "./components/CloseBtn";
import { useEscapeHandler } from "../../../../../hooks/useEscape";

export const CartStatic: FC = () => {
  const { productList } = useCart();
  const total = getTotal(productList);
  const { styledComponentId: Cart } = StyledCart;

  return (
    <StyledCart $className={Cart}>
      <h2 className={`${Cart}_heading`}>summary</h2>
      <ProductList cartType="static" />
      <Price name="total" price={total} />
      <AdditionalPricingDetails />
      <Button
        text="CONTINUE & PAY"
        type="submit"
        variant="primary"
        as="button"
      />
    </StyledCart>
  );
};

export const CartModal: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { removeAll, toggleCart, productList } = useCart();
  const total = getTotal(productList);
  const navigate = useNavigate();
  const { styledComponentId: Cart } = StyledCart;
  const { length } = productList;
  useEscapeHandler({ ref, onEscape: () => toggleCart("close") });

  return (
    <StyledCart $className={Cart} id="main-cart" ref={ref}>
      <CloseBtn />
      <div className={`${Cart}_headingWrapper`}>
        <h2 className={`${Cart}_heading`}>{`cart (${length})`}</h2>
        <button className={`${Cart}_removeBtn`} onClick={removeAll}>
          Remove all
        </button>
      </div>
      <ProductList cartType={"modal"} />
      <Price name="total" price={total} />
      <Button
        text="CHECKOUT"
        type="button"
        variant="primary"
        as="button"
        ariaLabel="go to checkout"
        onClick={() => {
          navigate("/checkout");
          toggleCart("close");
        }}
      />
    </StyledCart>
  );
};
