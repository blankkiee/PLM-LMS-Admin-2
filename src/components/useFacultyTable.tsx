import { useState } from "react";

// ************************   GINAMIT KO LAHAT 'TO SA FACULTY TABLE *************************
const useFacultyTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  const [facultyDetailsOpen, setFacultyDetailsOpen] = useState(false);
  const [selectedFacultyDetails, setSelectedFacultyDetails] = useState<
    any | null
  >(null);
  const [facultyData, setFacultyData] = useState<any[]>([
    // Initial sample data
    {
      name: "Faculty 1",
      employeeId: "2020-12345",
      position: "Professor 1",
      department: "CISTM",
    },
    // Other initial data
  ]);

  const handleDeleteClick = (facultyName: string) => {
    setSelectedFaculty(facultyName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFaculty(null);
  };

  const handleDeleteConfirm = () => {
    console.log(`Deleted faculty: ${selectedFaculty}`);
    setIsModalOpen(false);
    setSelectedFaculty(null);
    // Logic to delete faculty from the data
  };

  const handleViewClick = (faculty: any) => {
    setSelectedFacultyDetails(faculty);
    setFacultyDetailsOpen(true);
  };

  const handleCloseFacultyDetails = () => {
    setFacultyDetailsOpen(false);
    setSelectedFacultyDetails(null);
  };

  const handleAddFaculty = (newFaculty: any) => {
    setFacultyData((prev) => [...prev, newFaculty]);
  };

  // THESE isisisisi**************
  return {
    isModalOpen,
    selectedFaculty,
    facultyDetailsOpen,
    selectedFacultyDetails,
    facultyData,
    handleDeleteClick,
    handleCloseModal,
    handleDeleteConfirm,
    handleViewClick,
    handleCloseFacultyDetails,
    handleAddFaculty,
  };
};

export default useFacultyTable;
