import { styled, css } from "styled-components";

export const StyledOverlay = styled.div<{
  cursorPointer?: boolean;
  displayOnDesktop: boolean;
}>(({ theme: { overlayZIndex, media }, cursorPointer, displayOnDesktop }) => {
  return css`
    cursor: ${cursorPointer ? "pointer" : "initial"};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: ${overlayZIndex};
    @media ${media.desktop} {
      display: ${displayOnDesktop ? "block" : "none"};
    }
  `;
});
