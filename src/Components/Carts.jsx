import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useNavigate, useOutletContext } from "react-router-dom";
import { loadDataLS } from "../Utilities/DataLS";
import NoData from "./NoData";
import SingleProductForCart from "./SingleProductForCart";

const Carts = () => {
  const [products, setProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  // [setCartNumber, setWishList]
  const setCartNumber = useOutletContext()[0];

  const [forSortingData, setForSortingData] = useState([]);

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

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

  const handlePurchaseButton = () => {
    document.getElementById("my_modal_1").showModal();
    localStorage.removeItem("cart");

    setProducts([]);
    setCartNumber(0);
  };
  const handleCloseButton = () => {
    setTotal(0);
    navigate("/");
  };
  return (
    <div>
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <h3 className="text-[22px] font-bold">Cart</h3>
        <div className="flex gap-3 lg:flex-row flex-col items-center lg:py-6 py-4">
          <h3 className="text-[18px] font-bold">Total Cost: ${total}</h3>
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
          <button
            onClick={handlePurchaseButton}
            className="bg-[#9538e2] text-white text-[17px] px-3 py-2 rounded-lg inline-block cursor-pointer"
            disabled={products.length === 0}
          >
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
          <NoData />
        )}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <img
            src="https://i.ibb.co.com/v6p1J0Vb/Group.png"
            className="h-[80px] mx-auto"
            alt=""
          />
          <div className="text-center lg:px-7 py-3">
            <h3 className="text-[22px] font-bold mb-2">Payment Successfully</h3>
            <p className="text-[#6b6b6f]">Thanks for purchasing.</p>
            <p className="text-[#6b6b6f] mt-2 mb-4">Total:{total}</p>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleCloseButton} className="btn w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Carts;
