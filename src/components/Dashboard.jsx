import React from "react";
import Navbar from "./Navbar";
import Search from "./SearchBar";
import Filter from "./Filter";
import { FaPenAlt, FaRegEdit, FaSearch, FaTrash } from "react-icons/fa";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <div className="flex-1 m-1 p-0 md:m-10  md:p-5">
        <div className="lg:flex justify-between m-0 md:m-5">
          <div className="text-gray-700">
            <h1 className="md:text-3xl font-medium ">PLM Faculty Members</h1>
            <h2>Academic Year 2024-2025</h2>
          </div>

          <div className="lg:w-1/2">
            <Search />
            <Filter />
          </div>
        </div>

        <p className="text-gray-600 mb-2">Total: 21 results</p>

        {/* Faculty List */}
        <div className="bg-white shadow-sm rounded-lg p-4 max-h-svh min-w-max overflow-auto">
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
                  <td className="p-2 space-x-3">
                    <button className="text-blue-500">
                      <FaRegEdit className="h-6 w-6" />
                    </button>
                    <button className="text-red-500">
                      <FaTrash className="h-6 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
