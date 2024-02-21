import React from "react";
import activitylog from "../assets/activitylog.png";
import pie from "../assets/pie.png";
import leaderboard from "../assets/leaderboard.png";
import exprogress from "../assets/exprogress.png";
import trackprogress from "../assets/trackprogress.png";

const Sidebar = () => {
  return (
    <div className="bg-white flex flex-col py-8 px-4  text-xs gap-7">
      <button className="bg-blue-700 flex items-center gap-2 text-white py-2 pl-2 pr-12 mx-auto rounded-md">
        <img src={pie} className="w-[100%]" alt="" />
        Dashbaord
      </button>
      <button className="flex gap-2">
        <img src={leaderboard} className="w-[20%]" alt="" />
        Leaderboard
      </button>
      <button className="flex gap-2">
        <img src={trackprogress} className="w-[18%] text-left" />
        Track Progress
      </button>
      <button className="flex gap-2 text-left w-[20%]">
        <img src={exprogress} className="w-[80%]" alt="" />
        Exercise Progression
      </button>
      <button className="flex gap-2 text-left w-[20%]">
        <img src={activitylog} className="w-[80%]" alt="" />
        Activity Log
      </button>
    </div>
  );
};

export default Sidebar;
