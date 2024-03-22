import { FC } from "react";
import { ProductGallery } from "../../features/main/ProductGallery";
import { ProductCategories } from "../../features/main/ProductCategories";
import { AudioGear } from "../../features/main/AudioGear";
import { Footer } from "../../features/main/Footer";

export const Chunk: FC = () => {
  return (
    <>
      <ProductGallery />
      <ProductCategories />
      <AudioGear />
      <Footer />
    </>
  );
};
