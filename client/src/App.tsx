import { FC, lazy, Suspense } from "react";

// import { ProductCategory } from "./pages/ProductCategory";
// import { ProductDetails } from "./pages/ProductDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  // {
  //   path: "/productCategory/:category",
  //   element: <ProductCategory />,
  // },
  // { path: "/productDetails", element: <ProductDetails /> },
]);

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
