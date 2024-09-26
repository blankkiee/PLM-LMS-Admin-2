import React from "react";

function Filter() {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <button className="bg-gray-300 px-2 py-1 rounded-lg">+ Add Filter</button>
      <button className="bg-gray-200 px-2 py-1 rounded-lg">CISTM</button>
      <button className="bg-gray-200 px-2 py-1 rounded-lg">CE</button>
      <button className="bg-gray-200 px-2 py-1 rounded-lg">Professor 1</button>
      <button className="bg-gray-300 px-2 py-1 rounded-lg">Delete All</button>
    </div>
  );
}

export default Filter;
