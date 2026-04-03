import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Internships", "Courses", "Exams", "Activities"],
    datasets: [
      {
        label: "Performance",
        data: [80, 90, 85, 70],
        backgroundColor: "#60A5FA",
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
      <h3 className="text-gray-500 mb-4">Performance Comparison</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;