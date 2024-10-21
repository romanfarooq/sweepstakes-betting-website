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
        "flex items-center cursor-pointer justify-between rounded-md overflow-hidden",
        bgColor,
        {
          [borderColor]: border,
          [hoverEffect]: hover,
        }
      )}
    >
      <div className="flex flex-col justify-between p-4 2xl:p-8">
        <h3 className="text-white text-base font-medium 2xl:font-bold 2xl:text-lg">{title}</h3>
        <p className="text-white text-2xl font-bold">{totalAmount}</p>
      </div>
      <div className={cn("flex justify-center h-full items-center p-7", iconBgColor)}>
        <div className="text-white text-2xl">{icon}</div>
      </div>
    </article>
  );
}
