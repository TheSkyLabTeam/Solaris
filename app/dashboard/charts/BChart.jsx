import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale,
    TimeScale
} from 'chart.js'
import 'chartjs-adapter-moment';

ChartJs.register(LineElement, CategoryScale, PointElement, LinearScale, TimeScale);

function BChart({BData}) {
    const data = Array.isArray(BData) ? {
        labels: BData.map(item => item.datetime),
        datasets: [
            {
                label: 'BZ',
                data: BData.map(item => item.BZ),
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192)',
                borderWidth: 2,
                pointRadius: 0,
            },
            {
                label: 'BX',
                data: BData.map(item => item.BX),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132)',
                borderWidth: 2,
                pointRadius: 0,
            },
            {
                label: 'BY',
                data: BData.map(item => item.BY),
                fill: false,
                backgroundColor: 'rgb(255, 205, 86)',
                borderColor: 'rgba(255, 205, 86)',
                borderWidth: 2,
                pointRadius: 0,
            },
        ],
    } : {};

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    displayFormats: {
                        day: 'MMM D'
                    }
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            }
        }
    }

    return(
        <Line data={data} options={options} />
    )
}

export default BChart;
