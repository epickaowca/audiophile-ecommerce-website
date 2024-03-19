import { FC } from "react";
import { StyledForm, Row as R } from "./Form.styled";
import { Input } from "../Input";
import { PaymentDetails } from "../PaymentDetails";

export const Row = R;

export const Form: FC = () => {
  return (
    <StyledForm>
      <h1>checkout</h1>
      <div className="form-section">
        <h2>Billing Details</h2>
        <Row>
          <Input label="Name" placeholder="Alexei Ward" />
          <Input label="Email Address" placeholder="alexei@mail.com" />
        </Row>
        <Row $half={true}>
          <Input label="Phone Number" placeholder="+1 202-555-0136" />
        </Row>
      </div>
      <div className="form-section">
        <h2>Shipping Info</h2>
        <Row>
          <Input label="Address" placeholder="1137 Williams Avenue" />
        </Row>
        <Row>
          <Input label="ZIP Code" placeholder="10001" />
          <Input label="City" placeholder="New York" />
        </Row>
        <Row $half={true}>
          <Input label="Country" placeholder="United States" />
        </Row>
      </div>
      <div className="form-section">
        <PaymentDetails />
      </div>
    </StyledForm>
  );
};
