import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);
  return (
    <div>
      <div className="py-12 text-center bg-[#9538e2] text-white">
        <h3 className="text-[28px] font-bold">Dashboard</h3>
        <p className="max-w-[796px] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <NavLink to={``}>Cart</NavLink>
          <NavLink to={`dashboard/wishlist`}>WishList</NavLink>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
