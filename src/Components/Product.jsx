const Product = ({ product }) => {
  const { title, price, img } = product;
  return (
    <div className="p-5 shadow-lg rounded-lg">
      <img
        className="w-full h-[181px] rounded-lg object-cover"
        src={img}
        alt=""
      />
      <h3>{title}</h3>
      <p>{price}</p>
      <button>View Details</button>
    </div>
  );
};

export default Product;
