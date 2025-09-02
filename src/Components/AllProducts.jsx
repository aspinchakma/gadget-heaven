import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";

const AllProducts = () => {
  const data = useContext(ProductsContext);
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {data.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </div>
  );
};

export default AllProducts;
