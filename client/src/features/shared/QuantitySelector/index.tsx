import { FC } from "react";
import { StyledQuantitySelector } from "./QuantitySelector.styled";

type QuantitySelectorProps = {
  value: number;
  onMinus: () => void;
  onPlus: () => void;
  onValueChange: (newVal: string) => void;
  ariaLabel?: string;
  checkoutCase?: boolean;
};

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  value,
  onMinus,
  onPlus,
  onValueChange,
  ariaLabel,
  checkoutCase,
}) => {
  return (
    <StyledQuantitySelector $checkoutCase={!!checkoutCase}>
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
