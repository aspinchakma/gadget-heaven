import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { title, price, img, id } = product;
  return (
    <div className="p-5  border-gray-300 border-1 rounded-lg flex flex-col items-start">
      <img
        className="w-full h-[221px] rounded-lg object-cover"
        src={img}
        alt=""
      />
      <h3 className="text-[20px] font-bold flex-1 mt-3 mb-1">{title}</h3>
      <p className="text-[#6b6b6f] mb-3 text-[17px]">Price: ${price}</p>
      <NavLink
        to={`/products/${id}`}
        className="text-[#8333c6] font-bold border-1 border-[#8333c6] px-[18px] py-[7px] rounded-lg"
      >
        View Details
      </NavLink>
    </div>
  );
};

export default Product;
