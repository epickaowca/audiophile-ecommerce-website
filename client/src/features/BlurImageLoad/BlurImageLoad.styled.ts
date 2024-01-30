import { styled, css } from "styled-components";
import { DefaultProps } from "./types";

export const StyledBlurImageLoad = styled.div<DefaultProps>(
  ({
    isImageLoaded,
    image,
    withoutAnimation,
    theme: {
      media: { tablet, desktop },
    },
  }) => {
    return css`
      background-image: url(${image.mobile});
      background-size: cover;
      background-position: center;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        animation: pulse 2.5s infinite;
        background-color: rgba(255, 255, 255, 0.1);
        ${(withoutAnimation || isImageLoaded) &&
        css`
          content: none;
        `}
      }

      @keyframes pulse {
        0% {
          background-color: rgba(255, 255, 255, 0);
        }
        50% {
          background-color: rgba(255, 255, 255, 0.1);
        }
        100% {
          background-color: rgba(255, 255, 255, 0);
        }
      }

      ${image.tablet &&
      css`
        @media ${tablet} {
          background-image: url(${image.tablet});
        }
      `}

      ${image.desktop &&
      css`
        @media ${desktop} {
          background-image: url(${image.desktop});
        }
      `}
    `;
  }
);
