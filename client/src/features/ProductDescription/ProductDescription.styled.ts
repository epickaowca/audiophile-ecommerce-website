import { styled, css } from "styled-components";

export const StyledProductDescription = styled.div(({ theme }) => {
  return css`
    --gap: 25px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: var(--gap);

    & > .price {
      font-weight: bold;
    }

    & > .new-product {
      --letter-spacing: 10px;
      text-align: center;
      color: ${theme.orangeMedium};
      letter-spacing: var(--letter-spacing);
      margin-right: calc(var(--letter-spacing) * -1);
      font-size: 0.87rem;
    }

    & > .title_wrapper {
      & > h1 {
        color: #000000;
        --letter-spacing: 1px;
        font-size: 1.8rem;
        line-height: 1.8rem;
        letter-spacing: var(--letter-spacing);
        margin-right: calc(var(--letter-spacing) * -1);

        &:first-child {
          margin-bottom: 5px;
        }
        text-transform: uppercase;
      }
    }

    & > .description {
      max-width: 327px;
      line-height: 1.5rem;
      color: ${theme.grayDarkText};
      font-weight: 500;
      font-size: 0.95rem;
    }

    @media ${theme.media.tablet} {
      & > .title_wrapper {
        & > h1 {
          font-size: 2.5rem;
          line-height: 2.5rem;
        }
      }
      & > .description {
        max-width: 572px;
        line-height: 1.6rem;
      }
    }

    @media ${theme.media.desktop} {
      text-align: left;
      align-items: flex-start;
      & > .description {
        max-width: 445px;
        line-height: 1.6rem;
        font-size: 1rem;
        max-width: 445px;
      }
    }
  `;
});
