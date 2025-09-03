import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { loadDataLS, loadDataWishList } from "../Utilities/DataLS";
import SingleWishList from "./SingleWishList";

const WishList = () => {
  const [data, setData] = useState([]);
  const [setCartList, setWishlist] = useOutletContext();
  useEffect(() => {
    const dataWishList = loadDataWishList();
    const loadDataSever = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/techProducts.json`;
      const res = await fetch(url);
      const result = await res.json();
      const filteredData = dataWishList.map((id) =>
        result.find((p) => p.id == id)
      );
      setData(filteredData);
    };

    loadDataSever();
  }, []);
  const handleAddToCart = (id) => {
    const filteredData = [...data].filter((product) => product.id != id);

    // updating cart data
    const cartData = loadDataLS();
    cartData.push(id);
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCartList(cartData.length);

    // updation wish list data
    const wishListDataLS = loadDataWishList();
    const filteredWishList = wishListDataLS.filter((pID) => pID != id);
    localStorage.setItem("wish-list", JSON.stringify(filteredWishList));
    setWishlist(filteredWishList.length);

    // set data to show ui
    setData(filteredData);
  };
  return (
    <div className="text-[19px] font-bold py-4 lg:py-8">
      <h2 className="font-bold mb-4">WishList</h2>
      <div>
        {data.length ? (
          <div>
            {data.map((product) => (
              <SingleWishList
                handleAddToCart={handleAddToCart}
                product={product}
                key={product.id}
              />
            ))}
          </div>
        ) : (
          <h3>hello bro</h3>
        )}
      </div>
    </div>
  );
};

export default WishList;
