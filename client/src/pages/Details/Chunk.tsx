import { FC } from "react";
import { ProductGallery } from "@root/features/main/ProductGallery";
import { ProductCategories } from "@root/features/main/ProductCategories";
import { AudioGear } from "@root/features/main/AudioGear";
import { Footer } from "@root/features/main/Footer";

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
