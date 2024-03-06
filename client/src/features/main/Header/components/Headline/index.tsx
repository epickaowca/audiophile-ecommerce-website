import { FC } from "react";
import { styled, css } from "styled-components";
import { useParams } from "react-router-dom";

export const Headline: FC = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <h1>{id}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => {
  return css`
    width: 100%;
    background-color: #000;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.15);

    & > h1 {
      color: white;
      text-transform: uppercase;
      font-size: 1.8rem;
    }

    @media ${theme.media.tablet} {
      height: 220px;
      & > h1 {
        font-size: 2.5rem;
      }
    }
  `;
});
