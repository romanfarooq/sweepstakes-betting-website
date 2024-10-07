import axios from "@/api/axiosInstance";
import CardSkeleton from "@/components/CardSkeleton";
import HalfDoughnutChart from "@/components/HalfDoughnutChart";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { calculateBetPercentages } from "@/lib/calculatePercentage";

export default function Home() {
  const navigate = useNavigate();

  const { isPending, isError, data } = useQuery({
    queryKey: ["today_matches"],
    queryFn: () => axios.get("/matches").then((res) => res.data),
  });

function convertToAmPm(timeString) {
  // Parse the time string into a Date object
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  // Convert to AM/PM format
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-center text-white">
          Oops! Something went wrong. Please try again later.
        </p>
      </div>
    );
  }

  if (isPending) {
    return <CardSkeleton />;
  }

  return (
 
    <div className="grid w-full grid-cols-1 gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:px-40 2xl:py-20">
      {data?.map((match, idx) => {
        const yesPercentage = calculateBetPercentages(match);
        <Card
          key={idx}
          className="min-h-40 w-full flex-col rounded-md border-none bg-gray-700 shadow-lg 2xl:min-h-60"
        >
          <CardContent className="flex h-full flex-col justify-between p-3">
            <div className="flex items-center justify-between gap-2">
              <CardTitle
                className="text-balance text-sm font-semibold leading-tight text-white hover:cursor-pointer hover:underline 2xl:text-base"
                onClick={() => navigate("/event")}
              >
                {`Will ${match.home_team} win against ${match.away_team} in the match at ${convertToAmPm(match.match_time)}?"`}
              </CardTitle>
             <HalfDoughnutChart percentage={Math.floor(yesPercentage)} />
            </div>
            <div className="mt-4 flex gap-2">
              <Button
                className="group flex flex-1 items-center justify-center space-x-2 rounded-sm bg-[#22c55e] bg-opacity-30 text-[#22c55e] hover:bg-[#22c55e] hover:bg-opacity-100 hover:text-white 2xl:py-6"
                onClick={() => navigate("/event")}
              >
                <span>Bet Yes</span>
                <FaAngleDoubleUp className="group-hover:animate-bounce-updown" />
              </Button>
              <Button
                className="group flex flex-1 items-center justify-center space-x-2 rounded-sm bg-red-600 bg-opacity-30 text-red-500 hover:bg-red-600 hover:bg-opacity-100 hover:text-white 2xl:py-6"
                onClick={() => navigate("/event/:eventId")}
              >
                <span>Bet No</span>
                <FaAngleDoubleDown className="group-hover:animate-bounce-updown" />
              </Button>
            </div>
          </CardContent>
        </Card>
      })}
    </div>
  );
}
