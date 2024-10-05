import React from "react";
import ProfileDropdown from "./NavComponents/ProfileDropdown";
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <nav className="border-b px-10 py-5 flex justify-between">
      <div className="flex items-center text-xl">
        <FaBars
          className=" me-4 cursor-pointer hover:text-gray-400"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className=" font-semibold text-gray-700">
          <h1>Faculty List</h1>{" "}
        </span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="items-center">
          <FaBell className="w-6 h-6" />
        </div>

        <div className="realtive">
          <button className=" group flex items-center space-x-2">
            <FaUser className="w-6 h-6 " />
            <h2>Admin</h2>
          </button>
        </div>
        <div className="realtive">
          <button className=" group">
            <RiArrowDropDownLine className="w-6 h-6 mt-1 " />
            <ProfileDropdown />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
