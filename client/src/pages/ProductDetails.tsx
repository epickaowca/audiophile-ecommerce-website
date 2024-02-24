import { FC } from "react";
import { Header } from "../features/main/Header";
import { Footer } from "../features/main/Footer";
import { useParams, Link } from "react-router-dom";

export const ProductDetails: FC = () => {
  const params = useParams();
  return (
    <>
      <Header />
      <p>ProductDetails</p>
      {params.id}
      <Footer />
    </>
  );
};
