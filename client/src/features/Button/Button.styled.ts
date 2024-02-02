import { styled, css } from "styled-components";
import { myTheme } from "../../styles/styled";
import { Variant } from "./types";

export const StyledButton = styled.div<{
  $variant: Variant;
}>(({ $variant }) => {
  return css`
    background-color: ${bgColor[$variant].default};
    color: ${color[$variant].default};
    border: ${$variant === "secondary" ? "1px solid black" : "none"};
    text-decoration: none;
    font-weight: bold;
    padding: 17px 25px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    letter-spacing: 1.5px;
    cursor: pointer;
    &:hover {
      color: ${color[$variant].hover};
      background-color: ${bgColor[$variant].hover};
    }

    & > img {
      margin-left: 5px;
    }
  `;
});

const color = {
  primary: { default: "white", hover: "white" },
  secondary: { default: "black", hover: "white" },
  noBackground: { default: myTheme.grayDarkText, hover: myTheme.orangeMedium },
  black: { default: "white", hover: "white" },
};

const bgColor = {
  primary: { default: myTheme.orangeMedium, hover: myTheme.orangeLight },
  secondary: { default: "transparent", hover: "black" },
  noBackground: { default: "transparent", hover: "transparent" },
  black: { default: "black", hover: "#4C4C4C" },
};
