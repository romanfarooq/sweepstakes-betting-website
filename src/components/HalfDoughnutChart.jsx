import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

export default function HalfDoughnutChart({ percentage }) {
  const chartColor = percentage < 50 ? "#dc2626" : "#22c55e";

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [chartColor, "transparent"], // Green and transparent for the half doughnut
        borderColor: [chartColor, "transparent"],
        circumference: 180, // Half doughnut
        borderWidth: 0,
        rotation: 270, // Start from top
      },
    ],
  };

  const options = {
    cutout: "85%", // To make the doughnut ring thinner
    aspectRatio: 1, // This keeps the doughnut circular
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="relative h-16 w-16">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 top-10 flex flex-col items-center justify-center">
        <span className="text-sm font-semibold text-white">{percentage}%</span>
        <span className="text-sm text-gray-300">chance</span>
      </div>
    </div>
  );
}
