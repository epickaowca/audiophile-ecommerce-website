import { FC, useState } from "react";
import { Cart } from "../Cart";
import { StyledCheckout } from "./Checkout.styled";
import { Form } from "./components/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "./types";
import { ThankYou } from "./components/ThankYou";

const phrasesArr = [
  "Harmonizing life's journey",
  "Music is the universal language of the soul",
  "Discover the soundtrack of your heart",
  "In every  beat, find your freedom",
  "Feel the rhythm, embrace the passion",
  "Tune into your inner harmony",
];

const phrase = phrasesArr[Math.floor(Math.random() * phrasesArr.length)];

export const Checkout: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const { styledComponentId: Checkout } = StyledCheckout;
  return (
    <>
      {isSubmitted && <ThankYou />}
      <StyledCheckout $className={Checkout}>
        <form className={`${Checkout}_form`} onSubmit={handleSubmit(onSubmit)}>
          <Form register={register} />
          <div className={`${Checkout}_cartWrapper`}>
            <div className={`${Checkout}_phraseWrapper`}>
              <p className={`${Checkout}_phrase`}>{phrase}</p>
            </div>
            <Cart cartType="static" />
          </div>
        </form>
      </StyledCheckout>
    </>
  );
};
