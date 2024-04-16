import { FC, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormInput } from "../../types";
import { styled, css } from "styled-components";

type InputRadioProps = {
  register: UseFormRegister<FormInput>;
  value: string;
  name: keyof FormInput;
  onChange: (p: React.ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  children?: ReactNode;
};

export const InputRadio: FC<InputRadioProps> = ({
  register,
  name,
  children,
  ...rest
}) => {
  const { styledComponentId: Label } = StyledLabel;
  return (
    <StyledLabel $className={Label}>
      <input
        className={`${Label}_input`}
        type="radio"
        {...register(name)}
        {...rest}
      />
      {children}
    </StyledLabel>
  );
};

const StyledLabel = styled.label<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      padding: 20px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-radius: 7px;
      font-weight: bold;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:focus {
        border: 1px solid ${theme.orangeMedium};
      }

      .${$className} {
        &_input {
          margin-right: 15px;
          accent-color: ${theme.orangeMedium};
          height: 20px;
          width: 20px;
        }
      }
    `;
  }
);
