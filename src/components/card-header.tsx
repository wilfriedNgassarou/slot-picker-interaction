import { Dispatch, SetStateAction } from "react"
import { Day } from "../interfaces/day.interface"
import { motion } from "motion/react"
import clsx from "clsx"

interface Props {
  day: Day,
  isSelected: boolean,
  setSelectedDayId: Dispatch<SetStateAction<string | null>>
}

export function CardHeader({ day, isSelected, setSelectedDayId }: Props) {
  return (
    <div className="h-9 px-3 flex justify-between items-center">
      <motion.span 
        layout="position"
        className="text-slate-900"
      >
        {day.name}
      </motion.span>
      <motion.div
        layout 
        onClick={() => setSelectedDayId(isSelected ? null : day.id)}
        className={clsx(
          "w-12 h-7 flex items-center px-0.5 rounded-full cursor-pointer",
          isSelected ? 'justify-end bg-black' : 'justify-start bg-gray-300'
        )}
      >
        <motion.div
          layout
          className="w-6 h-6 rounded-full bg-white" 
        />
      </motion.div>
    </div>
  )
}