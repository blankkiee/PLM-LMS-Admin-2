import React from "react";

function ProfileDropdown() {
  return (
    <div className="bg-gray-200 hidden z-10 absolute rounded-md w-44 group-focus:block right-10 top-14">
      <ul className=" text-md text-gray-700 font-medium">
        <li className=" hover:bg-slate-300 py-2 rounded-md">
          <a href="">Profile</a>
        </li>
        <li className="hover:bg-slate-300 py-2 rounded-md">
          <a href="">Settings</a>
        </li>
        <li className="hover:bg-slate-300 py-2 rounded-md">
          <a href="">Log out</a>
        </li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;
