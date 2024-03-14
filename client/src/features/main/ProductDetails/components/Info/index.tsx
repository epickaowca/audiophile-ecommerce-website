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
  return (
    <StyledInfo>
      <div className="box features">
        <h2>FEATURES</h2>
        {features.split("\n\n").map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
      <div className="box includes">
        <h2>IN THE BOX</h2>
        <div className="includes_wrapper">
          {includes.map((box) => (
            <div key={box.item}>
              <span className="quantity">{box.quantity}x</span>
              <span className="item">{box.item}</span>
            </div>
          ))}
        </div>
      </div>
    </StyledInfo>
  );
};
