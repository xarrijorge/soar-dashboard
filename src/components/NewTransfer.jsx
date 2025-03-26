import { FaPaperPlane } from 'react-icons/fa'

export default function NewTransfer() {
  return (
    <div className="mt-6 relative flex justify-evenly items-center">
      <input
        type="text"
        placeholder="Write amount"
        defaultValue="525.50"
        className="w-full py-2 pl-6 pr-28 rounded-full border border-gray-200 text-sm outline-none text-[#2E3360] placeholder:text-[#9DA2C6]"
      />
      <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#2E2E2E] text-white text-sm px-5 py-2 rounded-full hover:bg-black transition flex items-center gap-2">
        Send <FaPaperPlane size={12} />
      </button>
    </div>
  )
}
