import { FC } from "react";
import { ProductDetails } from "../../features/main/ProductDetails";
import { Header } from "../../features/main/Header";
import { ProductGallery } from "../../features/main/ProductGallery";
import { ProductCategories } from "../../features/main/ProductCategories";
import { AudioGear } from "../../features/main/AudioGear";
import { Footer } from "../../features/main/Footer";

export const Details: FC = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <ProductGallery />
      <ProductCategories />
      <AudioGear />
      <Footer />
    </>
  );
};
