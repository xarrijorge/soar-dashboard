import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import useMainStore from '../store/mainStore'

export default function WeeklyActivity() {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

    const weeklyActivity = useMainStore((state) => state.weeklyActivity)

    const data = {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Deposit',
                data: weeklyActivity.deposits,
                backgroundColor: '#3366FF',
                borderRadius: 6,
                borderSkipped: false,
                barThickness: 10,
                barPercentage: 0.6,
                categoryPercentage: 0.2
            },
            {
                label: 'Withdraw',
                data: weeklyActivity.withdrawals,
                backgroundColor: '#2E2E2E',
                borderRadius: 6,
                borderSkipped: false,
                barThickness: 10,
                barPercentage: 0.6,
                categoryPercentage: 0.2
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
                labels: {
                    color: '#2E3360',
                    boxWidth: 10,
                    font: { size: 13, weight: '500' },
                    usePointStyle: true,
                    padding: 20,
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
                border: { display: false },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#F0F0F0',
                    drawBorder: false,
                },
                ticks: {
                    color: '#9DA2C6',
                    font: { size: 12 },
                    stepSize: 100,
                },
                border: { display: false },
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
            }
        }
    }

    return (
        <section className="bg-white rounded-2xl shadow-md p-4 h-80">
            <div className="h-[calc(100%-50px)]">
                <Bar data={data} options={options} />
            </div>
        </section>
    )
}