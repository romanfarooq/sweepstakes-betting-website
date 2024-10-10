import axios from "@/api/axiosInstance";
import CardSkeleton from "@/components/CardSkeleton";
import HalfDoughnutChart from "@/components/HalfDoughnutChart";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { calculateBetPercentages, convertToAmPm } from "@/lib/utils";

const data = [
  {
    id: 1,
    home_team: "Washington Wizards",
    away_team: "New York Knicks",
    match_time: "04:40:00",
    total_yes_bets: 3,
    total_no_bets: 3,
    variations: [
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
  },
  {
    id: 2,
    home_team: "Orlando Magic",
    away_team: "San Antonio Spurs",
    match_time: "05:10:00",
    total_yes_bets: 0,
    total_no_bets: 0,
    variations: [
      {
        timestamp: "2024-10-09 21:23:59.366943",
        yes: 0,
        no: 0,
      },
    ],
  },
  {
    id: 3,
    home_team: "Houston Rockets",
    away_team: "Oklahoma City Thunder",
    match_time: "05:10:00",
    total_yes_bets: 0,
    total_no_bets: 0,
    variations: [
      {
        timestamp: "2024-10-09 21:24:02.639427",
        yes: 0,
        no: 0,
      },
    ],
  },
  {
    id: 4,
    home_team: "Golden State Warriors",
    away_team: "Sacramento Kings",
    match_time: "07:40:00",
    total_yes_bets: 0,
    total_no_bets: 0,
    variations: [
      {
        timestamp: "2024-10-09 21:24:05.372258",
        yes: 0,
        no: 0,
      },
    ],
  },
];

const isPending = false;
const isError = false;

export default function Home() {
  const navigate = useNavigate();

  // const { isPending, isError, data } = useQuery({
  //   queryKey: ["matches"],
  //   queryFn: () => axios.get("/matches").then((res) => res.data),
  // });

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
        const { yes_percentage } = calculateBetPercentages(match);
        return (
          <Card
            key={idx}
            className="min-h-40 w-full flex-col rounded-md border-none bg-gray-700 shadow-lg 2xl:min-h-60"
          >
            <CardContent className="flex h-full flex-col justify-between p-3">
              <div className="flex items-center justify-between gap-2">
                <CardTitle
                  className="text-balance text-sm font-semibold text-white hover:cursor-pointer hover:underline 2xl:text-base"
                  onClick={() => navigate(`/event/${match.id}`)}
                >
                  {`Will ${match.home_team} win against ${match.away_team} in the match at ${convertToAmPm(match.match_time)}?"`}
                </CardTitle>
                <HalfDoughnutChart percentage={Math.floor(yes_percentage)} />
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  className="group flex flex-1 items-center justify-center space-x-2 rounded-sm bg-[#22c55e] bg-opacity-30 text-[#22c55e] hover:bg-[#22c55e] hover:bg-opacity-100 hover:text-white 2xl:py-6"
                  onClick={() =>
                    navigate(`/event/${match.id}`, {
                      state: { bet: "yes" },
                    })
                  }
                >
                  <span>Bet Yes</span>
                  <FaAngleDoubleUp className="group-hover:animate-bounce-updown" />
                </Button>
                <Button
                  className="group flex flex-1 items-center justify-center space-x-2 rounded-sm bg-red-600 bg-opacity-30 text-red-500 hover:bg-red-600 hover:bg-opacity-100 hover:text-white 2xl:py-6"
                  onClick={() =>
                    navigate(`/event/${match.id}`, {
                      state: { bet: "no" },
                    })
                  }
                >
                  <span>Bet No</span>
                  <FaAngleDoubleDown className="group-hover:animate-bounce-updown" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
