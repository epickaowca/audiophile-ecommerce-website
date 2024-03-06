import { styled, css } from "styled-components";

export const StyledNavList = styled.ul(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    & > li {
      list-style-type: none;
      & > a {
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        font-size: 0.9rem;
        &:hover {
          color: ${theme.orangeMedium};
        }
        &.active {
          border-bottom: 2px solid ${theme.orangeMedium};
        }
      }
    }

    @media ${theme.media.tablet} {
      flex-direction: row;
    }
  `;
});
