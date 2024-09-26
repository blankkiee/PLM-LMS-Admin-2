import React from "react";
import { FaBars, FaBell, FaSearch, FaUserCheck } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="relative md:w-65 my-5">
        <span className=" absolute inset-y-1 left-0 flex items-center pl-2">
          <button className="p-1 focus:outline-none text-gray-700 md:text-black">
            <FaSearch />
          </button>
        </span>
        <input
          type="text"
          className="bg-gray-200 w-full px-4 py-2 pl-12 rounded focus:outline-none focus:ring focus:ring-blue-500 "
        />
      </div>
    </>
  );
};

export default Search;
