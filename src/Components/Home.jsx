import { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import ProductsContainerSideBar from "./ProductsContainerSideBar";

const Home = () => {
  // add title
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);

  const [setCartNumber, setWishList] = useOutletContext();
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto">
      <h2 className="mb-10">This is HOme</h2>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div>
          <ProductsContainerSideBar />
        </div>
        <div className="lg:col-span-5 ">
          <Outlet context={[setCartNumber, setWishList]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
