import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar border-1 border-black w-[90%] lg:w-[80%] mx-auto header_container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/statistics`}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard`}>Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/statistics`}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard`}>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <div className="indicator">
          <span className="badge badge-sm indicator-item bg-black p-2 rounded-full text-white font-bold">
            12
          </span>
          <div className="p-2 border-2 border-[#e6e6e6] rounded-full">
            <BsCart3 className="text-[19px] cursor-pointer text-[#3a3a3a] font-bold" />
          </div>
        </div>
        <div className="indicator">
          <div className="p-2 border-2 border-[#e6e6e6] rounded-full">
            <FiHeart className="text-[19px] cursor-pointer text-[#3a3a3a] font-bold" />
          </div>
          <span className="badge badge-sm indicator-item bg-black p-2 rounded-full text-white font-bold">
            8
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
