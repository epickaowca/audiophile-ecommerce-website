import { FC } from "react";
import arrowRightIcon from "./assets/icon-arrow-right.svg";
import { styled, css } from "styled-components";
import { myTheme } from "../../styles/styled";
import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary" | "noBackground";
  href?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ text, variant, href, onClick }) => {
  const clickHandler = () => {
    onClick && onClick();
  };
  const buttonComponent = (
    <StyledButton onClick={clickHandler} $variant={variant}>
      {text}
      {variant === "noBackground" && (
        <img src={arrowRightIcon} alt="arrowRightIcon" />
      )}
    </StyledButton>
  );
  return href ? <Link to={href}>{buttonComponent}</Link> : buttonComponent;
};

export const StyledButton = styled.button<{ $variant: ButtonProps["variant"] }>(
  ({ $variant, theme: { orangeMedium } }) => {
    return css`
      background-color: ${$variant === "primary"
        ? orangeMedium
        : "transparent"};
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
  }
);

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
