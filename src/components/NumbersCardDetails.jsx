import { cn } from "@/lib/utils";

export default function NumbersCard({
  title,
  totalAmount,
  icon,
  bgColor,
  iconBgColor,
  borderColor,
  border = false,
  hover = false,
  hoverEffect,
}) {
  return (
    <article
      className={cn(
        "flex cursor-pointer items-center justify-between overflow-hidden rounded-md",
        bgColor,
        {
          [borderColor]: border,
          [hoverEffect]: hover,
        },
      )}
    >
      <div className="flex flex-col justify-between p-4 2xl:p-8">
        <h3 className="text-base font-medium text-white 2xl:text-lg 2xl:font-bold">
          {title}
        </h3>
        <p className="text-2xl font-bold text-white">{totalAmount}</p>
      </div>
      <div
        className={cn(
          "flex h-full items-center justify-center p-7",
          iconBgColor,
        )}
      >
        <div className="text-2xl text-white">{icon}</div>
      </div>
    </article>
  );
}
