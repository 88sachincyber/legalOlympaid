import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Marks Progress",
        data: [60, 70, 75, 80, 90],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md h-[350px]">
      <h3 className="text-gray-500 mb-4">Marks Progression</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;