import { FC } from "react";
import { StyledQuantitySelector } from "./QuantitySelector.styled";

type QuantitySelectorProps = {
  value: number;
  setValue: (quantity: number) => void;
  ariaLabel?: string;
  checkoutCase?: boolean;
};

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  value,
  setValue,
  ariaLabel,
  checkoutCase,
}) => {
  return (
    <StyledQuantitySelector $checkoutCase={!!checkoutCase}>
      <button tabIndex={-1} onClick={() => setValue(value - 1)}>
        -
      </button>
      <input
        aria-label={ariaLabel || "quantity"}
        min={1}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        type="text"
        inputMode="numeric"
      />
      <button tabIndex={-1} onClick={() => setValue(value + 1)}>
        +
      </button>
    </StyledQuantitySelector>
  );
};
