import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();
  const handleShowNowButton = () => {
    navigate("/dashboard");
  };
  return (
    <div className="relative mb-[170px] lg:mb-[520px]">
      <div className="text-center bg-[#9538e2] text-white  py-[188px] lg:w-[98%] mx-auto rounded-lg w-[95%]">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold max-w-[1100px] mx-auto  text-white ">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="max-w-[796px] mx-auto py-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button
            onClick={handleShowNowButton}
            className="bg-white text-[#9137dd] font-bold px-5 py-2 rounded-lg cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="lg:w-[60%] w-[90%] mx-auto border-2 border-[#fefeff] p-4 rounded-lg backdrop-blur-lg absolute top-[75%] left-[50%] -translate-x-[50%]">
        <img
          className="max-h-[563px] w-full rounded-lg"
          src="https://i.ibb.co.com/MYkR2Kx/banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeBanner;
