import React from 'react'
import { HiMiniBars3 } from "react-icons/hi2"
import { VscBellDot } from "react-icons/vsc"
import { HiOutlineCog6Tooth } from "react-icons/hi2"
import { IoSearchOutline } from "react-icons/io5"
import useMainStore from '../store/mainStore'

export default function Topbar({ toggleSidebar, title = "Overview" }) {
  const user = useMainStore((s) => s.user)

  return (
    <header className="relative h-auto md:h-16 px-4 sm:px-6 flex flex-col bg-white dark:bg-[#1e2131] shadow w-full">
      {/* Top Section */}
      <div className="flex items-center justify-between py-4">
        {/* Left: Hamburger & Title */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-[#2E3360] dark:text-white" onClick={toggleSidebar}>
            <HiMiniBars3 size={22} />
          </button>
          <h1 className="text-xl font-semibold text-[#2E3360] dark:text-white hidden md:block">
            {title}
          </h1>
        </div>

        {/* Center: Mobile Title + Avatar */}
        <div className="flex md:hidden flex-1 items-center justify-between gap-3">
          <div></div>
          <h1 className="text-2xl font-semibold text-[#2E3360] dark:text-white text-center">
            {title}
          </h1>
          <img
            src={user?.avatar}
            alt="User avatar"
            className="w-10 h-10 rounded-full border object-cover justify-self-end"
          />
        </div>

        {/* Right: Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-[#F4F5FA] dark:bg-[#2A2B3D] rounded-full p-2.5 flex-grow">
            <IoSearchOutline size={22} color="#9DA2C6" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-[#2E3360] dark:text-white placeholder:text-[#9DA2C6] w-full ml-2"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-[#F4F5FA] dark:bg-[#2A2B3D] text-[#5F6AC4] hover:bg-[#E6E7F3] flex items-center justify-center">
            <HiOutlineCog6Tooth size={22} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#F4F5FA] dark:bg-[#2A2B3D] text-[#5F6AC4] hover:bg-[#E6E7F3] flex items-center justify-center">
            <VscBellDot size={22} />
          </button>
          <div className="ml-auto">
            <img
              src={user?.avatar}
              alt="User avatar"
              className="w-10 h-10 rounded-full border object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden w-full pb-4">
        <div className="flex items-center bg-[#F4F5FA] dark:bg-[#2A2B3D] rounded-2xl px-4 py-2 w-full">
          <input
            type="text"
            placeholder="Search for something"
            className="rounded-full bg-transparent outline-none text-sm text-[#2E3360] dark:text-white w-full placeholder:text-[#9DA2C6]"
          />
        </div>
      </div>
    </header>
  )
}