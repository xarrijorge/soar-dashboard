import Layout from '../layout/Layout'
import MyCards from '../components/MyCards'
import RecentTransactions from '../components/RecentTransactions'
import WeeklyActivity from '../components/WeeklyActivity'
import ExpenseStatistics from '../components/ExpenseStatistics'
import QuickTransfer from '../components/QuickTransfer'
import BalanceHistory from '../components/BalanceHistory'

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <MyCards />
        </div>
        <div className="md:col-span-1">
          <RecentTransactions />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-[#2E3360] mb-4">Weekly Activity</h2>
          <WeeklyActivity />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[#2E3360] mb-4">Expense Statistics</h2>
          <ExpenseStatistics className="md:col-span-1" />
        </div>
        <div className='md:col-span-1'>
          <h2 className="text-lg font-semibold text-[#2E3360] mb-4">Quick Transfer</h2>
          <QuickTransfer />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-[#2E3360] mb-4">Balance History</h2>
          <BalanceHistory />
        </div>
      </div>
    </Layout>
  )
}

