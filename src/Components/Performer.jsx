import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const Performer = () => {
  const chartSetting = {
    width: 350,
    height: 250,
  };

  const dataset = [
    {
      Rahul: 280,
      Vikash: 250,
      month: "Mon",
    },
    {
      Rahul: 350,
      Vikash: 210,
      month: "Tues",
    },
    {
      Rahul: 110,
      Vikash: 450,
      month: "Wed",
    },
    {
      Rahul: 310,
      Vikash: 120,
      month: "Thurs",
    },
    {
      Rahul: 250,
      Vikash: 230,
      month: "Fri",
    },
    {
      Rahul: 60,
      Vikash: 63,
      month: "Sat",
    },
    {
      Rahul: 59,
      Vikash: 60,
      month: "Sun",
    },
  ];

  const valueFormatter = (value) => `${value}mm`;

  return (
    <div className=" bg-white rounded-xl mt-5">
      <p className="text-blue-900 font-bold px-6 py-1">
        Top Performer of the week
      </p>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          { dataKey: "Rahul", label: "Rahul", valueFormatter },
          { dataKey: "Vikash", label: "Vikash", valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default Performer;
