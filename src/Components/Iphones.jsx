import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";

const Iphones = () => {
  const data = useContext(ProductsContext);
  const iphones = [...data].filter((p) => p.category.includes("iphone"));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {iphones.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </div>
  );
};

export default Iphones;
