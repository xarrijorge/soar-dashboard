import useMainStore from '../store/mainStore'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
export default function ExpenseStatistics() {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const transactions = useMainStore((state) => state.transactions)
  // Group totals by category
  const categoryTotals = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => {
      const cat = t.category || 'Uncategorized'
      acc[cat] = (acc[cat] || 0) + Math.abs(t.amount)
      return acc
    }, {})
  const labels = Object.keys(categoryTotals)
  const values = Object.values(categoryTotals)
  const total = values.reduce((sum, v) => sum + v, 0)
  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses',
        data: values,
        backgroundColor: ['#3366FF', '#F2994A', '#00B8D9', '#2E2E2E'],
        borderWidth: 0,
        offset: 15,
        hoverOffset: 30,
      },
    ],
  }
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  const formatPercentage = (value) =>
    `${((value / total) * 100).toFixed(1)}%`
  return (
    <section className="bg-white rounded-2xl shadow-md p-4 h-80">
      <div className="flex h-full items-center justify-center gap-4">
        {/* Bigger Pie chart */}
        <div className="w-[200px] sm:w-[200px] md:w-[200px]">
          <Pie data={data} options={options} />
        </div>
        {/* Smaller, more compact legend */}
        <div className="flex flex-col gap-1 text-xs w-32">
          {labels.map((label, i) => (
            <div key={label} className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: data.datasets[0].backgroundColor[i] }}
              />
              <span className="text-[#2E3360] font-medium truncate max-w-[80px]">
                {label}
              </span>
              <span className="ml-auto text-[#9DA2C6]">
                {formatPercentage(data.datasets[0].data[i])}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}