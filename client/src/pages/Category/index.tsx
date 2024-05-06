import { FC, lazy, useState, Suspense } from "react";
import { Header } from "@root/features/main/Header";
import { ProductList } from "@root/features/main/ProductsList";

const Chunk = lazy(() =>
  import("./Chunk").then((m) => ({
    default: m.Chunk,
  }))
);

export const Category: FC = () => {
  const [isCriticalResLoaded, setIsCriticalResLoaded] = useState(false);

  const dataLoaded = () => {
    setIsCriticalResLoaded(true);
  };

  return (
    <>
      <Header displayHeadline={true} />
      <ProductList dataLoaded={dataLoaded} />
      <Suspense>{isCriticalResLoaded && <Chunk />}</Suspense>
    </>
  );
};
