import { HiOutlineChevronRight } from "react-icons/hi";

export default function NumbersCard({
  title,
  totalBettors,
  icon,
  textColor,
  iconBgColor,
  borderColor,
  border = false,
  hover = false,
  hoverEffect,
}) {
  return (
    <article
      className={`flex items-center justify-between rounded-md bg-white px-4 py-5 ${border && borderColor} cursor-pointer ${hover && hoverEffect}`}
    >
      <div className="flex items-center gap-5">
        <div className={`${iconBgColor} p-3 ${textColor} rounded-lg text-3xl`}>
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-700">{title}</h3>
          <p className="text-2xl font-bold text-slate-700">{totalBettors}</p>
        </div>
      </div>
      <p>
        <HiOutlineChevronRight />
      </p>
    </article>
  );
}
