import { FC } from "react";
import { StyledQuantitySelector } from "./QuantitySelector.styled";

type QuantitySelectorProps = {
  value: number;
  onMinus: () => void;
  onPlus: () => void;
  onValueChange: (newVal: string) => void;
};

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  value,
  onMinus,
  onPlus,
  onValueChange,
}) => {
  return (
    <StyledQuantitySelector>
      <button onClick={onMinus}>-</button>
      <input value={value} onChange={(e) => onValueChange(e.target.value)} />
      <button onClick={onPlus}>+</button>
    </StyledQuantitySelector>
  );
};
