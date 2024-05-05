import { FC } from "react";
import { styled, css } from "styled-components";

type SpinLoaderProps = {
  height?: string;
};

export const SpinLoader: FC<SpinLoaderProps> = ({ height }) => {
  const loadingDiv = (
    <div aria-label="Loading..." className="spin-loader"></div>
  );

  if (height) {
    return <Wrapper $height={height}>{loadingDiv}</Wrapper>;
  } else {
    return loadingDiv;
  }
};

const Wrapper = styled.div<{ $height: string }>(({ $height }) => {
  return css`
    margin: auto;
    position: relative;
    height: ${$height};
  `;
});
