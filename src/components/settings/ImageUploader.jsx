import { MdEdit } from "react-icons/md"
import useMainStore from '../../store/mainStore'

export default function ImageUploader() {
  const user = useMainStore((s) => s.user)
  const updateUserField = useMainStore((s) => s.updateUserField)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      updateUserField('avatar', imageUrl)
    }
  }

  return (
    <div className="relative w-24 h-24 sm:w-20 sm:h-20">
      <img
        src={user?.avatar || 'https://i.pravatar.cc/100'}
        alt="User Avatar"
        className="w-full h-full rounded-full object-cover border shadow-sm"
      />
      <label className="absolute bottom-0 right-0 bg-[#2E3360] text-white p-1 rounded-full cursor-pointer">
        <MdEdit size={14} />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
      </label>
    </div>
  )
}