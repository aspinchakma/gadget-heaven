import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";
import SkeletonProducts from "./SkeletonProducts";

const MacBook = () => {
  const data = useContext(ProductsContext);
  const mackBook = [...data].filter((p) => p.category.includes("macbook"));
  return (
    <>
      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {mackBook.map((p) => (
            <Product product={p} key={p.id} />
          ))}
        </div>
      ) : (
        <SkeletonProducts />
      )}
    </>
  );
};

export default MacBook;
