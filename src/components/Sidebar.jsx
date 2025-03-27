import { NavLink } from 'react-router-dom'
import {
  FaChartPie, FaExchangeAlt, FaUser, FaChartBar, FaCreditCard,
  FaHandHoldingUsd, FaTools, FaGift, FaCog
} from 'react-icons/fa'
import { FiMoon, FiSun } from 'react-icons/fi'
import Logo from '../assets/soarLogo.svg'
import useMainStore from '../store/mainStore'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: FaChartPie },
  { to: '/transactions', label: 'Transactions', icon: FaExchangeAlt },
  { to: '/accounts', label: 'Accounts', icon: FaUser },
  { to: '/investments', label: 'Investments', icon: FaChartBar },
  { to: '/credit-cards', label: 'Credit Cards', icon: FaCreditCard },
  { to: '/loans', label: 'Loans', icon: FaHandHoldingUsd },
  { to: '/services', label: 'Services', icon: FaTools },
  { to: '/privileges', label: 'My Privileges', icon: FaGift },
  { to: '/settings', label: 'Setting', icon: FaCog },
]

export default function Sidebar() {
  const theme = useMainStore(state => state.user.theme)
  const toggleTheme = useMainStore(state => state.toggleTheme)

  return (
    <aside className="w-64 bg-white dark:bg-[#1e2131] shadow-md h-full overflow-y-auto flex flex-col justify-between">

      <div>
        {/* Logo + title */}
        <div className="flex items-center gap-2 px-6 pt-6 pb-2">
          <img src={Logo} alt="Soar logo" className="w-6 h-6" />
          <span className="text-lg font-semibold text-[#2E3360] dark:text-white">Soar Task</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col mt-6 space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `
                flex items-center gap-3 px-6 py-3 relative
                ${isActive
                  ? 'text-[#2E3360] dark:text-white bg-[#F5F5F5] dark:bg-[#2a2d3d]'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2a2d3d]'}
                ${isActive ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#2E3360] dark:before:bg-white before:rounded-r-lg' : ''}
                transition-colors duration-200 ease-in-out
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Dark Mode Toggle */}
      <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 text-sm text-[#2E3360] dark:text-white hover:opacity-80 transition"
        >
          {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </aside>
  )
}