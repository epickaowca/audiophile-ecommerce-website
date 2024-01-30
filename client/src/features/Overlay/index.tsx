import { FC } from "react";
import { createPortal } from "react-dom";
import { StyledOverlay } from "./Overlay.styled";

type OverlayProps = {
  onClick?: () => void;
  displayOnDesktop?: boolean;
};

export const Overlay: FC<OverlayProps> = ({
  onClick,
  displayOnDesktop = true,
}) => {
  const attrs = { displayOnDesktop, cursorPointer: !!onClick, onClick };

  return createPortal(
    <StyledOverlay {...attrs} />,
    document.getElementById("root")!
  );
};
