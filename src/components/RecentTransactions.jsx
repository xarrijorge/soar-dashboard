import TransactionItem from './TransactionItem'
import useMainStore from '../store/mainStore'


export default function RecentTransactions() {
    const transactions = useMainStore(state => state.transactions).slice(0, 3)
    return (
        <section className="mb-8 h-[300px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#2E3360] dark:text-white">Recent Transactions</h2>
                <button className="text-sm text-[#5F6AC4] dark:text-[#5F6AC4] hover:underline">See All</button>
            </div>

            <div className="bg-white dark:bg-[#1e2131] rounded-xl shadow-md p-4 h-[calc(100%-50px)] overflow-auto">
                <div className="space-y-2">
                    {transactions.map(tx => (
                        <TransactionItem key={tx.id} tx={tx} />
                    ))}
                </div>
            </div>
        </section>
    )
}