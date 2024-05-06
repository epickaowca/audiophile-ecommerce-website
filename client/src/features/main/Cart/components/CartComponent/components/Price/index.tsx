import { FC } from "react";
import { priceWithComma, modifiers } from "@root/utils";
import { styled, css } from "styled-components";

type PriceProps = {
  name: string;
  price: number;
  orangePrice?: boolean;
};

export const Price: FC<PriceProps> = ({ name, price, orangePrice }) => {
  const { styledComponentId: Price } = StyledPrice;
  return (
    <StyledPrice $className={Price}>
      <span className={`${Price}_name`}>{name}</span>
      <span
        className={modifiers({
          baseClass: `${Price}_price`,
          modifier: orangePrice && "orange",
        })}
      >
        $ {priceWithComma(price)}
      </span>
    </StyledPrice>
  );
};

const StyledPrice = styled.div<{
  $className: string;
}>(({ theme: { grayDarkText, orangeMedium }, $className }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .${$className} {
      &_name {
        color: ${grayDarkText};
        font-weight: 500;
        text-transform: uppercase;
      }

      &_price {
        font-weight: bold;
      }

      &_price--orange {
        color: ${orangeMedium};
      }
    }
  `;
});
