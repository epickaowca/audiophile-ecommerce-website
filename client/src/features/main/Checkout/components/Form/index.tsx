import { FC } from "react";
import { StyledForm, Row as R } from "./Form.styled";
import { Input } from "../Input";
import { PaymentDetails } from "../PaymentDetails";
import { UseFormRegister } from "react-hook-form";
import { FormInput } from "../../types";

type FormProps = {
  register: UseFormRegister<FormInput>;
};

export const Row = R;

export const Form: FC<FormProps> = ({ register }) => {
  return (
    <StyledForm>
      <h1>checkout</h1>
      <div className="form-section">
        <h2>Billing Details</h2>
        <Row>
          <Input
            register={register}
            name="name"
            label="Name"
            placeholder="Alexei Ward"
          />
          <Input
            register={register}
            name="email"
            label="Email Address"
            placeholder="alexei@mail.com"
          />
        </Row>
        <Row $half={true}>
          <Input
            register={register}
            name="phoneNumber"
            label="Phone Number"
            placeholder="+1 202-555-0136"
          />
        </Row>
      </div>
      <div className="form-section">
        <h2>Shipping Info</h2>
        <Row>
          <Input
            register={register}
            name="address"
            label="Address"
            placeholder="1137 Williams Avenue"
          />
        </Row>
        <Row>
          <Input
            register={register}
            name="zip"
            label="ZIP Code"
            placeholder="10001"
          />
          <Input
            register={register}
            name="city"
            label="City"
            placeholder="New York"
          />
        </Row>
        <Row $half={true}>
          <Input
            register={register}
            name="country"
            label="Country"
            placeholder="United States"
          />
        </Row>
      </div>
      <div className="form-section">
        <PaymentDetails register={register} />
      </div>
    </StyledForm>
  );
};
