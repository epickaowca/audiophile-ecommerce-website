import { FC } from "react";
import { styled, css } from "styled-components";
import { ProductCategory } from "../../../../../types";
import { Button } from "../../../../shared/Button";
import { CardType } from "../../types";

type CardContentProps = {
  productName: string;
  productCategory: ProductCategory;
  buttonHref: string;
  cardType: CardType;
};

export const CardContent: FC<CardContentProps> = ({
  buttonHref,
  productCategory,
  productName,
  cardType,
}) => {
  return (
    <Wrapper $cardType={cardType}>
      <h1>
        {productName} {productCategory}
      </h1>
      <Button
        as="link"
        href={buttonHref}
        ariaLabel={`SEE ${productName}`}
        text="SEE PRODUCT"
        variant="secondary"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $cardType: CardType }>(
  ({ theme: { media }, $cardType }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 1;
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
      & > h1 {
        margin-bottom: 20px;
        letter-spacing: 2px;
        margin-left: -2px;
        font-size: 1.7rem;
        text-transform: uppercase;
      }

      @media ${media.tablet} {
        left: 70px;
        & > h1 {
          margin-bottom: 25px;
        }
      }

      @media ${media.desktop} {
        left: ${$cardType === "divided" ? "20%" : "130px"};
        & > h1 {
          margin-bottom: 30px;
        }
      }
    `;
  }
);
