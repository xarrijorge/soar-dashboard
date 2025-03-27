import { NavLink } from 'react-router-dom'
import {
  FaChartPie, FaExchangeAlt, FaUser, FaChartBar, FaCreditCard,
  FaHandHoldingUsd, FaTools, FaGift, FaCog
} from 'react-icons/fa'
import Logo from '../assets/soarLogo.svg'

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
  return (
    <aside className="w-64 bg-white shadow-md h-full overflow-y-auto">
      {/* Logo + title */}
      <div className="flex items-center gap-2 px-6 pt-6 pb-2">
        <img src={Logo} alt="Soar logo" className="w-6 h-6" />
        <span className="text-lg font-semibold text-[#2E3360]">Soar Task</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-6 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `
              flex items-center gap-3 px-6 py-3 
              ${isActive ? 'text-[#2E3360] bg-[#F5F5F5] relative' : 'text-gray-500 hover:bg-gray-100'}
              ${isActive ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#2E3360] before:rounded-r-lg' : ''}
              transition-colors duration-200 ease-in-out
            `}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}