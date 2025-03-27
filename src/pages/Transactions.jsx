import Layout from '../layout/Layout'
import useMainStore from '../store/mainStore'
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa'

export default function Transactions() {
  const transactions = useMainStore(state => state.transactions)

//   const iconMap = {
//     card: <FaCreditCard className="text-yellow-500" size={18} />,
//     paypal: <FaPaypal className="text-blue-500" size={18} />,
//     cash: <FaMoneyBillWave className="text-green-500" size={18} />
//   }

  return (
    <Layout title="Transactions">
      <div className="bg-white dark:bg-[#1e2131] p-6 rounded-2xl shadow space-y-4 overflow-auto">
        <h2 className="text-xl font-semibold text-[#2E3360] dark:text-white mb-4">All Transactions</h2>

        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-[#2E3360] dark:text-white border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2 font-semibold">Type</th>
              <th className="px-4 py-2 font-semibold">Description</th>
              <th className="px-4 py-2 font-semibold">Date</th>
              <th className="px-4 py-2 font-semibold">Category</th>
              <th className="px-4 py-2 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id} className="border-b border-gray-100 dark:border-gray-700">
                <td className="px-4 py-3">{tx.type}</td>
                <td className="px-4 py-3 text-[#2E3360] dark:text-gray-300">{tx.description}</td>
                <td className="px-4 py-3 text-[#2E3360] dark:text-gray-300">{tx.date}</td>
                <td className="px-4 py-3 text-[#2E3360] dark:text-gray-300">{tx.category}</td>
                <td
                  className={`px-4 py-3 font-semibold ${
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