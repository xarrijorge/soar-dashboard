import TransactionItem from './TransactionItem'

const dummyTransactions = [
    { id: 1, type: 'paypal', description: 'Deposit Paypal', date: '25 Jan 2021', amount: 2500 },
    { id: 2, type: 'card', description: 'Transfer to Card', date: '28 Jan 2021', amount: -850 },
    { id: 3, type: 'cash', description: 'Cash from Jemi Wilson', date: '21 Jan 2021', amount: 5400 },
]

export default function RecentTransactions() {
    return (
        <section className="mb-8 h-[300px]"> {/* Fixed height to match cards */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#2E3360]">Recent Transactions</h2>
                <button className="text-sm text-[#5F6AC4] hover:underline">See All</button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 h-[calc(100%-50px)] overflow-auto">
                <div className="space-y-2">
                    {dummyTransactions.map(tx => (
                        <TransactionItem key={tx.id} tx={tx} />
                    ))}
                </div>
            </div>
        </section>
    )
}