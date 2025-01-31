import { AnimatePresence, motion } from "motion/react"
import { Day } from "../interfaces/day.interface"
import { formatHours } from "../utils/format-hours"
import { Plus, X } from "react-bootstrap-icons"

interface Props {
  isSelected: boolean,
  day: Day,
  addSlot: (dayId: string) => void,
  removeSlot: (slotId: number, dayId: string) => void
}

export function CardBody({ day, isSelected, addSlot, removeSlot } : Props) {
  if(!isSelected) return null

  return (
    <AnimatePresence
      mode="popLayout"
    >
      <motion.section
        key={`slots-${day.id}`}
        className="px-3 flex flex-col gap-y-2 text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: .2 } }}
        exit={{ opacity: 0, y: 10 }} 
      >
        {day.slots.map((slot) => (
          <motion.div 
            key={slot.id}
            layoutId={`slot-${slot.id}`}
            exit={{ x: 40 }}
            className="flex justify-between items-center text-sm"
          >
            <div>
              <span className="text-gray-400">From </span>
              <span 
                className="inline-flex pl-2 border-[1.5px] text-gray-600 border-black/10 py-px w-20 rounded-lg"
              >
                {formatHours(slot.startHour)}
              </span>
            </div>
            <div>
              <span className="text-gray-400">To </span>
              <span className="inline-flex pl-2 border-[1.5px] text-gray-600 border-black/10 py-px w-20 rounded-lg">
                {formatHours(slot.endHour)}
              </span>
            </div>
            <span
              onClick={() => removeSlot(slot.id, day.id)} 
              className="bg-gray-100 rounded-md cursor-pointer"
            >
              <X 
                size={24} 
                className="fill-gray-500" 
              />
            </span>
          </motion.div>
        ))}
        <div 
          onClick={() => addSlot(day.id)}
          className="flex relative z-50 justify-center items-center w-full h-8 bg-gray-100 text-gray-700 rounded-md mb-2 cursor-pointer"
        >
          <Plus size={24} className="fill-gray-700" />
          <span className="text-sm">Add More</span>
        </div>
      </motion.section>

    </AnimatePresence>

  )
}