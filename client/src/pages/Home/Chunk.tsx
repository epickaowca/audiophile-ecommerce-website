import { BannersWrapper } from "./BannersWrapper";
import { AudioGear } from "../../features/main/AudioGear";
import { Footer } from "../../features/main/Footer";
import { FC } from "react";

export const Chunk: FC = () => {
  return (
    <>
      <BannersWrapper />
      <AudioGear />
      <Footer />
    </>
  );
};
