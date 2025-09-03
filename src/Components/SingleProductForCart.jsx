import { MdDeleteForever } from "react-icons/md";

const SingleProductForCart = ({ product, handleDeleteButton }) => {
  const { img, title, price, description, brand, id } = product;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 shadow-lg my-3 p-[20px] rounded-lg">
      <img
        className="w-full object-cover h-[160px] rounded-lg"
        src={img}
        alt=""
      />
      <div className="lg:col-span-3">
        <h3 className="text-[22px] font-bold">{title}</h3>
        <p className="font-bold">({brand})</p>
        <p className="mt-2 mb-3 text-[#6b6b6f]">{description?.slice(0, 70)}</p>
        <p className="font-bold text-[18px]">Price: ${price}</p>
      </div>
      <div>
        <button
          onClick={() => handleDeleteButton(id)}
          className="p-2 border-[#ff0000] border-2 rounded-full w-fit"
        >
          <MdDeleteForever className="text-[22px] text-[#ff0000] font-bold inline-block cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default SingleProductForCart;
