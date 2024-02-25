import { FC, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Home = lazy(() =>
  import("./pages/Home").then((module) => {
    return { default: module.Home };
  })
);

const Checkout = lazy(() =>
  import("./pages/Checkout").then((module) => {
    return { default: module.Checkout };
  })
);

const ProductCategory = lazy(() =>
  import("./pages/ProductCategory").then((module) => {
    return { default: module.ProductCategory };
  })
);

const ProductDetails = lazy(() =>
  import("./pages/ProductDetails").then((module) => {
    return { default: module.ProductDetails };
  })
);

const App: FC = () => {
  useEffect(() => {
    document.getElementById("loader")?.remove();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<ProductCategory />} />
          <Route path="/detail/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const RouteWrapper = () => {
  return (
    <>
      <Suspense fallback={<div className="spin-loader"></div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default App;
