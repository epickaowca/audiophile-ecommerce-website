import { FC, ReactNode } from "react";
import { CardType } from "../../types";
import { StyledPicture, StyledPictureFullBg } from "./Picture.styled";

export const Picture: FC<{
  cardType: CardType;
  isImgLoaded: boolean;
  isFullBg?: boolean;
  children?: ReactNode;
}> = ({ children, isFullBg, cardType, isImgLoaded }) => {
  if (isFullBg) {
    return (
      <StyledPictureFullBg $cardType={cardType} $isImgLoaded={isImgLoaded}>
        {children}
      </StyledPictureFullBg>
    );
  }
  return (
    <StyledPicture $cardType={cardType} $isImgLoaded={isImgLoaded}>
      {children}
    </StyledPicture>
  );
};
