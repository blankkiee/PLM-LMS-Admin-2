import React from "react";

interface FacultyDetailsProps {
  faculty: {
    name: string;
    position: string;
    department: string;
    bio: {
      homeAddress: string;
      emergencyContact: string;
      dateOfBirth: string;
      age: number;
      gender: string;
    };
    academicInfo: {
      employeeId: string;
      department: string;
      position: string;
      email: string;
      courses: string[];
    };
  };
  onClose: () => void; // close the details modal
  onEdit: () => void; // handle edit action
}

const FacultyDetails: React.FC<FacultyDetailsProps> = ({
  faculty,
  onClose,
  onEdit,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="text-sm text-blue-600 mb-4 hover:underline float-right"
        >
          Go back
        </button>

        {/* Faculty Header with Image */}
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/100" // Replace this with the actual image URL or a dynamic one
            alt={`${faculty.name}'s photo`}
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{faculty.name}</h2>
            <p className="text-gray-500">
              {faculty.position}, {faculty.department}
            </p>
            {/* Edit Information Button */}
            <button
              onClick={onEdit}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Edit Information
            </button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-4">
          <h4 className="font-semibold">Bio</h4>
          <p>Home Address: {faculty.bio.homeAddress}</p>
          <p>Emergency Contact: {faculty.bio.emergencyContact}</p>
          <p>Date of Birth: {faculty.bio.dateOfBirth}</p>
          <p>Age: {faculty.bio.age}</p>
          <p>Gender: {faculty.bio.gender}</p>
        </div>

        {/* Academic Information Section */}
        <div className="mt-4">
          <h4 className="font-semibold">Academic Information</h4>
          <p>Employee ID: {faculty.academicInfo.employeeId}</p>
          <p>Department: {faculty.academicInfo.department}</p>
          <p>Position: {faculty.academicInfo.position}</p>
          <p>Email: {faculty.academicInfo.email}</p>
          <p>Courses: {faculty.academicInfo.courses.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
