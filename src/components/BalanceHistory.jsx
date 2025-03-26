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

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip)

const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
        {
            label: 'Balance',
            data: [200, 300, 450, 700, 400, 600, 500],
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

export default function BalanceHistory() {
    return (
        <section className="bg-white rounded-2xl shadow-md p-4 h-60">
            <div className="h-full">
                <Line data={data} options={options} />
            </div>
        </section>
    )
}
