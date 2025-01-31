import { motion } from "motion/react"
import { Day } from "../interfaces/day.interface"
import clsx from "clsx"
import { CardHeader } from "./card-header"
import { Dispatch, SetStateAction } from "react"
import { CardBody } from "./card-body"

interface Props {
  day: Day,
  isSelected: boolean,
  setSelectedDayId: Dispatch<SetStateAction<string | null>>,
  addSlot: (dayId: string) => void,
  removeSlot: (slotId: number, dayId: string) => void
}

export function Card({ day, isSelected, setSelectedDayId, addSlot, removeSlot }: Props) {
  return (
    <motion.div
      key={day.id}
      layoutId={day.id}
      style={{ 
        width: 280,
        borderRadius: 12,
        height: isSelected ? 'auto' : 40,
        overflow: 'hidden',
      }}
      transition={{ type: 'spring', duration: .7, bounce: .3 }}
      className={clsx(
        "border-2 duration-300 ease-in-out transition-colors",
        isSelected ? 'transparent border-black/10' : 'bg-gray-100 border-gray-100',
      )}
    >
      <CardHeader
        day={day}
        isSelected={isSelected}
        setSelectedDayId={setSelectedDayId} 
      />
      <CardBody 
        day={day} 
        isSelected={isSelected} 
        addSlot={addSlot}
        removeSlot={removeSlot}
      />
    </motion.div>
  )
}