import { FC, lazy, useEffect } from "react";
// import { ProductCategory } from "./pages/ProductCategory";
// import { ProductDetails } from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App: FC = () => {
  useEffect(() => {
    document.getElementById("loader")?.remove();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
