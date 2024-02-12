import { FC, useEffect, useRef } from "react";
import { Button } from "../../../../shared/Button";
import { ProductCategories } from "../../../../../data/constants";
import { Anchor, Li } from "./Product.styled";

type ProductProps = {
  imgSrc: string;
  productName: ProductCategories;
  href: string;
  autoFocus?: boolean;
  navigationCase?: boolean;
  onEscapeKeyDown?: () => void;
};

export const Product: FC<ProductProps> = ({
  imgSrc,
  productName,
  href,
  autoFocus,
  navigationCase,
  onEscapeKeyDown,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

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
    <Anchor {...attrs}>
      <img className="product-img" src={imgSrc} alt={productName} />
      <h4 className="product-name">{productName}</h4>
      <Button as="div" text="SHOP" variant="noBackground" />
    </Anchor>
  );

  return navigationCase ? <Li>{AnchorComponent}</Li> : AnchorComponent;
};
