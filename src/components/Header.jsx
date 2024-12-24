import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 h-16 bg-white shadow-md m-4 rounded-lg">
      {/* Search Bar */}
      <div className="flex items-center w-7/12">
        <input
          type="text"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring"
          placeholder="Search your course"
        />
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        <FaQuestionCircle className="text-xl cursor-pointer" />
        <div className="relative">
          <FaEnvelope className="text-xl cursor-pointer" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-white border-2"></div>
        </div>
        <div className="relative">
          <FaBell className="text-xl cursor-pointer" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-white border-2"></div>
        </div>
        <AiOutlineSetting size={24} />
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
