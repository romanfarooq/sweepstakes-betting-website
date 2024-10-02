import HalfDoughnutChart from "@/components/HalfDoughnutChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="grid w-full grid-cols-1 gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:px-40 2xl:py-20">
      {Array(12)
        .fill(0)
        .map((_, idx) => (
          <Card
            key={idx}
            className="min-h-40 w-full flex-col rounded-md border-none bg-gray-700 shadow-lg 2xl:min-h-60"
          >
            <CardContent className="flex h-full flex-col justify-between p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="/src/assets/will-israel-enter-lebanon.webp"
                    alt="Placeholder Image"
                    className="h-10 w-10 rounded-md object-cover"
                  />
                  <CardTitle
                    className="text-sm font-semibold leading-tight text-white hover:cursor-pointer hover:underline 2xl:text-base"
                    onClick={() => navigate("/event")}
                  >
                    Israel military response against Iran by Friday?
                  </CardTitle>
                </div>
                <HalfDoughnutChart percentage={88} />
              </div>

              {/* Buttons aligned at the bottom */}
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
                  onClick={() => navigate("/event")}
                >
                  <span>Bet No</span>
                  <FaAngleDoubleDown className="group-hover:animate-bounce-updown" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
