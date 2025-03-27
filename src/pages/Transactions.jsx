import Layout from '../layout/Layout'
import useMainStore from '../store/mainStore'
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa'

export default function Transactions() {
  const transactions = useMainStore(state => state.transactions)

  const iconMap = {
    card: <FaCreditCard className="text-yellow-500" size={18} />,
    paypal: <FaPaypal className="text-blue-500" size={18} />,
    cash: <FaMoneyBillWave className="text-green-500" size={18} />
  }

  return (
    <Layout title="Transactions">
      <div className="bg-white dark:bg-[#1e2131] p-6 rounded-2xl shadow overflow-auto">
        <h2 className="text-xl font-semibold text-[#2E3360] dark:text-white mb-4">All Transactions</h2>

        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-[#2E3360] dark:text-white border-b border-gray-200 dark:border-gray-700">
              <th className="md:hidden px-4 py-2 font-semibold">Amount</th>
              <th className="px-4 py-2 font-semibold sm:table-cell">Type</th>
              <th className="px-4 py-2 font-semibold sm:table-cell">Description</th>
              <th className="px-4 py-2 font-semibold sm:table-cell">Date</th>
              <th className="px-4 py-2 font-semibold sm:table-cell">Category</th>
              <th className="px-4 py-2 font-semibold sm:table-cell hidden">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id} className="border-b border-gray-100 dark:border-gray-700">
                {/* Show amount first on mobile */}
                <td
                  className={`md:hidden px-4 py-3 font-semibold sm:table-cell ${
                    tx.amount > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount).toLocaleString()}
                </td>

                <td className="px-4 py-3 sm:table-cell">{iconMap[tx.type]}</td>
                <td className="px-4 py-3 text-[#2E3360] dark:text-gray-300 sm:table-cell">{tx.description}</td>
                <td className="px-4 py-3 text-[#2E3360] dark:text-gray-300 sm:table-cell">{tx.date}</td>
                <td className="px-4 py-3 text-[#2E3360] dark:text-gray-300 sm:table-cell">{tx.category}</td>
                <td
                  className={`hidden px-4 py-3 font-semibold sm:table-cell ${
                    tx.amount > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}