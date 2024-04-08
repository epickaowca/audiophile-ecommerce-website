import { styled, css } from "styled-components";
import { StyledButton } from "../../../../shared/Button";

export const Li = styled.li`
  list-style-type: none;
  width: 100%;
  max-width: 327px;
`;

export const Anchor = styled.a<{ $isLargeImgLoaded: boolean }>(
  ({ theme: { grayLight, orangeMedium }, $isLargeImgLoaded }) => {
    return css`
      width: 100%;
      height: 165px;
      background-color: ${grayLight};
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      text-decoration: none;
      border-radius: 8px;
      position: relative;
      padding-top: 100px;
      padding-bottom: 80px;

      & > img {
        filter: ${$isLargeImgLoaded ? "none" : "blur(4px)"};
        width: 155px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: -25%;
      }

      & > .product-name {
        color: #000;
        font-size: 1rem;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: bold;
      }

      & > ${StyledButton} {
        margin: auto;
      }

      &:hover {
        & > ${StyledButton} {
          color: ${orangeMedium};
        }
      }
    `;
  }
);
