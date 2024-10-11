import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./FacultyListComponents/SearchBar";
import Filter from "./FacultyListComponents/Filter";
import FacultyTable from "./FacultyListComponents/FacultyTable";
import AddFacultyForm from "./AddFacultyForm"; // Import the new component

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  const [addFacultyOpen, setAddFacultyOpen] = useState(false); // State to control add faculty form modal
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <div className="flex-1 p-2 xl:m-20  2xl:p-10 lg:p-4 ">
        <div className="lg:flex justify-between m-0 md:m-1">
          <div className="text-indigo-700 my-2">
            <h1 className="text-4xl font-bold ">PLM Faculty Members</h1>
            <h2>Academic Year 2024-2025</h2>
          </div>

          <div className="lg:w-1/2">
            <Search />
            <Filter />

            {/* Add New Faculty Button */}
            <button
              className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-500"
              onClick={() => setAddFacultyOpen(true)}
            >
              + Add Faculty
            </button>
          </div>
        </div>

        <p className="text-gray-600">Total: 21 results</p>

        {/* Faculty List */}
        <div className="bg-white shadow-sm rounded-lg p-4 max-h-svh min-w-max overflow-auto">
          <FacultyTable />
        </div>
      </div>

      {/* Add Faculty Form Modal */}
      {addFacultyOpen && (
        <AddFacultyForm
          onClose={() => setAddFacultyOpen(false)}
          onAdd={undefined}
        />
      )}
    </div>
  );
};

export default Dashboard;
