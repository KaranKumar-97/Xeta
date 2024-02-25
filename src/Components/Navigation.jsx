import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="bg-white w-screen border py-3 z-5">
      <div className="flex justify-between flex-col gap-5 lg:flex-row max-w-[90%] mx-auto">
        <NavLink to="/">
          {" "}
          <div className="flex items-center">
            <IoArrowBack size={30} />
            <p className="text-blue-900 font-semibold text-xl ml-[8%]">Back</p>
          </div>
        </NavLink>

        <div className="text-blue-900 font-bold text-xl ml-[8%]">Dashboard</div>

        <div className="">
          <IoSearch className="absolute m-3" />
          <input
            type="search"
            id="search"
            class="bg-gray-200 px-[15%] py-2 rounded-md "
            placeholder="Search here..."
          />
        </div>

        <div className="flex items-center ml-14">
          <label for="country">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png"
              className="w-8"
            />
          </label>

          <select
            name="country"
            id="country"
            className="bg-gray-100 py-2 rounded-md"
          >
            <option value="India">India</option>
            <option value="China">China </option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </div>

        <div className="flex items-center gap-5">
          <LuBell size={25} />
          <button className="flex gap-3">
            <img
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p>Karan</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
