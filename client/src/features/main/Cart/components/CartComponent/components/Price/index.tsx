import { FC } from "react";
import { priceWithComma, modifiers } from "../../../../../../../utils";
import { styled, css } from "styled-components";

type PriceProps = {
  name: string;
  price: number;
  orangePrice?: boolean;
};

export const Price: FC<PriceProps> = ({ name, price, orangePrice }) => {
  const { styledComponentId: Price } = StyledPriceDisplay;
  return (
    <StyledPriceDisplay $className={Price}>
      <span className={`${Price}_name`}>{name}</span>
      <span
        className={modifiers({
          baseClass: `${Price}_price`,
          modifier: orangePrice && "orange",
        })}
      >
        $ {priceWithComma(price)}
      </span>
    </StyledPriceDisplay>
  );
};

const StyledPriceDisplay = styled.div<{
  $className: string;
}>(({ theme, $className }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .${$className} {
      &_name {
        color: ${theme.grayDarkText};
        font-weight: 500;
        text-transform: uppercase;
      }
      &_price {
        color: "black";
        font-weight: bold;
      }

      &_price--orange {
        color: ${theme.orangeMedium};
      }
    }
  `;
});
