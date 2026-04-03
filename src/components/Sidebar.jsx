// components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  const menu = ["Dashboard", "Internships", "Courses", "Rankings"];

  return (
    <div className="w-64 bg-[#0B132B] text-white shadow-md p-5 hidden md:flex flex-col">
      <h2 className="text-xl font-bold mb-6">Legal Olympiad</h2>

      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`p-2 rounded-lg cursor-pointer transition ${
              item === "Dashboard"
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;