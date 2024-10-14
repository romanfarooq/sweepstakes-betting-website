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
  hoverEffect
}) {
  return (
      <article className={`py-6 px-3 flex items-center justify-between bg-white rounded-md ${border && borderColor} cursor-pointer ${hover && hoverEffect}`}>
        <div className="flex gap-5 items-center">
            <div className={`${iconBgColor} p-3 ${textColor} text-3xl rounded-lg`}>{icon}</div>
            <div>
                <h3 className="text-base font-semibold text-indigo-950">{title}</h3>
                <p className="text-xl font-extrabold text-indigo-950">{totalBettors}</p>
            </div>
        </div>
        <p><HiOutlineChevronRight/></p>
      </article>
  );
}
