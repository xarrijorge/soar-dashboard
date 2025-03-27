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
      <div className="flex h-[calc(100%-50px)] items-center justify-center gap-6">
        {/* Pie chart */}
        <div className="w-[130px] sm:w-[150px] md:w-[180px]">
          <Pie data={data} options={options} />
        </div>

        {/* Percentage Legend */}
        <div className="flex flex-col gap-3 text-sm">
          {labels.map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: data.datasets[0].backgroundColor[i] }}
              />
              <span className="text-[#2E3360] font-medium">{label}</span>
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