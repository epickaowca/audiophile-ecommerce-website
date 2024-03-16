import { FC, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Cart } from "./features/main/Cart";

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

const Category = lazy(() =>
  import("./pages/Category").then((module) => {
    return { default: module.Category };
  })
);

const Details = lazy(() =>
  import("./pages/Details").then((module) => {
    return { default: module.Details };
  })
);

const App: FC = () => {
  useEffect(() => {
    document.getElementById("loader")?.remove();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const RouteWrapper = () => {
  return (
    <>
      <Suspense fallback={<div className="spin-loader"></div>}>
        <Cart cartType="modal" />
        <Outlet />
      </Suspense>
    </>
  );
};

export default App;
