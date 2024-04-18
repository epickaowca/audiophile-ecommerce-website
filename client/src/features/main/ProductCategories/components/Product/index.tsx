import { FC, useEffect, useRef, useCallback } from "react";
import { Button } from "../../../../shared/Button";
import { Image, ProductCategories } from "../../../../../types";
import { StyledProduct, Li } from "./Product.styled";
import { useImgPreload } from "../../../../../hooks/useImgPreload";

type ProductProps = {
  initialImg: Image;
  largeImg: Image;
  productName: ProductCategories;
  href: string;
  autoFocus?: boolean;
  navigationCase?: boolean;
};

export const Product: FC<ProductProps> = ({
  productName,
  href,
  autoFocus,
  navigationCase,
  initialImg,
  largeImg,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const ref = useRef<HTMLAnchorElement>(null);
  const { isLargeImgLoaded, mobile } = useImgPreload({
    imgRef,
    initialImg,
    largeImg,
  });

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);

  const attrs = { ref, href };
  const { styledComponentId: Product } = StyledProduct;

  const ProductComponent = (
    <StyledProduct {...attrs} $className={Product} $blur={!isLargeImgLoaded}>
      <img
        className={`${Product}_img`}
        ref={imgRef}
        src={mobile}
        alt={productName}
      />
      <span className={`${Product}_name`}>{productName}</span>
      <Button as="div" text="SHOP" variant="noBackground" />
    </StyledProduct>
  );

  return navigationCase ? (
    <Li role="menuitem">{ProductComponent}</Li>
  ) : (
    ProductComponent
  );
};
