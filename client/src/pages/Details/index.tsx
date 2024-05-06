import { FC, lazy, Suspense, useState } from "react";
import { ProductDetails } from "@root/features/main/ProductDetails";
import { Header } from "@root/features/main/Header";

const Chunk = lazy(() =>
  import("./Chunk").then((m) => ({
    default: m.Chunk,
  }))
);

export const Details: FC = () => {
  const [isCriticalResLoaded, setIsCriticalResLoaded] = useState(false);

  const dataLoaded = () => {
    setIsCriticalResLoaded(true);
  };
  return (
    <>
      <Header />
      <ProductDetails dataLoaded={dataLoaded} />
      <Suspense>{isCriticalResLoaded && <Chunk />}</Suspense>
    </>
  );
};
