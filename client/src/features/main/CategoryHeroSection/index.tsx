import { FC } from "react";
import { ProductCategories } from "../../../types";
import { styled, css } from "styled-components";

export const CategoryHeroSection: FC<{ title: ProductCategories }> = ({
  title,
}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
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
