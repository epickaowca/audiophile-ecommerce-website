import { FC, useId } from "react";
import { Wrapper } from "./Input.styled";
import { UseFormRegister } from "react-hook-form";
import { FormInput } from "../../types";

type InputProps = {
  name: keyof FormInput;
  label: string;
  placeholder: string;
  register: UseFormRegister<FormInput>;
};

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  register,
  name,
}) => {
  const id = useId();
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input
        {...register(name)}
        id={id}
        placeholder={placeholder}
        type="text"
      />
    </Wrapper>
  );
};
