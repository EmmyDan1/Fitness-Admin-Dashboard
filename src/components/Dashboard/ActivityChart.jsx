import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import Card from "../Common/Card";

// Register chart.js modules
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Chart data and options
const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ],
  datasets: [
    {
      label: "Workouts",
      data: [8, 10, 12, 8, 14, 16, 12, 18, 15, 16, 14],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      tension: 0.3,
      fill: true,
    },
    {
      label: "Calories (x100)",
      data: [12, 15, 18, 14, 20, 22, 18, 24, 22, 25, 24],
      borderColor: "rgb(239, 68, 68)",
      backgroundColor: "rgba(239, 68, 68, 0.1)",
      tension: 0.3,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#6B7280",
        font: {
          family: "Inter",
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#6B7280",
      },
    },
    y: {
      grid: {
        color: "#E5E7EB",
        borderDash: [5],
      },
      ticks: {
        color: "#6B7280",
      },
    },
  },
  animation: {
    duration: 1000,
  },
};

const ActivityChart = () => {
  return (
    <Card className="slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Activity Overview</h2>
        <select className="bg-gray-100 dark:bg-gray-700 border-none rounded-lg px-3 py-1 text-sm">
          <option>Last 12 Months</option>
          <option>Last 6 Months</option>
          <option>Last 3 Months</option>
        </select>
      </div>
      <div className="h-80">
        <Line data={chartData} options={chartOptions} />
      </div>
    </Card>
  );
};

export default ActivityChart;
