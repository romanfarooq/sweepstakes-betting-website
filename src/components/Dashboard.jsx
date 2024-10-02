// import { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  // const chartRef = useRef(null);

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  // useEffect(() => {
  //   // Cleanup function to destroy the chart instance when the component unmounts
  //   return () => {
  //     if (chartRef.current) {
  //       chartRef.current.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <Line
          data={data}
        />
      </div>
    </div>
  );
}

export default Dashboard;
