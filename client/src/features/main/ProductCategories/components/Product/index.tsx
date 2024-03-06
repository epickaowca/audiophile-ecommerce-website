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
  onEscapeKeyDown?: () => void;
};

export const Product: FC<ProductProps> = ({
  productName,
  href,
  autoFocus,
  navigationCase,
  onEscapeKeyDown,
  initialImg,
  largeImg,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const ref = useRef<HTMLAnchorElement>(null);
  const { img } = useImgPreload({
    imgRef,
    initialImg,
    largeImg,
  });

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
    if (!onEscapeKeyDown || !ref.current) return;

    const onEscapeHandler = (e: KeyboardEvent) => {
      e.key === "Escape" && onEscapeKeyDown();
    };

    ref.current.addEventListener("keydown", onEscapeHandler);
    return () => {
      ref.current?.removeEventListener("keydown", onEscapeHandler);
    };
  }, []);

  const attrs = { role: navigationCase ? "menuitem" : undefined, ref, href };

  const AnchorComponent = (
    <Anchor {...attrs} $isLargeImgLoaded={img.isLargeImgLoaded}>
      <img ref={imgRef} src={img.mobile} alt={productName} />
      <h4 className="product-name">{productName}</h4>
      <Button as="div" text="SHOP" variant="noBackground" />
    </Anchor>
  );

  return navigationCase ? <Li>{AnchorComponent}</Li> : AnchorComponent;
};
