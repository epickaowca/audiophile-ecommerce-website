import { css } from "styled-components";

export const wrapperStyles = css(({ theme: { media } }) => {
  return css`
    margin: auto;
    max-width: 90%;
    @media ${media.desktop} {
      max-width: 1400px;
      padding: 0 50px;
    }
  `;
});
