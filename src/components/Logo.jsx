import { BadgeDollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div>
      <Link
        to="/home"
        className="flex items-center justify-center text-xl font-bold lg:text-2xl xl:text-3xl"
      >
        <BadgeDollarSign className="mr-2 size-7 lg:size-10" />
        <span> Sweep Stakes</span>
      </Link>
    </div>
  )
}
