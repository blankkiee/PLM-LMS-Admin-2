import React from "react";
import { FaBars, FaBell, FaUser } from "react-icons/fa";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <nav className="border-b px-10 py-5 flex justify-between">
      <div className="flex items-center text-xl">
        <FaBars
          className=" me-4 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className=" font-semibold text-gray-700">
          <h1>Faculty List</h1>{" "}
        </span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="">
          <FaBell className="w-6 h-6" />
        </div>

        <div className="realtive">
          <button className=" group">
            <FaUser className="w-6 h-6 mt-1 " />
            <div className="bg-gray-200 hidden z-10 absolute rounded-lg shadow w-32 group-focus:block right-5">
              <ul className="py-2 text-sm text-gray-500 font-medium">
                <li className="">
                  <a href="">Profile</a>
                </li>
                <li>
                  <a href="">Settings</a>
                </li>
                <li>
                  <a href="">Log out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
