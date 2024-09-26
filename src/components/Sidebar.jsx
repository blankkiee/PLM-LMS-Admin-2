import React from "react";
import { FaHome, FaFileAlt, FaRegListAlt } from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`${
        sidebarToggle ? " hidden " : " block "
      } w-64 bg-white fixed h-full px-4 py-2 border-r`}
    >
      <div className="my-2 mx-2 mb-4">
        <img
          src="./src/assets/images/plmlogo-header.png"
          alt="PLM Logo"
          className="  "
        />
      </div>

      <ul className="mt-3">
        <li className="mb-2 py-5 rounded hover:shadow-lg hover:bg-gray-200 ">
          <a href="" className="mx-2">
            <FaHome className="inline-block w-6 h-6 mx-2 "></FaHome>
            Home
          </a>
        </li>
        <li className="mb-2 py-5 rounded hover:shadow-lg hover:bg-gray-200 ">
          <a href="" className="mx-2">
            <FaRegListAlt className="inline-block w-6 h-6 mx-2"></FaRegListAlt>
            Faculty List
          </a>
        </li>
        <li className="mb-2 py-5 rounded hover:shadow-lg hover:bg-gray-200 ">
          <a href="" className="mx-2">
            <FaFileAlt className="inline-block w-6 h-6 mx-2"></FaFileAlt>
            Archive
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
