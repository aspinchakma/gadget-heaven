import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";

const MacBook = () => {
  const data = useContext(ProductsContext);
  const mackBook = [...data].filter((p) => p.category.includes("macbook"));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {mackBook.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </div>
  );
};

export default MacBook;
