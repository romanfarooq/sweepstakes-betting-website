import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:px-40 2xl:py-20">
      {Array(12)
        .fill(0)
        .map((_, idx) => (
          <Card
            key={idx}
            className="min-h-40 w-full flex-col rounded-md border-none bg-gray-700 shadow-lg 2xl:min-h-60"
          >
            <div className="flex h-full flex-col justify-between p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex w-full flex-col gap-1">
                  <Skeleton className="h-6 w-full rounded-md bg-gray-800" />
                  <Skeleton className="h-6 w-full rounded-md bg-gray-800" />
                </div>
                <Skeleton className="h-12 w-20 bg-gray-800" />
              </div>
              <div className="mt-4 flex gap-2">
                <Skeleton className="h-10 flex-1 rounded-sm bg-gray-800" />
                <Skeleton className="rounded-smb h-10 flex-1 bg-gray-800" />
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}
