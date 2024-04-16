import { FC, useState } from "react";
import { StyledRow } from "../Form";
import { StyledFieldset } from "./PaymentDetails.styled";
import cashIcon from "../../assets/icon-cash-on-delivery.svg";
import { UseFormRegister } from "react-hook-form";
import { FormInput } from "../../types";
import { Input } from "../Input";
import { InputRadio } from "../InputRadio";

type PaymentDetailsProps = {
  register: UseFormRegister<FormInput>;
};

export const PaymentDetails: FC<PaymentDetailsProps> = ({ register }) => {
  const [state, setState] = useState("e-Money");
  const { styledComponentId: Fieldset } = StyledFieldset;

  const inputRadioProps = {
    name: "paymentMethod",
    onChange: (e: any) => setState(e.target.value),
    register,
  } as const;
  return (
    <>
      <StyledRow>
        <StyledFieldset $className={Fieldset}>
          <h2 className={`${Fieldset}_title`}>Payment Method</h2>
          <div className={`${Fieldset}_radioBtnsContainer`}>
            <InputRadio {...inputRadioProps} value="e-Money" defaultChecked>
              e-Money
            </InputRadio>
            <InputRadio {...inputRadioProps} value="cash">
              Cash on Delivery
            </InputRadio>
          </div>
        </StyledFieldset>
      </StyledRow>
      {state === "cash" ? (
        <div>
          <img src={cashIcon} alt="cash-icon" />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      ) : (
        <StyledRow>
          <Input
            register={register}
            name="e-MoneyNumber"
            label="e-Money Number"
            placeholder="238521993"
          />
          <Input
            register={register}
            name="e-MoneyPIN"
            label="e-Money PIN"
            placeholder="6891"
          />
        </StyledRow>
      )}
    </>
  );
};
