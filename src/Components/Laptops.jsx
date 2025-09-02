import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";
import SkeletonProducts from "./SkeletonProducts";

const Laptops = () => {
  const data = useContext(ProductsContext);
  const laptopsData = [...data].filter((p) => p.category.includes("laptop"));
  return (
    <>
      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {laptopsData.map((p) => (
            <Product product={p} key={p.id} />
          ))}
        </div>
      ) : (
        <SkeletonProducts />
      )}
    </>
  );
};

export default Laptops;
