import { NavLink } from "react-router-dom";
import "./ProductsContainerSideBar.css";

const ProductsContainerSideBar = () => {
  return (
    <div className="side_bar flex flex-col gap-3 p-4 lg:pb-4  rounded-lg border-1 border-gray-300 lg:sticky lg:top-0">
      <NavLink
        to={`/`}
        className={`block text-center bg-[#f2f2f3] p-2 rounded-lg`}
      >
        All Product
      </NavLink>
      <NavLink
        to={`/laptops`}
        className={`block text-center bg-[#f2f2f3] p-2 rounded-lg`}
      >
        Laptops
      </NavLink>
      <NavLink
        to={`/phones`}
        className={`block text-center bg-[#f2f2f3] p-2 rounded-lg`}
      >
        Phones
      </NavLink>
      <NavLink
        to={`/accessories`}
        className={`block text-center bg-[#f2f2f3] p-2 rounded-lg`}
      >
        Accesorries
      </NavLink>
      <NavLink
        to={`/smartWatches`}
        className={`block text-center bg-[#f2f2f3] p-2 rounded-lg`}
      >
        Smart Watches
      </NavLink>
      <NavLink
        to={`/mackbook`}
        className={`block text-center bg-[#f2f2f3] p-2 rounded-lg`}
      >
        MacBook
      </NavLink>
      <NavLink
        to={"/iphones"}
        className={`block text-center bg-[#f2f2f3] p-2 rounded-lg`}
      >
        Iphone
      </NavLink>
    </div>
  );
};

export default ProductsContainerSideBar;
