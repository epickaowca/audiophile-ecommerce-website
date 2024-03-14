import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductDetails } from "../../features/main/ProductDetails";
import { Header } from "../../features/main/Header";

export const Details: FC = () => {
  // const params = useParams();
  return (
    <>
      <Header />
      <ProductDetails />
      {/* {params.id} */}
      {/* <Footer /> */}
    </>
  );
};
