import React from "react";
import useFacultyTable from "../useFacultyTable"; // Adjust the path as necessary
import DeleteConfirmationModal from "../TableActionButtons/DeleteConfirmationModal";
import FacultyDetails from "../TableActionButtons/FacultyDetails";
import FacultyRow from "./FacultyRow"; // Import the new FacultyRow component

function FacultyTable() {
  const {
    isModalOpen,
    selectedFaculty,
    facultyDetailsOpen,
    selectedFacultyDetails,
    handleDeleteClick,
    handleCloseModal,
    handleDeleteConfirm,
    handleViewClick,
    handleCloseFacultyDetails,
  } = useFacultyTable(); // NASA useFacultyTable.tsx YUNG MGA LAMAN NG FUNCTIONS NA 'TO

  // Sample data ng mga faculty faculty Array(9)
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

  //Irereturn niya yung Table Design
  //Kasama yung FacultyRow na component
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
            // This is FacultyRow.tsx Component
            <FacultyRow
              key={index}
              faculty={faculty}
              onViewClick={handleViewClick}
              onDeleteClick={handleDeleteClick}
            />
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
          onEdit={() => {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </>
  );
}

export default FacultyTable;
