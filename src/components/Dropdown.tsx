"use client";

import { useState } from "react";

import { LuTableProperties, LuFileHeart, LuLogOut } from "react-icons/lu";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { RiUser3Line } from "react-icons/ri";

function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <GoChevronDown
        className={`cursor-pointer hover:text-slate-300 ${
          showDropdown && "text-slate-300"
        }`}
        onClick={() => setShowDropdown((prev) => !prev)}
      />
      <div
        className={`before:absolute before:-top-2 before:right-6 before:rotate-45 before:h-16 before:w-16 before:bg-white before:rounded-xl before:-z-[1] 
                  absolute top-full -right-12 mt-6 min-w-72 border rounded-3xl text-black bg-white z-10 px-5 py-2 ${
                    showDropdown ? "flex flex-col" : "hidden"
                  }`}
      >
        <button className="w-full flex items-center py-5 border-b">
          <RiUser3Line className="block align-middle mr-3 w-5 h-6" />
          <span className="text-sm">Account Overview</span>
          <GoChevronRight className="block align-middle ml-auto" />
        </button>
        <button className="w-full flex items-center py-5 border-b">
          <LuTableProperties className="block align-middle mr-3 w-5 h-6" />
          <span className="text-sm">Orders</span>
          <GoChevronRight className="block align-middle ml-auto" />
        </button>
        <button className="w-full flex items-center py-5 border-b">
          <SlCalender className="block align-middle mr-3 w-5 h-6" />
          <span className="text-sm">Installments</span>
          <GoChevronRight className="block align-middle ml-auto" />
        </button>
        <button className="w-full flex items-center py-5">
          <LuFileHeart className="block align-middle mr-3 w-5 h-6" />
          <span className="text-sm">Wishes</span>
          <GoChevronRight className="block align-middle ml-auto" />
        </button>
        <div className="flex -mx-5 h-1.5 bg-gray-100" />
        <button className="w-full flex items-center py-5 text-red-500">
          <LuLogOut className="block align-middle mr-3 w-5 h-6" />
          <span className="text-sm">Logout</span>
          {/* <GoChevronRight className="block align-middle ml-auto" /> */}
        </button>
      </div>
    </>
  );
}

export default Dropdown;
