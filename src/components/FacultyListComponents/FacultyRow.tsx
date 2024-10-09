import React from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { BsFiles } from "react-icons/bs";

const FacultyRow = ({ faculty, onViewClick, onDeleteClick }) => {
  return (
    <tr className="border-b">
      <td className="p-2 flex items-center space-x-2">
        {/* You can change yung img from the database if meron na*/}
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        {/* when naming database row, takenote this data calling*/}
        <span>{faculty.name}</span>
      </td>
      {/* when naming database row, takenote this data calling*/}
      <td className="p-2">{faculty.academicInfo.employeeId}</td>
      <td className="p-2">{faculty.position}</td>
      <td className="p-2">{faculty.department}</td>
      <td className="p-2 justify-between flex space-x-1">
        <button onClick={() => onViewClick(faculty)}>
          <BsFiles className="h-6 w-6 p-0 hover:text-gray-500" />
        </button>
        <button>
          <FaPencilAlt className="h-6 w-6 hover:text-gray-500" />
        </button>
        <button
          className="text-red-500"
          onClick={() => onDeleteClick(faculty.name)}
        >
          <FaTrash className="h-6 w-5 hover:text-red-400" />
        </button>
      </td>
    </tr>
  );
};

export default FacultyRow;
