import { useState } from 'react'
import useMainStore from '../store/mainStore'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function AddCardModal({ open, onClose, onSubmit }) {
  const addCard = useMainStore(state => state.addCard)
  const user = useMainStore(state => state.user)
  const accounts = useMainStore(state => state.accounts)

  const [formData, setFormData] = useState({
    cardHolder: user?.fullName || '',
    currency: '$',
    color: 'dark',
    account: accounts?.[0]?.id || ''
  })

  const generateCardNumber = () => {
    const randomSegment = () => Math.floor(1000 + Math.random() * 9000)
    return `${randomSegment()}${randomSegment()}${randomSegment()}${randomSegment()}`
  }

  const generateValidThru = () => {
    const today = new Date()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = today.getFullYear() + 3
    return `${month}/${String(year).slice(-2)}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const selectedAccount = accounts.find(acc => acc.id === Number(formData.account))
    if (!formData.cardHolder || !selectedAccount) {
      alert('Please complete all fields')
      return
    }

    const newCard = {
      id: Date.now(),
      number: generateCardNumber(),
      validThru: generateValidThru(),
      balance: 0,
      cardHolder: formData.cardHolder,
      currency: formData.currency,
      color: formData.color,
      account: selectedAccount.id,
    }

    onSubmit(newCard)
  }

  // If modal is not open, return null
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1e2131] p-6 rounded-xl shadow-xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <IoClose size={22} />
        </button>

        <h2 className="text-lg font-semibold mb-4 text-[#2E3360] dark:text-white">
          Apply for New Card
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="cardHolder"
            placeholder="Card Holder Name"
            value={formData.cardHolder}
            onChange={handleChange}
            className="w-full border rounded-lg p-2.5 text-[#2E3360] dark:text-white bg-gray-50 dark:bg-[#2a2d3d] text-sm"
          />

          <div className="flex gap-2">
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="flex-1 border rounded-lg p-2.5 text-[#2E3360] dark:text-white bg-gray-50 dark:bg-[#2a2d3d] text-sm"
            >
              <option value="$">USD</option>
              <option value="€">EUR</option>
              <option value="£">GBP</option>
            </select>

            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="flex-1 border rounded-lg p-2.5 text-[#2E3360] dark:text-white bg-gray-50 dark:bg-[#2a2d3d] text-sm"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>

          <select
            name="account"
            value={formData.account}
            onChange={handleChange}
            className="w-full border rounded-lg p-2.5 text-[#2E3360] dark:text-white bg-gray-50 dark:bg-[#2a2d3d] text-sm"
          >
            {accounts?.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.accountNumber} - {acc.currency}
              </option>
            ))}
          </select>

          <div className="flex justify-end">
            <Link to="/accounts" className="align-self-end text-[#5F6AC4] dark:text-[#8F9CFF] hover:underline mr-auto">
             Add a new account 
            </Link> 
            <button
              type="submit"
              className="bg-[#5F6AC4] text-white px-5 py-2 rounded-lg hover:bg-[#4e57b0] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}