import { BadgeDollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link
        to="/home"
        className="flex items-center justify-center text-3xl font-bold lg:text-sm xl:text-2xl 2xl:text-3xl"
      >
        <BadgeDollarSign className="mr-2 size-10 lg:size-7 xl:size-10" />
        <span> Sweep Stakes</span>
      </Link>
    </div>
  );
}
