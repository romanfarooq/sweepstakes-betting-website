import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(12)
        .fill(0)
        .map((_, idx) => (
          <Card key={idx} className="w-full bg-gray-700 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/src/assets/will-israel-enter-lebanon.webp"
                  alt="Placeholder Image"
                  className="h-12 w-12 rounded-md object-cover"
                />
                <CardTitle className="text-lg font-semibold text-white">
                  Will Israel invade Lebanon?
                </CardTitle>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="rounded-lg bg-green-500 px-4 py-1 text-white hover:bg-green-600">
                  Bet Yes 80&#162;
                </button>
                <button className="rounded-lg bg-red-500 px-4 py-1 text-white hover:bg-red-600">
                  Bet No 62&#162;
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
