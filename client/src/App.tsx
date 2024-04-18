import { FC, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Cart } from "./features/main/Cart";
import { SpinLoader } from "./features/shared/SpinLoader";

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

const ErrorPage = lazy(() =>
  import("./features/main/ErrorPage").then((module) => {
    return { default: module.ErrorPage };
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
            <Route
              path="*"
              element={<ErrorPage message="This page does not exist" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const RouteWrapper = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Cart cartType="modal" />
        <Outlet />
      </Suspense>
    </>
  );
};

const Loading: FC = () => {
  useEffect(() => {
    document.getElementById("root")!.ariaBusy = "true";
    return () => {
      document.getElementById("root")!.ariaBusy = "false";
    };
  }, []);
  return <SpinLoader />;
};
export default App;
