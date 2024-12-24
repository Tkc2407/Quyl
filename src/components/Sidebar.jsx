import React from "react";
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import {
  FaUserGraduate,
  FaBook,
  FaQuestionCircle,
  FaChartPie,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 shadow-md flex flex-col bg-white rounded-lg">
      {/* Sidebar Header */}
      <div className="p-4 text-2xl font-bold font-sans border-b ">
        Quyl.
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul>
          <li className="p-4 flex items-center gap-3 cursor-pointer rounded-lg mx-2">
            <AiOutlineDashboard className="" /> Dashboard
          </li>
          <li className="p-4 flex items-center gap-3 bg-gray-500 cursor-pointer font-bold rounded-lg mx-2">
            <FaUserGraduate className="" /> Students
          </li>
          <li className="p-4 flex items-center gap-3 cursor-pointer rounded-lg mx-2">
            <FaBook className="" /> Chapter
          </li>
          <li className="p-4 flex items-center gap-3 cursor-pointer rounded-lg mx-2">
            <FaQuestionCircle className="" /> Help
          </li>
          <li className="p-4 flex items-center gap-3 cursor-pointer rounded-lg mx-2">
            <FaChartPie className="" /> Reports
          </li>
          <li className="p-4 flex items-center gap-3 cursor-pointer rounded-lg mx-2">
            <AiOutlineSetting className="" /> Settings
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
