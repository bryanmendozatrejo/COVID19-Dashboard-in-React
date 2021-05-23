import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatDate } from "../../utilities/common.js";

const LineGraph = ({ data }) => {
  console.log(data);
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener('resize', function(e) {
    setSize(e.target.innerWidth)
  });

  return (
    <ResponsiveContainer width={size/2} height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" tickFormatter={formatDate} />
        <YAxis />
        <Tooltip labelFormatter={(t) => formatDate(t)} />
        <Legend />
        <Line type="monotone" dataKey="positive" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
