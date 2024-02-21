import React from "react";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex  justify-center items-center gap-6 h-screen w-screen">
      <NavLink
        to="/dashboard"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-xl rounded-lg px-10 py-5"
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/fitsnap"
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl text-xl rounded-lg px-11 py-5"
      >
        Fitsnap
      </NavLink>
    </div>
  );
};

export default Homepage;
