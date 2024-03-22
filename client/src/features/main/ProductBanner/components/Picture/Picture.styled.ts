import { styled, css } from "styled-components";
import { CardType } from "../../types";
import { cardsHeight } from "../Card";

export const StyledPictureFullBg = styled.picture<{
  $isImgLoaded: boolean;
  $cardType: CardType;
}>(({ theme: { media }, $isImgLoaded, $cardType }) => {
  return css`
    filter: ${$isImgLoaded ? "none" : "blur(2px)"};
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    & > img {
      width: 100%;
      min-height: ${cardsHeight[$cardType].mobile};
    }

    @media ${media.tablet} {
      & > img {
        min-height: ${cardsHeight[$cardType].desktop};
      }
    }

    @media ${media.desktop} {
      & > img {
        min-height: ${cardsHeight[$cardType].desktop};
      }
    }
  `;
});

export const StyledPicture = styled.picture<{
  $isImgLoaded: boolean;
  $cardType: CardType;
}>(({ theme: { media }, $isImgLoaded }) => {
  return css`
    filter: ${$isImgLoaded ? "none" : "blur(5px)"};
    position: absolute;
    left: 50%;
    top: 150px;
    transform: translate(-50%, -50%);
    width: 160px;
    margin-top: -7px;
    z-index: 2;
    & > img {
      width: 100%;
    }

    @media ${media.tablet} {
      width: 220px;
      margin-top: 0;
      top: 190px;
    }

    @media ${media.desktop} {
      align-self: flex-end;
      margin-bottom: -17px;
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 400px;
      position: relative;
      left: initial;
      top: initial;
      transform: initial;
    }
  `;
});
