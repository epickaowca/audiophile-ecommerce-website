import { FC, useEffect, useRef, useCallback } from "react";
import { Button } from "../../../../shared/Button";
import { Image, ProductCategories } from "../../../../../types";
import { Anchor, Li } from "./Product.styled";
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

  const attrs = { role: navigationCase ? "menuitem" : undefined, ref, href };

  const AnchorComponent = (
    <Anchor {...attrs} $isLargeImgLoaded={isLargeImgLoaded}>
      <img ref={imgRef} src={mobile} alt={productName} />
      <span className="product-name">{productName}</span>
      <Button as="div" text="SHOP" variant="noBackground" />
    </Anchor>
  );

  return navigationCase ? <Li>{AnchorComponent}</Li> : AnchorComponent;
};
