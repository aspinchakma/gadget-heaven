import { useContext } from "react";
import { ProductsContext } from "../Utilities/Context";
import Product from "./Product";

const SmartWatch = () => {
  const data = useContext(ProductsContext);
  const smartWatch = [...data].filter((p) =>
    p.category.includes("smart watch")
  );
  console.log(smartWatch);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {smartWatch.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </div>
  );
};

export default SmartWatch;
