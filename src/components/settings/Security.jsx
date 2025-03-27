export default function Security() {
  return (
    <div className="bg-white dark:bg-[#1e2131] p-6 rounded-2xl shadow-md max-w-xl space-y-4 text-[#2E3360] dark:text-white">
      <div>
        <label className="block mb-1 font-medium">Old Password</label>
        <input
          type="password"
          placeholder="Enter old password"
          className="w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-[#2a2d3d] text-[#2E3360] dark:text-white placeholder:text-[#9DA2C6] dark:placeholder:text-gray-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-[#2a2d3d] text-[#2E3360] dark:text-white placeholder:text-[#9DA2C6] dark:placeholder:text-gray-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Confirm New Password</label>
        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-[#2a2d3d] text-[#2E3360] dark:text-white placeholder:text-[#9DA2C6] dark:placeholder:text-gray-400"
        />
      </div>

      <button className="mt-4 bg-[#2E2E2E] hover:bg-black transition text-white font-medium py-3 px-8 rounded-xl">
        Update Password
      </button>
    </div>
  )
}