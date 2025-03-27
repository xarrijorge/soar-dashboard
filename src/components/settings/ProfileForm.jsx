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
    
    // Clear previous error for this field when user starts typing
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
      // Clear errors if validation passes
      setErrors({})
      
      // Save changes
      saveUserChanges(formData)
      
      // Optional: Reset password field after save
      setFormData(prev => ({ ...prev, password: '' }))
      
      // Success feedback
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
          <label className="block text-[#2E3360] font-medium mb-1">{label}</label>
          <input
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            className={`w-full border rounded-lg p-2.5 text-[#2E3360] bg-gray-50 ${errors[name] ? 'border-red-500' : ''}`}
          />
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
        </div>
      ))}

      {/* Password */}
      <div>
        <label className="block text-[#2E3360] font-medium mb-1">Password</label>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password (optional)"
            className={`w-full border rounded-lg p-2.5 text-[#2E3360] bg-gray-50 pr-10 ${errors.password ? 'border-red-500' : ''}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-2.5 right-3 text-[#9DA2C6]"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-[#2E3360] font-medium mb-1">Date of Birth</label>
        <input
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          className={`w-full border rounded-lg p-2.5 text-[#2E3360] bg-gray-50 ${errors.dob ? 'border-red-500' : ''}`}
        />
        {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
      </div>

      {/* Submit */}
      <div className="md:col-span-2 flex justify-end mt-4">
        <button
          type="submit"
          className="bg-[#2E2E2E] text-white py-3 px-20 rounded-xl hover:bg-black transition-all"
        >
          Save
        </button>
      </div>
    </form>
  )
}