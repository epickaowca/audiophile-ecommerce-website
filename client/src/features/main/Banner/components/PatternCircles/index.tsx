import { FC } from "react";
import { StyledPatternCircles } from "./PatternCircles.styled";
import patternCircles from "../../assets/pattern-circles.svg";

export const PatternCircles: FC = () => {
  return <StyledPatternCircles src={patternCircles} alt="patternCircles" />;
};
