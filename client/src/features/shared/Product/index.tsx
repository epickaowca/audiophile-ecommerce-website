import { FC, useRef, useState } from "react";
import { ProductDescription } from "../ProductDescription";
import { myTheme } from "../../../styles/styled";
import { StyledProductsList as SPL } from "./ProductsList.styled";
import { useImgPreload } from "../../../hooks/useImgPreload";
import { Image, ProductCategory } from "../../../types";
import { QuantitySelector } from "../QuantitySelector";
import { Button } from "../Button";
import { Details } from "./components/Details";

type CategoryProductProps = {
  initialImg: Image;
  largeImg: Image;
  isNew: boolean;
  tagName: string;
  category: ProductCategory;
  name: string;
  description: string;
  detailCase?: { price: number; maxQuantity: number; imgCart: string };
};

export const StyledProductsList = SPL;

export const Product: FC<CategoryProductProps> = ({
  initialImg,
  largeImg,
  isNew,
  tagName,
  category,
  name,
  description,
  detailCase,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { img } = useImgPreload({ imgRef, largeImg, initialImg });

  const descriptionAttr = {
    buttonHref: detailCase ? undefined : `/details/${tagName}`,
  };

  return (
    <StyledProductsList $detailCase={!!detailCase}>
      <picture>
        <source media={myTheme.media.desktop} srcSet={img.desktop} />
        <source media={myTheme.media.tablet} srcSet={img.tablet} />
        <img ref={imgRef} src={img.mobile} alt="YX1 wireless earphone" />
      </picture>
      <div className="description-wrapper">
        <ProductDescription
          buttonAriaLabel={`SEE ${name}`}
          isNew={isNew}
          productCategory={category}
          productName={name}
          description={description}
          {...descriptionAttr}
        />
        {detailCase && (
          <Details
            price={detailCase.price}
            productTag={tagName}
            cartImg={detailCase.imgCart}
            productName={name}
          />
        )}
      </div>
    </StyledProductsList>
  );
};
