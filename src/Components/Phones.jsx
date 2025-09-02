import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";

const Phones = () => {
  const data = useContext(ProductsContext);
  const phones = [...data].filter((p) => p.category.includes("phone"));
  console.log(phones);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {phones.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </div>
  );
};

export default Phones;
