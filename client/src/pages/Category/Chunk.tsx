import { FC } from "react";
import { ProductCategories } from "@root/features/main/ProductCategories";
import { AudioGear } from "@root/features/main/AudioGear";
import { Footer } from "@root/features/main/Footer";

export const Chunk: FC = () => {
  return (
    <>
      <ProductCategories />
      <AudioGear />
      <Footer />
    </>
  );
};
