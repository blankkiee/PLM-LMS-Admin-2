import React, { useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { BsFiles } from "react-icons/bs";
import DeleteConfirmationModal from "./TableActionButtons/DeleteConfirmationModal";
import FacultyDetails from "./TableActionButtons/FacultyDetails";

function FacultyTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  const [facultyDetailsOpen, setFacultyDetailsOpen] = useState(false); // To toggle faculty details view
  const [selectedFacultyDetails, setSelectedFacultyDetails] = useState<
    any | null
  >(null); // To hold selected faculty details

  // For  delete button click
  const handleDeleteClick = (facultyName: string) => {
    setSelectedFaculty(facultyName);
    setIsModalOpen(true);
  };

  // Close the delete confirmation modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFaculty(null);
  };

  // Confirms yung pagdelete
  const handleDeleteConfirm = () => {
    console.log(`Deleted faculty: ${selectedFaculty}`);
    setIsModalOpen(false);
    setSelectedFaculty(null);
    // Add logic to delete the faculty from the data
  };

  // Handles the view button click to show faculty details
  const handleViewClick = (faculty: any) => {
    setSelectedFacultyDetails(faculty);
    setFacultyDetailsOpen(true);
  };

  // Closes the faculty details view
  const handleCloseFacultyDetails = () => {
    setFacultyDetailsOpen(false);
    setSelectedFacultyDetails(null);
  };

  // Sample data for the faculty
  const facultyData = [...Array(9)].map((_, index) => ({
    name: `Faculty ${index + 1}`,
    position: "Professor 1",
    department: "CISTM",
    bio: {
      homeAddress: "Manila City",
      emergencyContact: "093173743412",
      dateOfBirth: "Jan 1, 1900",
      age: 80,
      gender: "Male",
    },
    academicInfo: {
      employeeId: "2020-12345",
      department: "CISTM",
      position: "Professor",
      email: "faculty@university.edu",
      courses: ["BSCS"],
    },
  }));

  return (
    <>
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
          {facultyData.map((faculty, index) => (
            <tr key={index} className="border-b ">
              <td className="p-2 flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span>{faculty.name}</span>
              </td>
              <td className="p-2">{faculty.academicInfo.employeeId}</td>
              <td className="p-2">{faculty.position}</td>
              <td className="p-2">{faculty.department}</td>
              <td className="p-2 justify-between flex space-x-1">
                <button onClick={() => handleViewClick(faculty)}>
                  <BsFiles className="h-6 w-6 p-0 hover:text-gray-500" />
                </button>
                <button className="">
                  <FaPencilAlt className="h-6 w-6 hover:text-gray-500" />
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteClick(faculty.name)}
                >
                  <FaTrash className="h-6 w-5 hover:text-red-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete confirmation modal */}
      <DeleteConfirmationModal
        show={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDeleteConfirm}
        facultyName={selectedFaculty || ""}
      />

      {/* Faculty details view modal */}
      {facultyDetailsOpen && selectedFacultyDetails && (
        <FacultyDetails
          faculty={selectedFacultyDetails}
          onClose={handleCloseFacultyDetails}
          onEdit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </>
  );
}

export default FacultyTable;
