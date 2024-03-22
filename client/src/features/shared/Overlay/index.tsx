import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { StyledOverlay } from "./Overlay.styled";
import { toggleBodyOverflow } from "./utils";

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

  const attrs = {
    $displayOnDesktop: displayOnDesktop,
    $cursorPointer: !!onClick,
    onClick,
  };

  return createPortal(
    <StyledOverlay {...attrs} />,
    document.getElementById("root")!
  );
};
