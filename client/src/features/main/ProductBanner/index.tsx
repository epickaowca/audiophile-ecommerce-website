import { FC, useRef } from "react";
import { Card } from "./components/Card";
import { Picture } from "./components/Picture";
import { PatternCircles } from "./components/PatternCircles";
import { styled, css } from "styled-components";
import { BannerProps, DescriptionProps } from "./types";
import { useImgPreload } from "../../../hooks/useImgPreload";
import { myTheme } from "../../../styles/styled";
import { ProductDescription } from "../../shared/ProductDescription";
import { CardContent } from "./components/CardContent";

export const ProductBanner: FC<BannerProps & DescriptionProps> = ({
  cardType,
  href,
  category,
  name,
  description,
  initialImg,
  largeImg,
}) => {
  const isDivided = cardType === "divided";
  const isLarge = cardType === "large";
  const imgRef = useRef<HTMLImageElement>(null);
  const { desktop, isLargeImgLoaded, mobile, tablet } = useImgPreload({
    largeImg,
    initialImg,
    imgRef,
  });

  const cardContentProps = {
    href,
    category,
    name,
    cardType,
  };

  const descriptionProps = {
    href,
    category,
    description,
    name,
    variant: cardType === "large" ? "black" : "secondary",
    ariaLabel: `SEE ${name} ${category}`,
  } as const;

  const cardContent = isLarge ? (
    <ProductDescription {...descriptionProps} />
  ) : (
    <CardContent {...cardContentProps} />
  );
  return (
    <Wrapper $isDivided={isDivided}>
      {isDivided && (
        <Card cardType={cardType}>
          <Picture
            isFullBg={!isLarge}
            cardType={cardType}
            isImgLoaded={isLargeImgLoaded}
          >
            <source media={myTheme.media.desktop} srcSet={desktop} />
            <source media={myTheme.media.tablet} srcSet={tablet} />
            <img ref={imgRef} src={mobile} alt={`${name} product image`} />
          </Picture>
        </Card>
      )}
      <Card cardType={cardType}>
        {isLarge && <PatternCircles />}
        {!isDivided && (
          <Picture
            isFullBg={!isLarge}
            cardType={cardType}
            isImgLoaded={isLargeImgLoaded}
          >
            <source media={myTheme.media.desktop} srcSet={desktop} />
            <source media={myTheme.media.tablet} srcSet={tablet} />
            <img ref={imgRef} src={mobile} alt={`${name} product image`} />
          </Picture>
        )}
        {cardContent}
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isDivided: boolean }>(({ theme, $isDivided }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media ${theme.media.tablet} {
      flex-direction: row;
      margin: auto;
      width: ${$isDivided ? "90%" : "100%"};
    }

    ${$isDivided &&
    css`
      @media ${theme.media.desktop} {
        max-width: 1300px;
        gap: 50px;
      }
    `}
  `;
});
