import React from "react";
import Navbar from "./Navbar";
import Search from "./SearchBar";
import Filter from "./Filter";
import FacultyTable from "./FacultyTable";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <div className="flex-1 m-1 p-0 md:m-10  md:p-5">
        <div className="lg:flex justify-between m-0 md:m-5">
          <div className="text-gray-700 my-4">
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
          <FacultyTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
