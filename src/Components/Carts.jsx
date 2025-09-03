import { useEffect, useState } from "react";
import { loadDataLS } from "../Utilities/DataLS";

const Carts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = loadDataLS();
    const loadDataSever = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/techProducts.json`;
      const res = await fetch(url);
      const result = await res.json();
      const filteredData = data.map((id) => result.find((p) => p.id == id));
      setProducts(filteredData);
    };

    loadDataSever();
  }, []);

  return (
    <div>
      <h3>This is cart</h3>
    </div>
  );
};

export default Carts;
