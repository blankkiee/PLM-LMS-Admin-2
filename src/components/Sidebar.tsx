import React from "react";
import { FaHome, FaFileAlt, FaRegListAlt, FaArchive } from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`${
        sidebarToggle ? " hidden " : " block "
      } w-64 bg-white fixed h-full px-4 py-2 border-r shadow-xl`}
    >
      <div className="my-2 mb-4">
        <img
          src="./src/assets/images/plmlogo-header.png"
          alt="PLM Logo"
          className="  "
        />
      </div>

      <ul className="my-20 space-y-5">
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
            <FaArchive className="inline-block w-6 h-6 mx-2"></FaArchive>
            Archive
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
