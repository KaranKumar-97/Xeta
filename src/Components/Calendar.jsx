import { React, useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendar = () => {
  return (
    <div className="bg-white flex rounded-xl mt-5 mx-5">
      <div>
        <p className="text-blue-900 font-bold px-6 my-2">
          Upcoming Competitions
        </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar", "DateCalendar"]}>
            <DateCalendar defaultValue={dayjs("2024-04-4")} />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      <div className="flex flex-col text-xs gap-2 mt-28 pr-5">
        <div className="px-2 py-3 text-gray-600  bg-red-100 rounded-lg">
          4 April - South delhi weightlifting championship
        </div>
        <div className="px-2 py-2 text-gray-600 rounded-lg">
          7 April - South delhi weightlifting championship
        </div>
        <div className="px-2 py-2 text-gray-600 bg-red-100 rounded-lg">
          12 April - South delhi weightlifting championship
        </div>
        <div className="px-2 py-2 text-gray-600 rounded-lg">
          15 April - South delhi weightlifting championship
        </div>
      </div>
    </div>
  );
};

export default Calendar;
