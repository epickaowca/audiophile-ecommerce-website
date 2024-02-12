import { FC, useRef, useEffect } from "react";
import arrowRightIcon from "./assets/icon-arrow-right.svg";
import { StyledButton as s } from "./Button.styled";
import { DefaultProps, Variant as V } from "./types";
import { Link } from "react-router-dom";

type LinkProps = DefaultProps & {
  as: "link";
  href: string;
};

type ButtonProps = DefaultProps & {
  as?: "div";
  href?: undefined;
};

type Button = LinkProps | ButtonProps;

export type Variant = V;
export const StyledButton = s;
export const Button: FC<Button> = ({
  text,
  variant,
  ariaLabel,
  as,
  autoFocus,
  onClick,
  href,
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, []);

  const isDiv = as === "div";
  const isLink = as === "link";
  const attr = {
    ref,
    onClick,
    $variant: variant,
    "aria-label": ariaLabel,
    to: isLink ? href : undefined,
    as: isLink ? Link : isDiv ? "div" : "button",
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
