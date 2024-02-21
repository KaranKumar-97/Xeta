import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Calories = () => {
  return (
    <div className="mr-5 mt-5 flex flex-col justify-center bg-white rounded-xl">
      <h2 className="text-blue-900 font-bold px-6 py-1">Calories Burn</h2>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5", "lorem6"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [800, 750, 500, 1000, 740, 790, 750],
          },
        ]}
        width={380}
        height={250}
      />
    </div>
  );
};

export default Calories;
