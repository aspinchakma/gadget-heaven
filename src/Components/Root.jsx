import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { ProductsContext } from "../Utilities/Context";
import { loadDataLS } from "../Utilities/DataLS";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  const [products, setAllProducts] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  useEffect(() => {
    const data = loadDataLS();
    setCartNumber(data.length);
  }, []);

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div
        style={{ fontFamily: "'Sora', sans-serif" }}
        className="min-h-screen flex flex-col"
      >
        <Header cartNumber={cartNumber} />
        <div className="flex-1">
          <Outlet context={setCartNumber} />
        </div>
        <Footer />
      </div>
    </ProductsContext.Provider>
  );
};

export default Root;
