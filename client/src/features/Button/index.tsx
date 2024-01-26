import { FC } from "react";
import arrowRightIcon from "./assets/icon-arrow-right.svg";
import { styled, css } from "styled-components";
import { myTheme } from "../../styles/styled";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary" | "noBackground";
};

export const Button: FC<ButtonProps> = ({ text, variant }) => {
  return (
    <StyledButton $variant={variant}>
      {text}
      {variant === "noBackground" && (
        <img src={arrowRightIcon} alt="arrowRightIcon" />
      )}
    </StyledButton>
  );
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
      padding: 10px 15px;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      letter-spacing: 1.5px;
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
