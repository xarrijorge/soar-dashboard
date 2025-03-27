export default function Security() {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl space-y-4">
        <div>
          <label className="block mb-1 text-[#2E3360] font-medium">Old Password</label>
          <input
            type="password"
            placeholder="Enter old password"
            className="w-full border rounded-lg p-2.5 text-[#2E3360] bg-gray-50"
          />
        </div>
  
        <div>
          <label className="block mb-1 text-[#2E3360] font-medium">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border rounded-lg p-2.5 text-[#2E3360] bg-gray-50"
          />
        </div>
  
        <div>
          <label className="block mb-1 text-[#2E3360] font-medium">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full border rounded-lg p-2.5 text-[#2E3360] bg-gray-50"
          />
        </div>
  
        <button className="mt-4 bg-[#2E2E2E] text-white py-2 px-6 rounded-full hover:bg-black transition">
          Update Password
        </button>
      </div>
    )
  }