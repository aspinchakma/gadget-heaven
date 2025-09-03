const SingleWishList = ({
  product,
  handleAddToCart,
  handleCartDeleteButton,
}) => {
  const { id, img, title, brand, description, price } = product;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 shadow-lg my-3 p-[20px] rounded-lg">
      <img
        className="w-full object-cover h-[160px] rounded-lg"
        src={img}
        alt=""
      />
      <div className="lg:col-span-3">
        <h3 className="text-[22px] font-bold">{title}</h3>
        <p className="font-bold text-[14px] text-green-500">({brand})</p>
        <p className="my-2 text-[#6b6b6f] text-[15px]">
          {description?.slice(0, 70)}
        </p>
        <p className="font-bold text-[18px] mb-2">Price: ${price}</p>
        <button
          onClick={() => handleAddToCart(id)}
          className="cursor-pointer text-[15px] bg-[#8d36d6] font-normal px-3 py-2 rounded-lg text-white hover:bg-white hover:text-[#8d36d6] border-2 border-[#8d36d6] duration-500"
        >
          Add To Cart
        </button>
      </div>
      <div>
        <button
          onClick={() => handleCartDeleteButton(id)}
          className="px-5 text-[16px] py-1 rounded-lg cursor-pointer border-[#ED4C67] border-2 w-fit bg-[#ED4C67] font-normal text-white hover:bg-white hover:text-[#ED4C67] duration-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleWishList;
