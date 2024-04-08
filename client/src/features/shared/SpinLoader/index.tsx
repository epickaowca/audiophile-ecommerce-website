import { FC } from "react";
import { styled, css } from "styled-components";

type SpinLoaderProps = {
  heightInPx?: number;
};

export const SpinLoader: FC<SpinLoaderProps> = ({ heightInPx }) => {
  if (heightInPx) {
    return (
      <Wrapper $heightInPx={heightInPx}>
        <div aria-label="Loading..." className="spin-loader"></div>
      </Wrapper>
    );
  } else {
    return <div aria-label="Loading..." className="spin-loader"></div>;
  }
};

const Wrapper = styled.div<{ $heightInPx: number }>(({ $heightInPx }) => {
  return css`
    position: relative;
    height: ${`${$heightInPx}px`};
  `;
});
