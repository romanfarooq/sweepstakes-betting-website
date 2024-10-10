import EventInformationSection from "@/components/EventInformationSection";
import TradeCard from "@/components/TradeCard";
import { Skeleton } from "@/components/ui/skeleton";
import { convertToAmPm } from "@/lib/utils";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";
import { useLocation, useParams } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const isLoading = false;

const match = {
  id: 1,
  home_team: "Washington Wizards",
  away_team: "New York Knicks",
  match_time: "04:40:00",
  total_yes_bets: 3,
  total_no_bets: 3,
  variation: [
    {
      timestamp: "2024-10-09 20:52:53.382354",
      yes: 25.0,
      no: 75.0,
    },
    {
      timestamp: "2024-10-09 20:53:29.386398",
      yes: 50.0,
      no: 50.0,
    },
    {
      timestamp: "2024-10-09 21:16:46.200119",
      yes: 50.0,
      no: 50.0,
    },
    {
      timestamp: "2024-10-09 21:23:54.966020",
      yes: 50.0,
      no: 50.0,
    },
    {
      timestamp: "2024-10-09 21:43:22.070133",
      yes: 50.0,
      no: 50.0,
    },
  ],
};

// const variation = [
//   { timestamp: "2024-11-01T00:00:00", yes: 75, no: 25 },
//   { timestamp: "2024-11-01T03:00:00", yes: 60, no: 40 },
//   { timestamp: "2024-11-01T06:00:00", yes: 45, no: 55 },
//   { timestamp: "2024-11-01T09:00:00", yes: 34, no: 66 },
//   { timestamp: "2024-11-01T12:00:00", yes: 34, no: 66 },
//   { timestamp: "2024-11-01T15:00:00", yes: 50, no: 50 },
//   { timestamp: "2024-11-01T18:00:00", yes: 48, no: 52 },
//   { timestamp: "2024-11-01T21:00:00", yes: 62, no: 38 },
//   { timestamp: "2024-11-02T00:00:00", yes: 80, no: 20 },
//   { timestamp: "2024-11-02T03:00:00", yes: 75, no: 25 },
//   { timestamp: "2024-11-02T06:00:00", yes: 70, no: 30 },
//   { timestamp: "2024-11-02T09:00:00", yes: 55, no: 45 },
//   { timestamp: "2024-11-02T12:00:00", yes: 40, no: 60 },
//   { timestamp: "2024-11-02T15:00:00", yes: 30, no: 70 },
//   { timestamp: "2024-11-02T18:00:00", yes: 20, no: 80 },
//   { timestamp: "2024-11-02T21:00:00", yes: 10, no: 90 },
//   { timestamp: "2024-11-03T00:00:00", yes: 65, no: 35 },
//   { timestamp: "2024-11-03T03:00:00", yes: 70, no: 30 },
//   { timestamp: "2024-11-03T06:00:00", yes: 75, no: 25 },
//   { timestamp: "2024-11-03T09:00:00", yes: 60, no: 40 },
//   { timestamp: "2024-11-03T12:00:00", yes: 55, no: 45 },
//   { timestamp: "2024-11-03T15:00:00", yes: 50, no: 50 },
//   { timestamp: "2024-11-03T18:00:00", yes: 45, no: 55 },
//   { timestamp: "2024-11-03T21:00:00", yes: 40, no: 60 },
//   { timestamp: "2024-11-04T00:00:00", yes: 80, no: 20 },
//   { timestamp: "2024-11-04T03:00:00", yes: 70, no: 30 },
//   { timestamp: "2024-11-04T06:00:00", yes: 60, no: 40 },
//   { timestamp: "2024-11-04T09:00:00", yes: 50, no: 50 },
//   { timestamp: "2024-11-04T12:00:00", yes: 55, no: 45 },
//   { timestamp: "2024-11-04T15:00:00", yes: 65, no: 35 },
//   { timestamp: "2024-11-04T18:00:00", yes: 70, no: 30 },
//   { timestamp: "2024-11-04T21:00:00", yes: 75, no: 25 },
//   { timestamp: "2024-11-05T00:00:00", yes: 55, no: 45 },
//   { timestamp: "2024-11-05T03:00:00", yes: 60, no: 40 },
//   { timestamp: "2024-11-05T06:00:00", yes: 50, no: 50 },
//   { timestamp: "2024-11-05T09:00:00", yes: 40, no: 60 },
//   { timestamp: "2024-11-05T12:00:00", yes: 30, no: 70 },
//   { timestamp: "2024-11-05T15:00:00", yes: 20, no: 80 },
//   { timestamp: "2024-11-05T18:00:00", yes: 10, no: 90 },
//   { timestamp: "2024-11-05T21:00:00", yes: 5, no: 95 },
//   { timestamp: "2024-11-06T00:00:00", yes: 70, no: 30 },
//   { timestamp: "2024-11-06T03:00:00", yes: 65, no: 35 },
//   { timestamp: "2024-11-06T06:00:00", yes: 75, no: 25 },
//   { timestamp: "2024-11-06T09:00:00", yes: 80, no: 20 },
//   { timestamp: "2024-11-06T12:00:00", yes: 85, no: 15 },
//   { timestamp: "2024-11-06T15:00:00", yes: 90, no: 10 },
//   { timestamp: "2024-11-06T18:00:00", yes: 95, no: 5 },
//   { timestamp: "2024-11-06T21:00:00", yes: 100, no: 0 },
//   { timestamp: "2024-11-07T00:00:00", yes: 75, no: 25 },
//   { timestamp: "2024-11-07T03:00:00", yes: 60, no: 40 },
//   { timestamp: "2024-11-07T06:00:00", yes: 50, no: 50 },
//   { timestamp: "2024-11-07T09:00:00", yes: 40, no: 60 },
//   { timestamp: "2024-11-07T12:00:00", yes: 30, no: 70 },
//   { timestamp: "2024-11-07T15:00:00", yes: 20, no: 80 },
//   { timestamp: "2024-11-07T18:00:00", yes: 0, no: 100 },
//   { timestamp: "2024-11-07T21:00:00", yes: 5, no: 95 },
// ];

// Helper function to calculate percentage change
const calculatePercentageChange = (current, previous) => {
  if (previous === undefined) return 0;
  if (previous === 0) return (current * 100).toFixed(1);
  return (((current - previous) / previous) * 100).toFixed(1);
};

// Transform backend data to chart-friendly format
const transformData = (data) => {
  const labels = [];
  const yesData = [];
  const noData = [];

  data.forEach((item) => {
    const date = new Date(item.timestamp);
    const timeLabel = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    const dateLabel = date.toLocaleDateString("en-GB", {
      month: "short",
      day: "numeric",
    });

    console.log(dateLabel, timeLabel);

    // Combine date and time for full label (e.g., "Nov 1, 12 AM")
    labels.push(`${dateLabel}, ${timeLabel}`);
    yesData.push(item.yes);
    noData.push(item.no);
  });

  return {
    labels,
    datasets: [
      {
        label: "YES",
        data: yesData,
        fill: false,
        borderColor: "#1f9cf7", // Blue line
        tension: 0.1,
      },
      {
        label: "NO",
        data: noData,
        fill: false,
        borderColor: "#ff6384", // Red line
        tension: 0.1,
      },
    ],
  };
};

export default function Event() {
  const { id } = useParams();
  const { state } = useLocation();
  const bet = state?.bet || "yes";

  const { variation } = match;

  const chartRef = useRef(null);
  const data = useMemo(() => transformData(variation), [variation]);
  const variationLength = variation.length;

  const initialData = useMemo(() => {
    if (variationLength === 0) {
      return { yes: 0, no: 0 };
    }
    return {
      yes: variation[variationLength - 1].yes,
      no: variation[variationLength - 1].no,
    };
  }, [variation, variationLength]);

  const initialPercentageVariation = useMemo(() => {
    if (variationLength < 2) {
      return { yes: 0, no: 0 };
    }
    const prevYes = variation[variationLength - 2].yes;
    const prevNo = variation[variationLength - 2].no;
    return {
      yes: calculatePercentageChange(initialData.yes, prevYes),
      no: calculatePercentageChange(initialData.no, prevNo),
    };
  }, [initialData, variation, variationLength]);

  const [hoveredData, setHoveredData] = useState(initialData);
  const [hoveredDataVariation, setHoveredDataVariation] = useState(
    initialPercentageVariation,
  );

  const handleMouseMove = useCallback(
    (event) => {
      const chart = chartRef.current;
      if (!chart) return;

      const elements = chart.getElementsAtEventForMode(
        event,
        "index",
        { intersect: false },
        false,
      );

      if (elements.length) {
        const index = elements[0].index;
        const yesValue = data.datasets[0].data[index];
        const noValue = data.datasets[1].data[index];
        const prevYes = data.datasets[0].data[index - 1];
        const prevNo = data.datasets[1].data[index - 1];

        setHoveredData({ yes: yesValue, no: noValue });

        setHoveredDataVariation({
          yes: calculatePercentageChange(yesValue, prevYes),
          no: calculatePercentageChange(noValue, prevNo),
        });
      } else {
        setHoveredData(initialData);
        setHoveredDataVariation(initialPercentageVariation);
      }
    },
    [data, initialData, initialPercentageVariation],
  );

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const canvas = chart.canvas;
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: (tooltipItem) => `${tooltipItem.raw}¢`,
          },
        },
        legend: { display: false },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          position: "right",
          grid: {
            drawBorder: false,
            color: (context) =>
              [25, 50, 75].includes(context.tick.value)
                ? "#d1e7ff"
                : "transparent",
            lineWidth: 0.1,
          },
          ticks: {
            stepSize: 25,
            callback: (value) =>
              value === 0 || value === 100 ? "" : `${value}%`,
            align: "end",
          },
          border: { display: false },
        },
        x: {
          ticks: {
            autoSkip: false,
            callback: (value, index) => {
              if (data.labels.length <= 8) {
                return data.labels[index].split(",")[1];
              } else {
                return index % 8 === 0 ? data.labels[index].split(",")[0] : "";
              }
            },
            maxRotation: 0,
            minRotation: 0,
          },
          grid: { display: false },
          border: { display: false },
        },
      },
      elements: {
        point: {
          radius: 2,
          hoverRadius: 5,
          backgroundColor: (context) =>
            context.datasetIndex === 0 ? "#1f9cf7" : "#ff6384",
          borderColor: "#1f9cf7",
          borderWidth: 2,
        },
      },
      layout: { padding: 0 },
    }),
    [data],
  );

  return (
    <div className="flex flex-col justify-between gap-10 p-5 sm:p-10 lg:flex-row 2xl:gap-40 2xl:px-40 2xl:py-20">
      <div className="text-white lg:w-[70%]">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <p className="pb-1 text-3xl font-semibold">
                {isLoading ? (
                  <Skeleton className="h-8 w-72" /> // Skeleton for title
                ) : (
                  `Will ${match.home_team} win against ${match.away_team} in the match at ${convertToAmPm(match.match_time)}?"`
                )}
              </p>
              <div className="flex space-x-2 text-base text-gray-400">
                <p className="flex items-center space-x-1">
                  <LuClock4 />
                  <span>Oct 4, 2024</span>
                </p>
                <p className="flex items-center space-x-1">
                  <BsCurrencyDollar />
                  <span>5,073,203 Vol.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <EventInformationSection
            label="YES"
            value={hoveredData?.yes}
            variation={hoveredDataVariation?.yes}
          />
          <EventInformationSection
            label="NO"
            value={hoveredData?.no}
            variation={hoveredDataVariation?.no}
          />
        </div>
        <Line data={data} ref={chartRef} options={options} />
      </div>
      <div className="flex items-center lg:w-[30%]">
        <TradeCard latestData={initialData} bet={bet} />
      </div>
    </div>
  );
}
