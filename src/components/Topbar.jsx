import React from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import { VscBellDot } from "react-icons/vsc";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import useMainStore from '../store/mainStore';

export default function Topbar({ toggleSidebar, title = "Overview" }) {
  const user = useMainStore((s) => s.user);

  return (
    <header className="relative h-auto md:h-16 px-4 sm:px-6 flex flex-col bg-white shadow w-full">
      {/* Top Row - Mobile Hamburger, Title, and Controls */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-[#2E3360]"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <HiMiniBars3 size={22} />
          </button>

          {/* Desktop Title */}
          <h1 className="text-xl font-semibold text-[#2E3360] hidden md:block">
            {title}
          </h1>
        </div>

        {/* Mobile Title and Avatar */}
        <div className="md:hidden flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-[#2E3360] text-center">
            {title}
          </h1>

          <img
            src={user?.avatar || "https://i.pravatar.cc/40"}
            alt="User avatar"
            className="w-10 h-10 rounded-full border object-cover"
          />
        </div>

        {/* Right Section - Controls & Avatar */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Add searchbar here */}
          <div className="flex items-center bg-[#F4F5FA] rounded-full p-2.5">
            <IoSearchOutline size={22} color="#9DA2C6" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm text-[#2E3360] placeholder:text-[#9DA2C6]" />
          </div>
          {/* Desktop Controls */}
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 rounded-full bg-[#F4F5FA] flex items-center justify-center text-[#5F6AC4] hover:bg-[#E6E7F3]">
              <HiOutlineCog6Tooth size={22} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F4F5FA] flex items-center justify-center text-[#5F6AC4] hover:bg-[#E6E7F3]">
              <VscBellDot size={22} />
            </button>
          </div>

          <img
            src={user?.avatar || "https://i.pravatar.cc/40"}
            alt="User avatar"
            className="w-10 h-10 rounded-full border object-cover"
          />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden w-full pb-4">
        <div className="flex items-center bg-[#F4F5FA] rounded-2xl px-4 py-2 w-full">
          <input
            type="text"
            placeholder="Search for something"
            className="rounded-full bg-transparent outline-none text-sm text-[#2E3360] w-full placeholder:text-[#9DA2C6]"
          />
        </div>
      </div>
    </header>
  );
}