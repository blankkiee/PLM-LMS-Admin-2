import React, { useState } from "react";

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
  onClose: () => void; // Close  details modal
  onEdit: () => void; // Add this line to fix the error
}

const FacultyDetails: React.FC<FacultyDetailsProps> = ({
  faculty,
  onClose,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFaculty, setEditedFaculty] = useState(faculty);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: "bio" | "academicInfo" | "root", // Added "root" for top-level fields
    field: string
  ) => {
    if (section === "bio" || section === "academicInfo") {
      setEditedFaculty({
        ...editedFaculty,
        [section]: {
          ...editedFaculty[section], // spread current section properties (bio or academicInfo)
          [field]: e.target.value, // update the specific field dynamically
        },
      });
    } else {
      setEditedFaculty({
        ...editedFaculty,
        [field]: e.target.value, // handle root-level fields
      });
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    // Add logic to save changes, e.g., API call to backend
    // Example: Make a PUT or PATCH request to update faculty details on the server
    // fetch('/api/faculty/update', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(editedFaculty),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log("Saved changes:", data))
    //   .catch((error) => console.error('Error updating faculty:', error));

    console.log("Saved changes:", editedFaculty); // Simulate saving changes locally for now
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="text-sm text-blue-600 mb-4 hover:underline float-right"
        >
          Go back
        </button>

        {/* Faculty Header */}
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt={`${faculty.name}'s photo`}
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.bio.homeAddress}
                onChange={(e) => handleInputChange(e, "bio", "homeAddress")} // Pass "bio" for the nested section
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              <p>Home Address: {faculty.bio.homeAddress}</p>
            )}

            <p className="text-gray-500">
              {faculty.position}, {faculty.department}
            </p>
            {/* Edit Information Button */}
            {isEditing ? (
              <button
                onClick={handleSaveChanges}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="mt-2 bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
              >
                Edit Information
              </button>
            )}
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-4">
          <h4 className="font-semibold">Bio</h4>
          <p>
            Home Address:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.bio.homeAddress}
                onChange={(e) => handleInputChange(e, "bio", "homeAddress")}
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.bio.homeAddress
            )}
          </p>
          <p>
            Emergency Contact:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.bio.emergencyContact}
                onChange={(e) =>
                  handleInputChange(e, "bio", "emergencyContact")
                }
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.bio.emergencyContact
            )}
          </p>
          <p>
            Date of Birth:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.bio.dateOfBirth}
                onChange={(e) => handleInputChange(e, "bio", "dateOfBirth")}
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.bio.dateOfBirth
            )}
          </p>
          <p>
            Age:{" "}
            {isEditing ? (
              <input
                type="number"
                value={editedFaculty.bio.age}
                onChange={(e) => handleInputChange(e, "bio", "age")}
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.bio.age
            )}
          </p>
          <p>
            Gender:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.bio.gender}
                onChange={(e) => handleInputChange(e, "bio", "gender")}
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.bio.gender
            )}
          </p>
        </div>

        {/* Academic Information Section */}
        <div className="mt-4">
          <h4 className="font-semibold">Academic Information</h4>
          <p>
            Employee ID:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.academicInfo.employeeId}
                onChange={(e) =>
                  handleInputChange(e, "academicInfo", "employeeId")
                }
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.academicInfo.employeeId
            )}
          </p>
          <p>
            Department:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.academicInfo.department}
                onChange={(e) =>
                  handleInputChange(e, "academicInfo", "department")
                }
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.academicInfo.department
            )}
          </p>
          <p>
            Position:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.academicInfo.position}
                onChange={(e) =>
                  handleInputChange(e, "academicInfo", "position")
                }
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.academicInfo.position
            )}
          </p>
          <p>
            Email:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.academicInfo.email}
                onChange={(e) => handleInputChange(e, "academicInfo", "email")}
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.academicInfo.email
            )}
          </p>
          <p>
            Courses:{" "}
            {isEditing ? (
              <input
                type="text"
                value={editedFaculty.academicInfo.courses.join(", ")}
                onChange={(e) =>
                  handleInputChange(e, "academicInfo", "courses")
                }
                className="border border-gray-300 rounded p-1"
              />
            ) : (
              editedFaculty.academicInfo.courses.join(", ")
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
