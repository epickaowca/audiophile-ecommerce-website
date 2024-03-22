import { FC, ReactNode } from "react";
import { StyledCard } from "./Card.styled";
import { CardType } from "../../types";
import { cardsHeight as CH } from "./constants";

type CardProps = {
  cardType: CardType;
  children?: ReactNode;
};

export const cardsHeight = CH;

export const Card: FC<CardProps> = ({ cardType, children }) => {
  return <StyledCard $cardType={cardType}>{children}</StyledCard>;
};
