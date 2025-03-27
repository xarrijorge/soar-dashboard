import { useState } from 'react'
import useMainStore from '../../store/mainStore'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function ProfileForm() {
  const {
    user,
    saveUserChanges,
    validateUserData,
  } = useMainStore()

  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    username: user?.username || '',
    email: user?.email || '',
    password: '',
    dob: user?.dob || '',
    presentAddress: user?.presentAddress || '',
    permanentAddress: user?.permanentAddress || '',
    city: user?.city || '',
    postalCode: user?.postalCode || '',
    country: user?.country || '',
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateUserData(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      saveUserChanges(formData)
      setFormData(prev => ({ ...prev, password: '' }))
      alert('Profile updated successfully!')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
    >
      {[
        { label: 'Your Name', name: 'fullName' },
        { label: 'User Name', name: 'username' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Present Address', name: 'presentAddress' },
        { label: 'Permanent Address', name: 'permanentAddress' },
        { label: 'City', name: 'city' },
        { label: 'Postal Code', name: 'postalCode' },
        { label: 'Country', name: 'country' },
      ].map(({ label, name, type = 'text' }) => (
        <div key={name}>
          <label className="block font-medium mb-1 text-[#2E3360] dark:text-white">
            {label}
          </label>
          <input
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            placeholder={user?.[name] || ''}
            className={`w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-[#2a2d3d] text-[#2E3360] dark:text-white placeholder:text-[#9DA2C6] dark:placeholder:text-gray-400 ${errors[name] ? 'border-red-500' : ''}`}
          />
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
        </div>
      ))}

      {/* Password */}
      <div>
        <label className="block font-medium mb-1 text-[#2E3360] dark:text-white">Password</label>
        <div className="relative group">
          <input
            disabled
            name="password"
            placeholder="Update in Security tab"
            className={`cursor-not-allowed w-full border rounded-lg p-2.5 pr-10 bg-gray-50 dark:bg-[#2a2d3d] text-[#2E3360] dark:text-white placeholder:text-[#9DA2C6] dark:placeholder:text-gray-400 cursor-not-allowed ${errors.password ? 'border-red-500' : ''}`}
          />
          <div className="absolute top-2.5 right-3 text-[#9DA2C6] dark:text-gray-400 cursor-not-allowed">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>

          {/* Tooltip */}
          <div className="absolute top-full left-0 mt-2 w-max bg-gray-800 text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            Please use the Security tab to update your password
          </div>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>


      {/* Date of Birth */}
      <div>
        <label className="block font-medium mb-1 text-[#2E3360] dark:text-white">Date of Birth</label>
        <input
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          className={`w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-[#2a2d3d] text-[#2E3360] dark:text-white ${errors.dob ? 'border-red-500' : ''}`}
        />
        {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 flex justify-end mt-4">
        <button
          type="submit"
          className="bg-[#2E2E2E] hover:bg-black transition-all text-white font-medium py-3 px-10 rounded-xl w-full md:w-1/3"
        >
          Save
        </button>
      </div>
    </form>
  )
}