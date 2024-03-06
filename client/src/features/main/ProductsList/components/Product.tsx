import { FC, useRef } from "react";
import { ProductDescription } from "../../../shared/ProductDescription";
import { myTheme } from "../../../../styles/styled";
import { StyledProductsList } from "./ProductsList.styled";
import { useImgPreload } from "../../../../hooks/useImgPreload";
import { Image, ProductCategory } from "../../../../types";
import { SERVER_URL } from "../../../../constants";

type CategoryProductProps = {
  initialImg: Image;
  largeImg: Image;
  isNew: boolean;
  tagName: string;
  category: ProductCategory;
  name: string;
  description: string;
};

export const Product: FC<CategoryProductProps> = ({
  initialImg,
  largeImg,
  isNew,
  tagName,
  category,
  name,
  description,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const { img } = useImgPreload({ imgRef, largeImg, initialImg });

  return (
    <StyledProductsList>
      <picture>
        <source
          media={myTheme.media.desktop}
          srcSet={`${SERVER_URL}/${img.desktop}`}
        />
        <source
          media={myTheme.media.tablet}
          srcSet={`${SERVER_URL}/${img.tablet}`}
        />
        <img
          ref={imgRef}
          src={`${SERVER_URL}/${img.mobile}`}
          alt="YX1 wireless earphone"
        />
      </picture>
      <ProductDescription
        buttonAriaLabel={`SEE ${name}`}
        isNew={isNew}
        buttonHref={`/detail/${tagName}`}
        productCategory={category}
        productName={name}
        description={description}
      />
    </StyledProductsList>
  );
};
