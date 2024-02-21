import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import HeighestWeight from "../Components/HeighestWeight";
import Accuracy from "../Components/Accuracy";
import OneRepMax from "../Components/OneRepMax";
import Performer from "../Components/Performer";
import Calories from "../Components/Calories";
import LineChart from "../Components/linechart";
import Abcd from "../Components/Abcd";
import Calendar from "../Components/Calendar";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 w-screen h-full">
      <Navigation />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <div className="flex">
            <HeighestWeight />
            <OneRepMax />
            <LineChart />

            {/* <Abcd /> */}
          </div>
          <div className="flex">
            <Accuracy />
            <Performer />
          </div>

          <div className="flex">
            <Calendar />
            <Calories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
