import { FC } from "react";
import { styled, css } from "styled-components";

type SpinLoaderProps = {
  heightInPx: number;
};

export const SpinLoader: FC<SpinLoaderProps> = ({ heightInPx }) => {
  return (
    <Wrapper $heightInPx={heightInPx}>
      <div aria-label="spin-loader" className="spin-loader"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $heightInPx: number }>(({ $heightInPx }) => {
  return css`
    position: relative;
    height: ${`${$heightInPx}px`};
  `;
});
