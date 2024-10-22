import EventInformationSection from "@/components/EventInformationSection";
import TradeCard from "@/components/TradeCard";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { format, differenceInDays, differenceInMonths } from "date-fns";
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
    // Day 1
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
    // Day 2
    {
      timestamp: "2024-10-10 10:15:03.389712",
      yes: 40.0,
      no: 60.0,
    },
    {
      timestamp: "2024-10-10 12:30:45.129843",
      yes: 60.0,
      no: 40.0,
    },
    {
      timestamp: "2024-10-10 15:45:32.948765",
      yes: 70.0,
      no: 30.0,
    },
    {
      timestamp: "2024-10-10 18:10:23.112945",
      yes: 65.0,
      no: 35.0,
    },
    // Day 3
    {
      timestamp: "2024-10-11 09:00:15.382354",
      yes: 55.0,
      no: 45.0,
    },
    {
      timestamp: "2024-10-11 14:30:50.126738",
      yes: 45.0,
      no: 55.0,
    },
    {
      timestamp: "2024-10-11 19:12:33.846298",
      yes: 75.0,
      no: 25.0,
    },
    // Day 4
    {
      timestamp: "2024-10-12 08:25:42.328491",
      yes: 80.0,
      no: 20.0,
    },
    {
      timestamp: "2024-10-12 14:45:29.126874",
      yes: 90.0,
      no: 10.0,
    },
    {
      timestamp: "2024-10-12 17:12:19.394876",
      yes: 95.0,
      no: 5.0,
    },
    // Day 5
    {
      timestamp: "2024-10-13 11:30:45.986543",
      yes: 85.0,
      no: 15.0,
    },
    {
      timestamp: "2024-10-13 18:45:59.138742",
      yes: 80.0,
      no: 20.0,
    },
    {
      timestamp: "2024-10-13 23:59:59.123456",
      yes: 75.0,
      no: 25.0,
    },
    // // November variations
    // {
    //   timestamp: "2024-11-05 13:15:30.567432",
    //   yes: 50.0,
    //   no: 50.0,
    // },
    // {
    //   timestamp: "2024-11-15 09:00:12.678432",
    //   yes: 60.0,
    //   no: 40.0,
    // },
    // {
    //   timestamp: "2024-11-25 18:45:45.987654",
    //   yes: 70.0,
    //   no: 30.0,
    // },
    // // December variations
    // {
    //   timestamp: "2024-12-01 10:12:34.564789",
    //   yes: 55.0,
    //   no: 45.0,
    // },
    // {
    //   timestamp: "2024-12-15 21:15:15.234098",
    //   yes: 65.0,
    //   no: 35.0,
    // },
    // {
    //   timestamp: "2024-12-31 23:59:59.999999",
    //   yes: 90.0,
    //   no: 10.0,
    // },
  ],
};

// Helper function to calculate percentage change
const calculatePercentageChange = (current, previous) => {
  if (previous === undefined) return 0;
  if (previous === 0) return (current * 100).toFixed(1);
  return (((current - previous) / previous) * 100).toFixed(1);
};

// Transform backend data to chart-friendly format
const transformData = (data) => {
  const labels = [];
  const xLabels = [];
  const yesData = [];
  const noData = [];

  // Get the first and last timestamps to calculate the time span
  const firstDate = new Date(data[0].timestamp);
  const lastDate = new Date(data[data.length - 1].timestamp);
  const totalDays = differenceInDays(lastDate, firstDate);
  const totalMonths = differenceInMonths(lastDate, firstDate);

  let previousDay = null;
  let previousMonth = null;

  data.forEach((item) => {
    const date = new Date(item.timestamp);

    // If the variation is within 1 day or spans less than 8 points, show time
    if (totalDays === 0) {
      labels.push(format(date, "p")); // 'p' gives you time in 12-hour format
      xLabels.push(format(date, "p"));
    }
    // If variations span multiple days but less than a month, show date + time
    else if (totalMonths === 0) {
      labels.push(format(date, "MMM d, p")); // 'MMM d' gives date like "Oct 9", 'p' gives time
      const currentDay = format(date, "yyyy-MM-dd");
      if (currentDay !== previousDay) {
        xLabels.push(format(date, "MMM d")); // Show first label for each day
        previousDay = currentDay;
      } else {
        xLabels.push(""); // Hide other labels for the same day
      }
    }
    // If variations span multiple months, show only month and day
    else {
      labels.push(format(date, "MMM d, yyyy, p")); // 'MMM yyyy' gives month and year like "Oct 9, 2024, 'p' gives time"
      const currentMonth = format(date, "yyyy-MM");
      if (currentMonth !== previousMonth) {
        xLabels.push(format(date, "MMM yyyy")); // Show first label for each month
        previousMonth = currentMonth;
      } else {
        xLabels.push(""); // Hide other labels for the same month
      }
    }

    yesData.push(item.yes);
    noData.push(item.no);
  });

  return {
    labels,
    xLabels,
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
            callback: (value, index) => data.xLabels[index],  // Use xLabels for x-axis
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
                  `Will ${match.home_team} win against ${match.away_team}?"`
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
