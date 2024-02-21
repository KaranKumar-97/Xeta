import React from "react";

const HeighestWeight = () => {
  return (
    <div className="mx-5 mt-5 flex flex-col justify-center bg-white rounded-xl">
      <h2 className="text-blue-900 font-bold px-6 py-1">Highest Weight</h2>
      <table class="text-sm text-left">
        <thead class="text-xs border-b text-gray-500">
          <tr>
            <th scope="col" class="px-6 py-3 text-center  font-medium">
              #
            </th>
            <th scope="col" class="font-medium px-6 py-3">
              Name
            </th>
            <th scope="col" class="font-medium px-6 py-3">
              Weight Lift (in kg)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <th scope="row" class="px-6 py-3 font-medium">
              01
            </th>
            <td class="px-6 py-3">Ankit</td>
            <td class="px-6 py-3">150</td>
          </tr>
          <tr class="border-b ">
            <th scope="row" class="px-6 py-3 font-medium ">
              02
            </th>
            <td class="px-6 py-3">Vikky</td>
            <td class="px-6 py-3">140</td>
          </tr>
          <tr class="border-b">
            <th scope="row" class="px-6 py-3 font-medium whitespace-nowra">
              03
            </th>
            <td class="px-6 py-3">Happy</td>
            <td class="px-6 py-3">90</td>
          </tr>
          <tr>
            <th scope="row" class="px-6 py-3 font-medium whitespace-nowra">
              04
            </th>
            <td class="px-6 py-3">Virat</td>
            <td class="px-6 py-3">80</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeighestWeight;
