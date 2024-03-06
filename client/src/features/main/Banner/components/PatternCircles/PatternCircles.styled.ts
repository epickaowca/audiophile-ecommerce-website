import { styled, css } from "styled-components";

export const StyledPatternCircles = styled.img(({ theme: { media } }) => {
  return css`
    --translateY: -50%;
    position: absolute;
    width: 550px;
    left: 50%;
    top: 150px;
    transform: translate(-50%, var(--translateY));
    pointer-events: none;
    z-index: 1;

    @media ${media.tablet} {
      top: 190px;
      width: 950px;
    }

    @media ${media.desktop} {
      --translateY: 50%;
      top: initial;
      left: calc(28% + 10px);
      bottom: 100px;
      width: 1000px;
    }
  `;
});
