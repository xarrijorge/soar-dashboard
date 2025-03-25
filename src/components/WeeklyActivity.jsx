import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: 'Deposit',
            data: [250, 130, 260, 370, 230, 240, 330],
            backgroundColor: '#3366FF',
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 10,
            categoryPercentage: 0.2, // wider spacing between groups
            barPercentage: 0.8       // narrower bars (space between within group)
        },
        {
            label: 'Withdraw',
            data: [480, 350, 320, 480, 140, 380, 390],
            backgroundColor: '#2E2E2E',
            borderRadius: 6,
            borderSkipped: false,
            margin: 20,
            barThickness: 10,
            categoryPercentage: 0.2,
            barPercentage: 0.8
        },
    ],
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            align: 'end',
            margin: 20,
            labels: {
                color: '#2E3360',
                boxWidth: 10,
                font: { size: 13, weight: '500' },
                usePointStyle: true,
            },
        },
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

export default function WeeklyActivity() {
    return (
        <section className="bg-white rounded-2xl shadow-md p-4 h-80">
            <h2 className="text-lg font-semibold text-[#2E3360] mb-4">Weekly Activity</h2>
            <div className="h-[calc(100%-50px)]">
                <Bar data={data} options={options} />
            </div>
        </section>
    )
}