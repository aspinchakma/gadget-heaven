import { useEffect, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/techProducts.json`;
      const response = await fetch(url);
      const dataServer = await response.json();
      setData(dataServer);
    };
    loadData();
  }, []);

  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto">
      <ResponsiveContainer width="100%" height={600}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 10,
            bottom: 150,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="title"
            tick={{ angle: -45, textAnchor: "end", fontSize: 15 }}
            interval={0}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />

          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="rating" stroke="#ff7300" />
          <Line type="monotone" dataKey="stock" stroke="#009432" />
          <Legend
            wrapperStyle={{
              position: "relative",
              top: 30,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
