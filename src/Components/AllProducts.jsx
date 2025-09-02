import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";
import SkeletonProducts from "./SkeletonProducts";

const AllProducts = () => {
  const data = useContext(ProductsContext);
  return (
    <>
      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.map((p) => (
            <Product product={p} key={p.id} />
          ))}
        </div>
      ) : (
        <SkeletonProducts />
      )}
    </>
  );
};

export default AllProducts;
