import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import useMainStore from '../store/mainStore'

export default function Layout({ children, title = 'Overview' }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const { user } = useMainStore()
  const theme = user?.theme || 'light'

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-[#111827]">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed z-40 inset-y-0 left-0 transform 
            bg-white dark:bg-[#1E2131] w-64 shadow-md 
            transition-transform duration-300 ease-in-out 
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0 md:relative md:z-auto
          `}
        >
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 w-full overflow-hidden">
          <Topbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} title={title} />
          <main className="flex-1 p-4 sm:p-6 overflow-auto bg-gray-100 dark:bg-[#191C24]">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}