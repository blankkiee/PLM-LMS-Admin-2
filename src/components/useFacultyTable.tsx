import { useState } from "react";

// ************************   GINAMIT KO LAHAT 'TO SA FACULTY TABLE *************************
const useFacultyTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  const [facultyDetailsOpen, setFacultyDetailsOpen] = useState(false);
  const [selectedFacultyDetails, setSelectedFacultyDetails] = useState<
    any | null
  >(null);

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

  // THESE isisisisi **************
  return {
    isModalOpen,
    selectedFaculty,
    facultyDetailsOpen,
    selectedFacultyDetails,
    handleDeleteClick,
    handleCloseModal,
    handleDeleteConfirm,
    handleViewClick,
    handleCloseFacultyDetails,
  };
};

export default useFacultyTable;
