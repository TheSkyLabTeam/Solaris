import { Line } from "react-chartjs-2";
import { Suspense } from "react";
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

function BChart({ BData, selectedGraph }) {
  const datasets = {
    BZ: {
      label: "BZ",
      data: BData.map((item) => item.BZ),
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 0.5,
      pointRadius: 0
    },
    BX: {
      label: "BX",
      data: BData.map((item) => item.BX),
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 0.5,
      pointRadius: 0
    },
    BY: {
      label: "BY",
      data: BData.map((item) => item.BY),
      fill: false,
      backgroundColor: "rgb(255, 205, 86)",
      borderColor: "rgba(255, 205, 86)",
      borderWidth: 0.5,
      pointRadius: 0
    },
    B: {
      label: "B",
      data: BData.map((item) => item.B),
      fill: false,
      backgroundColor: "#557FFF",
      borderColor: "#557FFF",
      borderWidth: 0.8,
      pointRadius: 0
    }
  };

  const data = Array.isArray(BData)
    ? {
        labels: BData.map((item) => item.datetime),
        datasets:
          selectedGraph === "ALL"
            ? Object.values(datasets)
            : [datasets[selectedGraph]]
      }
    : {};

  const options = {
    responsive: true,
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
          maxTicksLimit: 10
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
    },
    plugins: {
      legend: {
        display: true
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default BChart;
