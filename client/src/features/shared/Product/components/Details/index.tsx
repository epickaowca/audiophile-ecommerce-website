import { FC, useState } from "react";
import { StyledDetails } from "./Details.styled";
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

  const { styledComponentId: Details } = StyledDetails;
  return (
    <StyledDetails $className={Details}>
      <p className={`${Details}_price`}>$ {priceWithComma(price * quantity)}</p>
      <div className={`${Details}_btnsContainer`}>
        <QuantitySelector setValue={setQuantity} value={quantity} />
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
    </StyledDetails>
  );
};
