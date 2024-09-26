import React from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { PiFiles } from "react-icons/pi";

function FacultyTable() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="text-left bg-gray-100">
          <th className="p-2">Name</th>
          <th className="p-2">Employee ID</th>
          <th className="p-2">Position</th>
          <th className="p-2">Department</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Placeholder for Data */}
        {[...Array(9)].map((_, index) => (
          <tr key={index} className="border-b ">
            <td className="p-2 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span>Faculty {index + 1}</span>
            </td>
            <td className="p-2">2020-12345</td>
            <td className="p-2">Professor 1</td>
            <td className="p-2">CISTM</td>
            <td className="p-2 justify-between flex space-x-1">
              <button className="">
                <PiFiles className="h-6 w-6" />
              </button>
              <button className="">
                <FaPencilAlt className="h-6 w-6" />
              </button>
              <button className="text-red-800">
                <FaTrash className="h-6 w-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FacultyTable;
