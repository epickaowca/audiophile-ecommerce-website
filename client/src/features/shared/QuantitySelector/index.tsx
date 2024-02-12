import { FC } from "react";
import { StyledQuantitySelector } from "./QuantitySelector.styled";

type QuantitySelectorProps = {
  value: number;
  onMinus: () => void;
  onPlus: () => void;
  onValueChange: (newVal: string) => void;
  ariaLabel?: string;
};

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  value,
  onMinus,
  onPlus,
  onValueChange,
  ariaLabel,
}) => {
  return (
    <StyledQuantitySelector>
      <button tabIndex={-1} onClick={onMinus}>
        -
      </button>
      <input
        aria-label={ariaLabel || "quantity"}
        min={1}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        type="text"
        inputMode="numeric"
      />
      <button tabIndex={-1} onClick={onPlus}>
        +
      </button>
    </StyledQuantitySelector>
  );
};
