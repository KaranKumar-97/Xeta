import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import HeighestWeight from "../Components/HeighestWeight";
import Accuracy from "../Components/Accuracy";
import OneRepMax from "../Components/OneRepMax";
import Performer from "../Components/Performer";
import Calories from "../Components/Calories";
import LineChart from "../Components/linechart";
import Calendar from "../Components/Calendar";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 w-screen  h-full">
      <div className="mx-auto">
        <Navigation />
      </div>

      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <HeighestWeight />
            <OneRepMax />
            <LineChart />
          </div>
          <div className="flex flex-col lg:flex-row">
            <Accuracy />
            <Performer />
          </div>

          <div className="flex flex-col lg:flex-row">
            <Calendar />
            <Calories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
