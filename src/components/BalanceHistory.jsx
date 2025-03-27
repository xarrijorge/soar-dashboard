import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
    Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import useMainStore from '../store/mainStore'

export default function BalanceHistory() {
    ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip)
    const balance = useMainStore((state) => state.balanceHistory)

    const data = {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
            {
                label: 'Balance',
                data: balance.map((item) => item.amount),
                fill: true,
                tension: 0.4,
                borderColor: '#3366FF',
                backgroundColor: (ctx) => {
                    const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200)
                    gradient.addColorStop(0, 'rgba(51, 102, 255, 0.2)')
                    gradient.addColorStop(1, 'rgba(51, 102, 255, 0)')
                    return gradient
                },
                pointRadius: 0,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: '#9DA2C6',
                    font: { size: 12 },
                },
            },
            y: {
                beginAtZero: true,
                grid: { color: '#F0F0F0' },
                ticks: {
                    color: '#9DA2C6',
                    font: { size: 12 },
                },
            },
        },
    }

    return (
        <section className="bg-white dark:bg-[#1e2131] rounded-2xl shadow-md p-4 h-60">
            <div className="h-full">
                <Line data={data} options={options} />
            </div>
        </section>
    )
}
