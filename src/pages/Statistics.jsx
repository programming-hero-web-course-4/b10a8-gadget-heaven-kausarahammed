import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
const Statistics = () => {
  const d = useLoaderData();

  return (
    <div>
      <div className="h-[220px] bg-purple-500 mt-6 text-center">
        <h1 className="pt-12 font-bold text-3xl text-white">Statistics</h1>
        <p className="text-md text-white pt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the <br /> coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="mt-28 container mx-auto">
        <BarChart width={1500} height={450} data={d}>
          <CartesianGrid />
          <XAxis dataKey="product_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="purple" />
          <Bar dataKey="total" fill="green" />
          <Bar dataKey="rating" fill="red " />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
