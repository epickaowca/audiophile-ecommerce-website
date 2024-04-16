import { FC, useId } from "react";
import { StyledInput } from "./Input.styled";
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
  register,
  placeholder,
  name,
}) => {
  const id = useId();
  const { styledComponentId: Input } = StyledInput;
  return (
    <StyledInput $className={Input}>
      <label className={`${Input}_label`} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${Input}_input`}
        {...register(name)}
        required
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </StyledInput>
  );
};
