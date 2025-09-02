import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ProductsContainerSideBar from "./ProductsContainerSideBar";

const Home = () => {
  // add title
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto border-2 border-black">
      <h2>This is HOme</h2>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <ProductsContainerSideBar />
        <div className="lg:col-span-5 border-2 border-red-600">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
