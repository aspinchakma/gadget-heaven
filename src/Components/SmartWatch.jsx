import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";
import SkeletonProducts from "./SkeletonProducts";

const SmartWatch = () => {
  const data = useContext(ProductsContext);
  const smartWatch = [...data].filter((p) =>
    p.category.includes("smart watch")
  );
  return (
    <>
      {smartWatch.length ? (
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

export default SmartWatch;
