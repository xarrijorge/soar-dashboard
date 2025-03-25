import Layout from '../layout/Layout'
import MyCards from '../components/MyCards'
import RecentTransactions from '../components/RecentTransactions'

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
      </div>
    </Layout>
  )
}