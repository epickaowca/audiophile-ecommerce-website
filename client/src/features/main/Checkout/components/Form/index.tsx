import { FC } from "react";
import { StyledForm, StyledRow } from "./Form.styled";
import { Input } from "../Input";
import { PaymentDetails } from "../PaymentDetails";
import { UseFormRegister } from "react-hook-form";
import { FormInput } from "../../types";

export { StyledRow };

type FormProps = {
  register: UseFormRegister<FormInput>;
};

export const Form: FC<FormProps> = ({ register }) => {
  const { styledComponentId: Form } = StyledForm;
  return (
    <StyledForm $className={Form}>
      <h1 className={`${Form}_title`}>checkout</h1>
      <div className={`${Form}_section`}>
        <h2 className={`${Form}_sectionTitle`}>Billing Details</h2>
        <StyledRow>
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
        </StyledRow>
        <StyledRow $half>
          <Input
            register={register}
            name="phoneNumber"
            label="Phone Number"
            placeholder="+1 202-555-0136"
          />
        </StyledRow>
      </div>
      <div className={`${Form}_section`}>
        <h2 className={`${Form}_sectionTitle`}>Shipping Info</h2>
        <StyledRow>
          <Input
            register={register}
            name="address"
            label="Address"
            placeholder="1137 Williams Avenue"
          />
        </StyledRow>
        <StyledRow>
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
        </StyledRow>
        <StyledRow $half>
          <Input
            register={register}
            name="country"
            label="Country"
            placeholder="United States"
          />
        </StyledRow>
      </div>
      <div className={`${Form}_section`}>
        <h2 className={`${Form}_sectionTitle`}>Payment Details</h2>
        <PaymentDetails register={register} />
      </div>
    </StyledForm>
  );
};
