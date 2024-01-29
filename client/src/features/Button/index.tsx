import { FC, useRef, useEffect } from "react";
import arrowRightIcon from "./assets/icon-arrow-right.svg";
import { styled, css } from "styled-components";
import { myTheme } from "../../styles/styled";
import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary" | "noBackground";
  href?: string;
  onClick?: () => void;
  autoFocus?: boolean;
  asDiv?: boolean;
};

export const Button: FC<ButtonProps> = ({
  text,
  variant,
  href,
  onClick,
  autoFocus,
  asDiv,
}) => {
  const clickHandler = () => {
    onClick && onClick();
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (autoFocus) {
      buttonRef.current?.focus();
    }
  }, []);

  return (
    <StyledButton
      as={href ? Link : asDiv ? "div" : "button"}
      to={href}
      ref={buttonRef}
      onClick={clickHandler}
      $variant={variant}
    >
      {text}
      {variant === "noBackground" && (
        <img src={arrowRightIcon} alt="arrowRightIcon" />
      )}
    </StyledButton>
  );
};

export const StyledButton = styled.div<{
  $variant: ButtonProps["variant"];
}>(({ $variant, theme: { orangeMedium } }) => {
  return css`
    text-decoration: none;
    background-color: ${$variant === "primary" ? orangeMedium : "transparent"};
    border: ${$variant === "secondary" ? "1px solid #000000" : "none"};
    color: ${styledBtnColor[$variant]};
    font-weight: bold;
    padding: 17px 25px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    letter-spacing: 1.5px;
    cursor: pointer;
    &:hover {
      color: ${$variant === "noBackground" ? orangeMedium : "#ffffff"};
      background-color: ${styledBtnBgColorHover[$variant]};
    }

    & > img {
      margin-left: 5px;
    }
  `;
});

const styledBtnColor = {
  primary: "#ffffff",
  secondary: "#000000",
  noBackground: myTheme.grayText,
};

const styledBtnBgColorHover = {
  primary: myTheme.orangeLight,
  secondary: "#000000",
  noBackground: "transparent",
};
