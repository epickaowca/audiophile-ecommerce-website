import { FC, lazy, useEffect, useState, Suspense } from "react";
import { Header } from "../../features/main/Header";
import { ProductList } from "../../features/main/ProductsList";

const Chunk = lazy(() =>
  import("./Chunk").then((m) => ({
    default: m.Chunk,
  }))
);

export const Category: FC = () => {
  const [isCriticalResLoaded, setIsCriticalResLoaded] = useState(false);

  useEffect(() => {
    setIsCriticalResLoaded(true);
  }, []);
  return (
    <>
      <Header displayHeadline={true} />
      <ProductList />
      <Suspense>{isCriticalResLoaded && <Chunk />}</Suspense>
    </>
  );
};
