import { FC, useState } from "react";
import { Row } from "../Form";
import { Fieldset, CashInfoWrapper } from "./PaymentDetails.styled";
import cashIcon from "../../assets/icon-cash-on-delivery.svg";
import { UseFormRegister } from "react-hook-form";
import { FormInput } from "../../types";
import { Input } from "../Input";

type PaymentDetailsProps = {
  register: UseFormRegister<FormInput>;
};

export const PaymentDetails: FC<PaymentDetailsProps> = ({ register }) => {
  const [state, setState] = useState("e-Money");

  return (
    <>
      <h2>Payment Details</h2>
      <Row>
        <Fieldset>
          <h2>Payment Method</h2>
          <div className="btns-wrapper">
            <label>
              <input
                {...register("paymentMethod")}
                type="radio"
                value="e-Money"
                checked={state === "e-Money"}
                onChange={(e) => setState(e.target.value)}
              />
              e-Money
            </label>
            <label>
              <input
                {...register("paymentMethod")}
                type="radio"
                value="cash"
                checked={state === "cash"}
                onChange={(e) => setState(e.target.value)}
              />
              Cash on Delivery
            </label>
          </div>
        </Fieldset>
      </Row>
      {state === "cash" ? (
        <CashInfoWrapper>
          <img src={cashIcon} alt="cash-icon" />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </CashInfoWrapper>
      ) : (
        <Row>
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
        </Row>
      )}
    </>
  );
};
