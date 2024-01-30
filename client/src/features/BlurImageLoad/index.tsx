import { FC, ReactNode } from "react";
import { DefaultProps } from "./types";
import { StyledBlurImageLoad as S } from "./BlurImageLoad.styled";
export const StyledBlurImageLoad = S;

type BlurImageLoadProps = DefaultProps & {
  children: ReactNode;
};

export const BlurImageLoad: FC<BlurImageLoadProps> = ({
  isImageLoaded,
  children,
  image,
  withoutAnimation,
}) => {
  return (
    <StyledBlurImageLoad
      withoutAnimation={withoutAnimation}
      image={image}
      isImageLoaded={isImageLoaded}
    >
      {children}
    </StyledBlurImageLoad>
  );
};
