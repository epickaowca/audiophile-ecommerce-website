import { FC, useEffect, useRef } from "react";
import { Button } from "../../../Button";
import { ProductCategories } from "../../../../data/constants";
import { Anchor, Li } from "./Product.styled";

type ProductProps = {
  imgSrc: string;
  productName: ProductCategories;
  href: string;
  autoFocus?: boolean;
  navigationCase?: boolean;
};

export const Product: FC<ProductProps> = ({
  imgSrc,
  productName,
  href,
  autoFocus,
  navigationCase,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
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
