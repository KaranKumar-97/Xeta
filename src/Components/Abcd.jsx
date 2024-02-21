import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { value1: 400, value2: 350 },
  { value1: 300, value2: 270 },
  { value1: 510, value2: 470 },
  { value1: 278, value2: 210 },
  { value1: 509, value2: 305 },
  { value1: 450, value2: 345 },
];

const Abcd = () => (
  <ResponsiveContainer
    width="40%"
    className="bg-white mt-5 mr-2 rounded-lg px-4"
    height={310}
  >
    <h2 className="text-blue-900 font-bold px-6 py-1">Monthly Performance</h2>

    <AreaChart data={data}>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      <Area type="monotone" dataKey="value1" stroke="#4caf50" fill="#4caf50" />
      <Area type="monotone" dataKey="value2" stroke="#2196f3" fill="#2196f3" />
    </AreaChart>
  </ResponsiveContainer>
);

export default Abcd;
