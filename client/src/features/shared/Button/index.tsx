import { FC, useRef } from "react";
import arrowRightIcon from "./assets/icon-arrow-right.svg";
import { StyledButton } from "./Button.styled";
import { ButtonProps, Variant } from "./types";
import { Link } from "react-router-dom";

export { StyledButton };
export type { Variant };
export const Button: FC<ButtonProps> = ({
  text,
  variant = "primary",
  ariaLabel,
  as,
  onClick,
  href,
  type,
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const isLink = as === "link";
  const attr = {
    ref,
    onClick,
    $variant: variant,
    "aria-label": ariaLabel,
    to: isLink ? href : undefined,
    as: isLink ? Link : as === "button" ? "button" : "div",
    type,
  } as const;

  return (
    <StyledButton {...attr}>
      {text}
      {variant === "noBackground" && (
        <img src={arrowRightIcon} alt="arrowRightIcon" />
      )}
    </StyledButton>
  );
};
