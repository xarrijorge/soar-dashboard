import Layout from '../layout/Layout'
import useMainStore from '../store/mainStore'

export default function Accounts() {
  const accounts = useMainStore(state => state.accounts)

  return (
    <Layout title="Accounts">
      <div className="bg-white dark:bg-[#1e2131] p-6 rounded-2xl shadow space-y-6">
        <h2 className="text-xl font-semibold text-[#2E3360] dark:text-white mb-4">Your Accounts</h2>

        <div className="space-y-4">
          {accounts.map((acc) => (
            <div
              key={acc.id}
              className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-gray-50 dark:bg-[#2a2d3d]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#2E3360] dark:text-white">{acc.accountNumber}</h3>
                  <p className="text-sm text-[#9DA2C6] dark:text-gray-400">{acc.currency} Account</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#9DA2C6] dark:text-gray-400">Balance</p>
                <p className="text-lg font-bold text-[#2E3360] dark:text-white">
                  {acc.currency}{acc.balance.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}