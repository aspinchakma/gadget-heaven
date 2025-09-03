import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { loadDataLS, loadDataWishList } from "../Utilities/DataLS";

const ProductDetails = () => {
  const [product, setProducts] = useState({});
  const [setCartNumber, setWishList] = useOutletContext();
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/techProducts.json`;
      const res = await fetch(url);
      const result = await res.json();

      const specificData = result.find((p) => p.id == id);
      setProducts(specificData);
    };

    loadData();
  }, []);

  let {
    img,
    title,
    brand,
    availability,
    description,
    price,
    rating,
    specification,
  } = product;

  const handleAddToCartButton = (id) => {
    // get local storage data
    const cart = loadDataLS();
    const wishList = loadDataWishList();
    const isContainInWishList = wishList.includes(id);
    if (isContainInWishList) {
      // removing item from wish list
      const newWishList = wishList.filter((p) => p != id);
      setWishList(newWishList.length);
      localStorage.setItem("wish-list", JSON.stringify(newWishList));
    }
    if (!cart.length) {
      cart.push(id);
      toast.success("Successfully Added!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      const result = cart.includes(id);
      if (result) {
        toast.error("Already Added!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        cart.push(id);
        toast.success("Successfully Added!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
    // redirect to home
    navigate("/");
    setCartNumber(cart.length);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleWishList = (id) => {
    const wishList = loadDataWishList();
    const cart = loadDataLS();
    const isContainInCart = cart.includes(id);
    if (isContainInCart) {
      toast.error("Already Added In Your Cart!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      const isContainInWishList = wishList.includes(id);
      if (isContainInWishList) {
        toast.error("Already Added In Your Wishlist!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        wishList.push(id);
        toast.success("Successfully Added In Your Wishlist!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
    setWishList(wishList.length);
    localStorage.setItem("wish-list", JSON.stringify(wishList));
  };

  return (
    <div className="relative">
      <div className="bg-[#9538e2] text-center text-white pt-[26px] pb-[240px]">
        <h3 className="text-[28px] font-bold">Product Details</h3>
        <p className="max-w-[796px] mx-auto mt-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="relative -mt-[220px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 p-[18px] rounded-lg lg:w-[80%] w-[90%] mx-auto  bg-white border-1 border-gray-300">
          <img
            className="lg:col-span-2 h-full object-cover rounded-lg"
            src={img}
            alt=""
          />
          <div className="lg:col-span-3">
            <div className="lg:flex gap-1">
              <h2 className="text-[26px] font-bold">{title}</h2>
              <p className="font-bold text-[22px] lg:text-[14px]">({brand})</p>
            </div>
            <p className="text-[22px] font-bold my-2">Price: ${price}</p>
            <p>
              {availability ? (
                <span className="border-2 border-[#309c08] text-[13px] font-bold px-4 py-1 text-[#309c08] bg-[#eaf5e6] inline-block rounded-full">
                  In Stock
                </span>
              ) : (
                <span className="border-2 border-red-700 text-[13px] font-bold px-4 py-1 text-red-700 bg-red-100 inline-block rounded-full">
                  Not Available
                </span>
              )}
            </p>
            <p className="text-[#6b6b6f] my-4">
              {description?.slice(0, 120)}...
            </p>
            <p className="font-bold text-[20px]">Specification:</p>
            <ol>
              {specification?.map((s, idx) => (
                <li className="text-[#6b6b6f] my-2" key={idx}>
                  {idx + 1}. {s}
                </li>
              ))}
            </ol>
            <p className="font-bold text-[20px]">Rating:</p>
            <div className="flex items-center gap-3 rating_flex">
              <p className="font-bold flex items-center">
                <FaStar className="text-[#fde250] mr-2" />
                {rating}/5
              </p>
            </div>
            <div className="flex items-center gap-4 mt-5 ">
              <button
                onClick={() => handleAddToCartButton(id)}
                className="flex items-center gap-2 font-bold px-[18px] py-2 text-white bg-[#8f36d8] rounded-full text-[17px] cursor-pointer"
              >
                Add To Cart <BsCart3 className="text-[20px]" />
              </button>
              <p
                onClick={() => handleWishList(id)}
                className="p-2 rounded-full border-2 border-[#d2d2d3] cursor-pointer text-[20px]"
              >
                <FaRegHeart />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
