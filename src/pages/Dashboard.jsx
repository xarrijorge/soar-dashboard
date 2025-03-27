import { useEffect } from 'react'
import Layout from '../layout/Layout'
import MyCards from '../components/MyCards'
import RecentTransactions from '../components/RecentTransactions'
import WeeklyActivity from '../components/WeeklyActivity'
import ExpenseStatistics from '../components/ExpenseStatistics'
import QuickTransfer from '../components/QuickTransfer'
import BalanceHistory from '../components/BalanceHistory'
import useMainStore from '../store/mainStore'

export default function Dashboard() {
  const fetchInitialData = useMainStore(state => state.fetchInitialData)
  const isLoading = useMainStore(state => state.isLoading)
  const error = useMainStore(state => state.error)

  useEffect(() => {
    fetchInitialData()
  }, [fetchInitialData])

  return (
    <Layout>
      {/* Spinner Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#5F6AC4] border-t-transparent rounded-full animate-spin"/>
          <h6 className='p-4'>Loading Data ...</h6>
        </div>
      )}

      {error ? (
        <div className="text-center py-20 text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <MyCards />
          </div>
          <div className="md:col-span-1">
            <RecentTransactions />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-[#2E3360] dark:text-white mb-4">Weekly Activity</h2>
            <WeeklyActivity />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#2E3360] dark:text-white mb-4">Expense Statistics</h2>
            <ExpenseStatistics className="md:col-span-1" />
          </div>
          <div className='md:col-span-1'>
            <h2 className="text-lg font-semibold text-[#2E3360] dark:text-white mb-4">Quick Transfer</h2>
            <QuickTransfer />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-[#2E3360] dark:text-white mb-4">Balance History</h2>
            <BalanceHistory />
          </div>
        </div>
      )}
    </Layout>
  )
}
