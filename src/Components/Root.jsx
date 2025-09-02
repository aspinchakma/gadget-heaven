import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  return (
    <div className="w-[95%] lg:w-[90%] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
