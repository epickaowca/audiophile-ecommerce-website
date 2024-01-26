import { FC } from "react";
import { createPortal } from "react-dom";
import { styled, css } from "styled-components";

type OverlayProps = {
  onClick?: () => void;
  displayOnDesktop?: boolean;
};

export const Overlay: FC<OverlayProps> = ({
  onClick,
  displayOnDesktop = true,
}) => {
  const clickHandler = () => {
    onClick && onClick();
  };
  return createPortal(
    <StyledOverlay
      $displayOnDesktop={displayOnDesktop}
      $cursorPointer={!!onClick}
      onClick={clickHandler}
    />,
    document.getElementById("root")!
  );
};

const StyledOverlay = styled.div<{
  $cursorPointer?: boolean;
  $displayOnDesktop: boolean;
}>(
  ({
    theme: {
      overlayZIndex,
      media: { desktop },
    },
    $cursorPointer,
    $displayOnDesktop,
  }) => {
    return css`
      cursor: ${$cursorPointer ? "pointer" : "initial"};
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: ${overlayZIndex};
      @media ${desktop} {
        display: ${$displayOnDesktop ? "block" : "none"};
      }
    `;
  }
);
