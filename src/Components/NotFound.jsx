import { MdHomeFilled } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen bg-[#131722] text-[#c7ccd0] flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-[120px] leading-[140px] lg:text-[200px] lg:leading-[200px] font-bold">
          404
        </h3>
        <p className="text-[20px] lg:text-[40px] mb-6">
          Oops something went wrong
        </p>
        <NavLink
          to={`/`}
          className={`flex items-center gap-3 w-fit mx-auto border-2 font-bold text-[18px] border-[#252934] rounded-lg px-4 py-2`}
        >
          Back To Home
          <MdHomeFilled />
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
