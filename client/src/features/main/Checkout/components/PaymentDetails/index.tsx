import { FC, useState } from "react";
import { Row } from "../Form";
import { Input } from "../Input";
import { Fieldset, CashInfoWrapper } from "./PaymentDetails.styled";
import cashIcon from "../../assets/icon-cash-on-delivery.svg";

export const PaymentDetails: FC = () => {
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
                type="radio"
                name="drone"
                value="e-Money"
                checked={state === "e-Money"}
                onChange={(e) => setState(e.target.value)}
              />
              e-Money
            </label>
            <label>
              <input
                type="radio"
                name="drone"
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
          <Input label="e-Money Number" placeholder="238521993" />
          <Input label="e-Money PIN" placeholder="6891" />
        </Row>
      )}
    </>
  );
};
