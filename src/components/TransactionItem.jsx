import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa'

export default function TransactionItem({ tx }) {
  const iconMap = {
    card: (
      <div className="bg-yellow-50 dark:bg-yellow-900 w-10 h-10 rounded-full flex items-center justify-center">
        <FaCreditCard size={16} className="text-yellow-500" />
      </div>
    ),
    paypal: (
      <div className="bg-blue-50 dark:bg-blue-900 w-10 h-10 rounded-full flex items-center justify-center">
        <FaPaypal size={16} className="text-blue-500" />
      </div>
    ),
    cash: (
      <div className="bg-teal-50 dark:bg-teal-900 w-10 h-10 rounded-full flex items-center justify-center">
        <FaMoneyBillWave size={16} className="text-teal-500" />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between py-3 border-b w-full border-gray-100 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        {iconMap[tx.type]}
        <div>
          <div className="text-sm font-medium text-[#2E3360] dark:text-white">
            {tx.description}
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-500">{tx.date}</div>
        </div>
      </div>

      <div className={`text-sm font-semibold ${tx.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount).toLocaleString()}
      </div>
    </div>
  )
}