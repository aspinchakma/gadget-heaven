import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { loadDataLS } from "../Utilities/DataLS";
import SingleProductForCart from "./SingleProductForCart";

const Carts = () => {
  const [products, setProducts] = useState([]);
  // [setCartNumber, setWishList]
  const [setCartNumber, ...rest] = useOutletContext();

  useEffect(() => {
    const data = loadDataLS();
    const loadDataSever = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/techProducts.json`;
      const res = await fetch(url);
      const result = await res.json();
      const filteredData = data.map((id) => result.find((p) => p.id == id));
      setProducts(filteredData);
    };

    loadDataSever();
  }, []);
  const handleDeleteButton = (id) => {
    const filteredData = [...products].filter((p) => p.id != id);
    setProducts(filteredData);
    const dataLS = loadDataLS();
    const storedDataLS = [...dataLS].filter((pid) => pid != id);
    localStorage.setItem("cart", JSON.stringify(storedDataLS));
    setCartNumber(storedDataLS.length);
  };

  return (
    <div>
      {products.length ? (
        <div>
          {products.map((product) => (
            <SingleProductForCart
              product={product}
              key={product?.id}
              handleDeleteButton={handleDeleteButton}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carts;
