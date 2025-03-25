import { HiMiniBars3 } from "react-icons/hi2";
import { VscBellDot } from "react-icons/vsc"
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

export default function Topbar({ toggleSidebar }) {
  return (
    <header className="h-16 px-4 sm:px-6 flex items-center justify-between bg-white shadow w-full">
      {/* Left Section - Mobile Hamburger & Page Title */}
      <div className="flex items-center gap-3">
        {/* Hamburger icon for mobile only */}
        <button
          className="md:hidden text-[#2E3360]"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <HiMiniBars3 size={22} />
        </button>

        {/* Page Title - Hidden on mobile, shown on desktop */}
        <h1 className="hidden md:block text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#2E3360]">
          Overview
        </h1>
      </div>

      {/* Mobile Page Title - Shown only on mobile */}
      <h1 className="md:hidden text-base font-semibold text-[#2E3360]">
        Overview
      </h1>

      {/* Center Search Bar - Hidden on mobile, shown on md and up */}
      <div className="hidden md:flex items-center flex-1 justify-center max-w-xl mx-4">
        <div className="flex items-center bg-[#f4f5fa] rounded-full px-4 py-2 w-full">
          <IoSearchOutline className="text-[#9da2c6] mr-2 text-sm" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none text-sm text-[#9da2c6] w-full placeholder:text-[#9da2c6]"
          />
        </div>
      </div>

      {/* Right Section - Controls & Avatar */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Mobile Search Icon */}
        <button className="md:hidden text-[#2E3360]">
          <IoSearchOutline size={22} />
        </button>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-[#f4f5fa] flex items-center justify-center text-[#5f6ac4] hover:bg-[#e6e7f3]">
            <HiOutlineCog6Tooth size={22} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#f4f5fa] flex items-center justify-center text-[#5f6ac4] hover:bg-[#e6e7f3]">
            <VscBellDot size={22} />
          </button>
        </div>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border object-cover"
        />
      </div>
    </header>
  )
}