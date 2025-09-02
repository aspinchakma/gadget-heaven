import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";
import SkeletonProducts from "./SkeletonProducts";

const Accessories = () => {
  const data = useContext(ProductsContext);
  const accessories = [...data].filter((p) =>
    p.category.includes("accessories")
  );
  return (
    <>
      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {accessories.map((p) => (
            <Product product={p} key={p.id} />
          ))}
        </div>
      ) : (
        <SkeletonProducts />
      )}
    </>
  );
};

export default Accessories;
