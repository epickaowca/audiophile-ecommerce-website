import { FC, useState } from "react";
import { DetailsWrapper } from "./Details.styled";
import { QuantitySelector } from "../../../QuantitySelector";
import { Button } from "../../../Button";
import { priceWithComma } from "../../../../../utils";
import { useCart } from "../../../../main/Cart";

type DetailsProps = {
  cartImg: string;
  price: number;
  name: string;
  tag: string;
};

export const Details: FC<DetailsProps> = ({ price, cartImg, name, tag }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useCart();
  return (
    <DetailsWrapper>
      <p className="price">$ {priceWithComma(price * quantity)}</p>
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
          ariaLabel={`ADD ${name} TO CART`}
          onClick={() =>
            addProduct({
              imgSrc: cartImg,
              price,
              name,
              tag,
              quantity,
            })
          }
        />
      </div>
    </DetailsWrapper>
  );
};
