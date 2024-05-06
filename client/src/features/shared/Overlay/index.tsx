import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { StyledOverlay, overlayZIndex } from "./Overlay.styled";
import { toggleBodyOverflow } from "./utils";

export { overlayZIndex };

type OverlayProps = {
  onClick?: () => void;
  displayOnDesktop?: boolean;
};

export const Overlay: FC<OverlayProps> = ({
  onClick,
  displayOnDesktop = true,
}) => {
  useEffect(() => {
    toggleBodyOverflow("hidden", !displayOnDesktop);
    return () => {
      toggleBodyOverflow("visible", !displayOnDesktop);
    };
  }, []);

  return createPortal(
    <StyledOverlay
      aria-label="overlay"
      onClick={onClick}
      $cursorPointer={!!onClick}
      $displayOnDesktop={displayOnDesktop}
    />,
    document.body
  );
};
