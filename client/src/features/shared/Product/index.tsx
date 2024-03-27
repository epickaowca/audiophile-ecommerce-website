import { FC, useRef } from "react";
import { ProductDescription } from "../ProductDescription";
import { myTheme } from "../../../styles/styled";
import { StyledProductsList as SPL } from "./ProductsList.styled";
import { useImgPreload } from "../../../hooks/useImgPreload";
import { Image } from "../../../types";
import { Details } from "./components/Details";
import { ProductDescriptionProps } from "../ProductDescription";

type CategoryProductProps = ProductDescriptionProps & {
  initialImg: Image;
  largeImg: Image;
  tag: string;
  detailCase?: { price: number; maxQuantity: number; cartImg: string };
};

export const StyledProductsList = SPL;

export const Product: FC<CategoryProductProps> = ({
  initialImg,
  largeImg,
  detailCase,
  tag,
  ...rest
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { img } = useImgPreload({ imgRef, largeImg, initialImg });

  const ProductDescriptionProps = {
    href: detailCase ? undefined : `/details/${tag}`,
    ariaLabel: `SEE ${rest.name}`,
    ...rest,
  } as const;

  return (
    <StyledProductsList $detailCase={!!detailCase}>
      <picture>
        <source media={myTheme.media.desktop} srcSet={img.desktop} />
        <source media={myTheme.media.tablet} srcSet={img.tablet} />
        <img
          ref={imgRef}
          src={img.mobile}
          alt={`${rest.name} ${rest.category}`}
        />
      </picture>
      <div className="description-wrapper">
        <ProductDescription {...ProductDescriptionProps} />
        {detailCase && (
          <Details
            price={detailCase.price}
            tag={tag}
            cartImg={detailCase.cartImg}
            name={rest.name}
          />
        )}
      </div>
    </StyledProductsList>
  );
};
