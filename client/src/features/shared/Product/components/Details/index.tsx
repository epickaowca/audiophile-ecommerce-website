import { FC, useState } from "react";
import { DetailsWrapper } from "./Details.styled";
import { QuantitySelector } from "../../../QuantitySelector";
import { Button } from "../../../Button";
import { priceWithComma } from "../../../../../utils";
import { useCart } from "../../../../main/Cart";

type DetailsProps = {
  cartImg: string;
  price: number;
  productName: string;
  productTag: string;
};

export const Details: FC<DetailsProps> = ({
  price,
  cartImg,
  productName,
  productTag,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useCart();
  return (
    <DetailsWrapper>
      <p className="price">{priceWithComma(price * quantity)}</p>
      <div className="CTA-container">
        <QuantitySelector
          onMinus={() => setQuantity((prev) => prev - 1)}
          onPlus={() => setQuantity((prev) => prev + 1)}
          onValueChange={(val) => setQuantity(+val)}
          value={quantity}
        />
        <Button
          as="button"
          text="ADD TO CART"
          variant="primary"
          onClick={() =>
            addProduct({
              imgSrc: cartImg,
              price,
              productName,
              productTag,
              quantity,
            })
          }
        />
      </div>
    </DetailsWrapper>
  );
};
