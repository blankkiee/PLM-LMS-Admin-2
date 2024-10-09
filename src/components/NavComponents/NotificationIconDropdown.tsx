import React from "react";

function NotificationIconDropdown() {
  return (
    <div className="bg-gray-200 hidden z-10 absolute rounded-md w-44 group-focus:block right-44 top-14">
      <h2 className="flex p-3">Notifications</h2>

      <ul className=" text-md text-gray-700 font-medium h-full">
        <li className=" hover:bg-slate-300 py-2 rounded-md">
          <a href="">- Notification 1 -</a>
        </li>
        <li className="hover:bg-slate-300 py-2 rounded-md">
          <a href="">- Notification 2 -</a>
        </li>
        <li className="hover:bg-slate-300 py-2 rounded-md">
          <a href="">- Notification 3 -</a>
        </li>
      </ul>
    </div>
  );
}

export default NotificationIconDropdown;
