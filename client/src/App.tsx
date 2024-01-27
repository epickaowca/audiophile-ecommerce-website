import { FC } from "react";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { ProductCategory } from "./pages/ProductCategory";
import { ProductDetails } from "./pages/ProductDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/productCategory/:category",
    element: <ProductCategory />,
  },
  { path: "/productDetails", element: <ProductDetails /> },
]);

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
