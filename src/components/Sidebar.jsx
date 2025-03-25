import { NavLink } from 'react-router-dom'
import { FaChartPie, FaCog } from 'react-icons/fa'
import Logo from '../assets/soarLogo.svg'

export default function Sidebar() {
   return (
    <aside className="w-64 bg-white shadow-md h-full overflow-y-auto">
      {/* Logo + title */}
      <div className="flex items-center gap-2 px-6 pt-6 pb-2">
        <img src={Logo} alt="Soar logo" className="w-6 h-6" />
        <span className="text-lg font-semibold text-[#2E3360]">Soar Task</span>
      </div>
      {/* Nav links */}
      <nav className="flex flex-col mt-6 space-y-1">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `
            flex items-center gap-3 px-6 py-3 
            ${isActive ? 'text-[#2E3360] bg-[#F5F5F5] relative' : 'text-gray-500 hover:bg-gray-100'}
            ${isActive ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#2E3360] before:rounded-r-lg' : ''}
            transition-colors duration-200 ease-in-out
          `}
        >
          <FaChartPie className="w-5 h-5" />
          <span className="text-sm">Dashboard</span>
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => `
            flex items-center gap-3 px-6 py-3 
            ${isActive ? 'text-[#2E3360] bg-[#F5F5F5] relative' : 'text-gray-500 hover:bg-gray-100'}
            ${isActive ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#2E3360] before:rounded-r-lg' : ''}
            transition-colors duration-200 ease-in-out
          `}
        >
          <FaCog className="w-5 h-5" />
          <span className="text-sm">Settings</span>
        </NavLink>
      </nav>
    </aside>
  )
}