import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { loadDataLS } from "../Utilities/DataLS";
import SingleProductForCart from "./SingleProductForCart";

const Carts = () => {
  const [products, setProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  // [setCartNumber, setWishList]
  const [setCartNumber, ...rest] = useOutletContext();

  const [forSortingData, setForSortingData] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = loadDataLS();
    const loadDataSever = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/techProducts.json`;
      const res = await fetch(url);
      const result = await res.json();
      const filteredData = data.map((id) => result.find((p) => p.id == id));
      const totalMoney = filteredData.reduce(
        (previousValue, product) => previousValue + product.price,
        0
      );
      setTotal(totalMoney);
      setProducts(filteredData);
      setForSortingData(filteredData); // this is for sorting data
    };

    loadDataSever();
  }, []);
  const handleDeleteButton = (id) => {
    const filteredData = [...products].filter((p) => p.id != id);
    setProducts(filteredData);
    setForSortingData(filteredData); // this for sorting data
    const dataLS = loadDataLS();
    const totalMoney = filteredData.reduce(
      (accu, product) => accu + product.price,
      0
    );
    setTotal(totalMoney);
    const storedDataLS = [...dataLS].filter((pid) => pid != id);
    localStorage.setItem("cart", JSON.stringify(storedDataLS));
    setCartNumber(storedDataLS.length);
  };
  const handlePricSorted = () => {
    if (!isSorted) {
      const shortedData = [...products].sort(
        (previousProduct, currentProduct) =>
          currentProduct.price - previousProduct.price
      );
      setProducts(shortedData);
    } else {
      setProducts(forSortingData);
    }
    setIsSorted(!isSorted);
  };
  return (
    <div>
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <h3 className="text-[20px] font-bold">Cart</h3>
        <div className="flex gap-3 lg:flex-row flex-col items-center lg:py-6 py-4">
          <h3 className="text-[20px] font-bold">Total Cost: ${total}</h3>
          {isSorted ? (
            <button
              onClick={handlePricSorted}
              className="border-2 border-[#9538e2] px-3 py-2 rounded-lg bg-[#9538e2] font-bold flex items-center gap-2 text-white cursor-pointer"
            >
              Sort By Price
              <FaFilter />
            </button>
          ) : (
            <button
              onClick={handlePricSorted}
              className="border-2 border-[#9538e2] px-3 py-2 rounded-lg text-[#9538e2] font-bold flex items-center gap-2 cursor-pointer"
            >
              Sort By Price
              <FaFilter />
            </button>
          )}
          <button className="bg-[#9538e2] text-white text-[17px] px-3 py-2 rounded-lg inline-block">
            Purchase
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default Carts;
