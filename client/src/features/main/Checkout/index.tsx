import { FC } from "react";
import { Cart } from "../Cart";
import { CartWrapper, StyledCheckout } from "./Checkout.styled";
import { Form } from "./components/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "./types";

const phrasesArr = [
  "Harmonizing life's journey",
  "Music is the universal language of the soul",
  "Discover the soundtrack of your heart",
  "In every  beat, find your freedom",
  "Feel the rhythm, embrace the passion",
  "Tune into your inner harmony",
];

export const Checkout: FC = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <StyledCheckout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form register={register} />
        <CartWrapper>
          <div className="black-box">
            <p>{phrasesArr[Math.floor(Math.random() * phrasesArr.length)]}</p>
          </div>
          <Cart cartType="static" />
        </CartWrapper>
      </form>
    </StyledCheckout>
  );
};
