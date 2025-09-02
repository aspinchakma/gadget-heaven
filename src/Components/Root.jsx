import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ProductsContext } from "../Utilities/Context";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  const [products, setAllProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/techProducts.json`;
      const response = await fetch(url);
      const data = await response.json();
      setAllProducts(data);
    };
    loadData();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ProductsContext.Provider>
  );
};

export default Root;
