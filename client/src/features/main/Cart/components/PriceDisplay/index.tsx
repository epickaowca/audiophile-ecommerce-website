import { FC } from "react";
import { priceWithComma } from "../../../../../utils";
import { styled, css } from "styled-components";

type PriceDisplayProps = {
  name: string;
  price: number;
  priceColor?: "black" | "orange";
};

export const PriceDisplay: FC<PriceDisplayProps> = ({
  name,
  price,
  priceColor,
}) => {
  return (
    <Wrapper $orangePrice={priceColor === "orange"}>
      <span className="text">{name}</span>
      <span className="price">$ {priceWithComma(price)}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $orangePrice: boolean }>(
  ({ theme, $orangePrice }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > .text {
        color: ${theme.grayDarkText};
        font-weight: 500;
        text-transform: uppercase;
      }
      & > .price {
        color: ${$orangePrice ? theme.orangeMedium : "black"};
        font-weight: bold;
      }
    `;
  }
);
