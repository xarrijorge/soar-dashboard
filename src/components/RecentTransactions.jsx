import TransactionItem from './TransactionItem'
import useMainStore from '../store/mainStore'


export default function RecentTransactions() {
    const transactions = useMainStore(state => state.transactions).slice(0, 3)
    return (
        <section className="mb-8 h-[300px]"> {/* Fixed height to match cards */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#2E3360]">Recent Transactions</h2>
                <button className="text-sm text-[#5F6AC4] hover:underline">See All</button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 h-[calc(100%-50px)] overflow-auto">
                <div className="space-y-2">
                    {transactions.map(tx => (
                        <TransactionItem key={tx.id} tx={tx} />
                    ))}
                </div>
            </div>
        </section>
    )
}