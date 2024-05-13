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
  const { styledComponentId: QuantitySelector } = StyledQuantitySelector;
  return (
    <StyledQuantitySelector
      $className={QuantitySelector}
      $small={!!checkoutCase}
    >
      <button
        className={`${QuantitySelector}_button`}
        tabIndex={-1}
        onClick={() => setValue(value - 1)}
      >
        -
      </button>
      <input
        className={`${QuantitySelector}_input`}
        aria-label={ariaLabel || "quantity"}
        min={1}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        type="number"
      />
      <button
        className={`${QuantitySelector}_button`}
        tabIndex={-1}
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
    </StyledQuantitySelector>
  );
};
