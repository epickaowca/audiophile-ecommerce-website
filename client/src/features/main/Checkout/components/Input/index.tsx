import { FC, useId } from "react";
import { Wrapper } from "./Input.styled";

type InputProps = {
  label: string;
  placeholder: string;
};

export const Input: FC<InputProps> = ({ label, placeholder }) => {
  const id = useId();
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={placeholder} type="text" />
    </Wrapper>
  );
};
