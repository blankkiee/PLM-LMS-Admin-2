import React, { useState } from "react";

const AddFacultyForm = ({ onClose, onAdd }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [newFaculty, setNewFaculty] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    birthday: "",
    temporaryPassword: "",
    position: "",
    college: "",
    employeeId: "",
    employmentStatus: "",
  }); //1. Here kumukuha/ginagamit to show values (e.g. newFaculty.firstName, newFaculty.lastName etc.)
  //2. You CAN update or revise this for backend Functionality

  // Sample functions sa panhandle ng mga actions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaculty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newFaculty);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex w-full min-w-sm min-h-sm justify-center relative">
        {/* Image Section */}
        <div className="hidden lg:block">
          <img src="./src/assets/images/PLM-Image.png" alt="img" className="" />
        </div>
        {/* Modal/ Form Section */}
        <div className="bg-white p-7 shadow-md w-full max-w-lg rounded-sm lg:rounded-e-lg relative">
          {/* X button to close the modal */}
          <button
            onClick={onClose}
            className="absolute top-2 right-5 text-gray-600 hover:text-gray-950 font-bold text-xl"
          >
            {/* This is the "X" Sign*/}
            &times;
          </button>

          {currentStep === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Create New Account for Faculty Member
              </h2>
              <p className="text-sm mb-4">Part 1: Personal Information</p>
              <form>
                <div className="mb-4">
                  <label className="block mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={newFaculty.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={newFaculty.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newFaculty.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Gender</label>
                  <select
                    name="gender"
                    value={newFaculty.gender}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Birthday</label>
                  <input
                    type="date"
                    name="birthday"
                    value={newFaculty.birthday}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Temporary Password</label>
                  <input
                    type="password"
                    name="temporaryPassword"
                    value={newFaculty.temporaryPassword}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              </form>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Create New Account for Faculty Member
              </h2>
              <p className="text-sm mb-4">Part 2: Academic Information</p>
              <form>
                <div className="mb-4">
                  <label className="block mb-1">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={newFaculty.position}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="E.g., 'Professor', 'Lecturer'"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">College</label>
                  <select
                    name="college"
                    value={newFaculty.college}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select College</option>
                    <option value="College of Engineering">
                      College of Engineering
                    </option>
                    <option value="College of Accountancy">
                      College of Accountancy
                    </option>
                    {/* Add more colleges as needed */}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Employee ID</label>
                  <input
                    type="text"
                    name="employeeId"
                    value={newFaculty.employeeId}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Employment Status</label>
                  <select
                    name="employmentStatus"
                    value={newFaculty.employmentStatus}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    {/* options for the dropdown */}
                    <option value="">Select Status</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contractual">Contractual</option>
                  </select>
                </div>
                <div className="flex justify-between space-x-2">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={handlePreviousStep}
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleSubmit}
                  >
                    Done
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFacultyForm;
