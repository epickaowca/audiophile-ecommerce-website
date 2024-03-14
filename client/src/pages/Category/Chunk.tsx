import { FC } from "react";
import { ProductCategories } from "../../features/main/ProductCategories";
import { AudioGear } from "../../features/main/AudioGear";
import { Footer } from "../../features/main/Footer";

export const Chunk: FC = () => {
  return (
    <>
      <ProductCategories />
      <AudioGear />
      <Footer />
    </>
  );
};
