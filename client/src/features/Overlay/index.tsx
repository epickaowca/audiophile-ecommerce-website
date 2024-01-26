import { FC } from "react";
import { createPortal } from "react-dom";
import { styled, css } from "styled-components";

export const Overlay: FC = () => {
  return createPortal(<StyledOverlay />, document.getElementById("root")!);
};

const StyledOverlay = styled.div(({ theme }) => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: ${theme.overlayZIndex};
  `;
});
