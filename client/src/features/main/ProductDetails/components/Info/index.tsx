import { FC } from "react";
import { StyledInfo } from "./Info.styled";

type InfoProps = {
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
};

export const Info: FC<InfoProps> = ({ features, includes }) => {
  const { styledComponentId: Info } = StyledInfo;
  return (
    <StyledInfo $className={Info}>
      <div className={`${Info}_featuresWrapper`}>
        <h2 className={`${Info}_featuresTitle`}>FEATURES</h2>
        {features.split("\n\n").map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
      <div className={`${Info}_includesWrapper`}>
        <h2 className={`${Info}_includesTitle`}>IN THE BOX</h2>
        {includes.map(({ item, quantity }) => (
          <div key={item} className={`${Info}_include`}>
            <span>{quantity}x</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </StyledInfo>
  );
};
