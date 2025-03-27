import useMainStore from '../../store/mainStore'

export default function Preference() {
  const {
    user,
    toggleNotifications,
    toggleTheme
  } = useMainStore()

  return (
    <div className="bg-white dark:bg-[#1e2131] rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold text-[#2E3360] dark:text-white mb-4">Preferences</h2>

      <div className="flex flex-col gap-6 text-sm text-[#2E3360] dark:text-white">
        <div className="flex items-center justify-between">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={user.notificationsEnabled}
            onChange={toggleNotifications}
            className="w-5 h-5"
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={user.theme === 'dark'}
            onChange={toggleTheme}
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  )
}