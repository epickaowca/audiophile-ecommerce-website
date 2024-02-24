import { FC, useEffect, useRef, useCallback } from "react";
import { Button } from "../../../../shared/Button";
import { ProductCategories } from "../../../../../data/constants";
import { Anchor, Li } from "./Product.styled";
import { useImgPreload } from "../../../../../hooks/useImgPreload";

type ProductProps = {
  imgSrcInit: string;
  imgLargeName: string;
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
  imgSrcInit,
  imgLargeName,
}) => {
  const imgRequire = useCallback(async () => {
    const mobile = await require(`../../assets/${imgLargeName}`);
    return { mobile };
  }, []);
  const imgRef = useRef<HTMLImageElement>(null);
  const ref = useRef<HTMLAnchorElement>(null);

  const { img } = useImgPreload({
    imgRef,
    imgRequire,
    initialImg: { mobile: imgSrcInit },
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
