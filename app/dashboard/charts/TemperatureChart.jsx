import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  TimeScale
} from "chart.js";
import "chartjs-adapter-moment";

ChartJs.register(
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  TimeScale
);

function TChart({ BData }) {
  const data = Array.isArray(BData)
    ? {
        labels: BData.map((item) => item.datetime),
        datasets: [
          {
            label: `T`,
            data: BData.map((item) => item.T),
            fill: false,
            backgroundColor: "#557FFF",
            borderColor: "#557FFF",
            borderWidth: 0.5,
            pointRadius: 0
          }
        ]
      }
    : {};

  const options = {
    responsive: true,
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            day: "MMM D"
          }
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10 // Ajusta este número a tus necesidades
        },
        grid: {
          display: true,
          color: "rgba(156, 143, 128,0.2)"
        }
      },
      y: {
        grid: {
          display: true,
          color: "rgba(156, 143, 128,0.2)"
        }
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default TChart;
