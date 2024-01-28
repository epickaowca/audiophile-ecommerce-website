import { FC, ReactNode } from "react";
import { styled, css } from "styled-components";

type images = {
  mobile: string;
  tablet?: string;
  desktop?: string;
};

type BlurImageLoadProps = {
  isImageLoaded: boolean;
  children: ReactNode;
  image: images;
  withoutAnimation?: boolean;
};

export const BlurImageLoad: FC<BlurImageLoadProps> = ({
  isImageLoaded,
  children,
  image,
  withoutAnimation,
}) => {
  return (
    <StyledBlurImageLoad
      $withoutAnimation={withoutAnimation}
      $image={image}
      $isImageLoaded={isImageLoaded}
    >
      {children}
    </StyledBlurImageLoad>
  );
};

export const StyledBlurImageLoad = styled.div<{
  $isImageLoaded: boolean;
  $image: images;
  $withoutAnimation?: boolean;
}>(
  ({
    $isImageLoaded,
    $image,
    $withoutAnimation,
    theme: {
      media: { tablet, desktop },
    },
  }) => {
    return css`
      background-image: url(${$image.mobile});
      background-size: cover;
      background-position: center;

      &::before {
        content: "";
        ${($withoutAnimation || $isImageLoaded) &&
        css`
          content: none;
        `}
        position: absolute;
        inset: 0;
        animation: pulse 2.5s infinite;
        background-color: rgba(255, 255, 255, 0.1);
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

      ${$image.tablet &&
      css`
        @media ${tablet} {
          background-image: url(${$image.tablet});
        }
      `}

      ${$image.desktop &&
      css`
        @media ${desktop} {
          background-image: url(${$image.desktop});
        }
      `}
    `;
  }
);
