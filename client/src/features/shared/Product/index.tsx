import { FC, useRef } from "react";
import { ProductDescription } from "../ProductDescription";
import { myTheme } from "../../../styled";
import { StyledProduct } from "./Product.styled";
import { useImgPreload } from "../../../hooks/useImgPreload";
import { Image } from "../../../types";
import { Details } from "./components/Details";
import { ProductDescriptionProps } from "../ProductDescription";
import { modifiers } from "../../../utils";

type CategoryProductProps = ProductDescriptionProps & {
  initialImg: Image;
  largeImg: Image;
  tag: string;
  detailCase?: { price: number; maxQuantity: number; cartImg: string };
};

export { StyledProduct };

export const Product: FC<CategoryProductProps> = ({
  initialImg,
  largeImg,
  detailCase,
  tag,
  ...rest
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { desktop, isLargeImgLoaded, mobile, tablet } = useImgPreload({
    imgRef,
    largeImg,
    initialImg,
  });

  const ProductDescriptionProps = {
    href: detailCase ? undefined : `/details/${tag}`,
    ariaLabel: `SEE ${rest.name}`,
    ...rest,
  } as const;

  const { styledComponentId: Product } = StyledProduct;
  return (
    <StyledProduct $className={Product} $detailCase={!!detailCase}>
      <picture
        className={modifiers({
          baseClass: `${Product}_picture`,
          modifier: !isLargeImgLoaded && "blur",
        })}
      >
        <source media={myTheme.media.desktop} srcSet={desktop} />
        <source media={myTheme.media.tablet} srcSet={tablet} />
        <img
          className={`${Product}_img`}
          ref={imgRef}
          src={mobile}
          alt={`${rest.name} ${rest.category}`}
        />
      </picture>
      <div>
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
    </StyledProduct>
  );
};
