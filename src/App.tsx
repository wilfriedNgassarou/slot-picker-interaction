import { useState } from "react"
import { Day } from "./interfaces/day.interface"
import { initialsDays } from "./lib/placeholder-data"
import { Card } from "./components/card"

function App() {
  const [selectedDayId, setSelectedDayId] = useState<string | null>(null)

  const [days, setDays] = useState<Day[]>(initialsDays)

  const addSlot = (dayId: string) => {
    setDays(
      days.map((item) => {
        if(item.id != dayId) return item

        let nextStartHour = item.slots.length ? (item.slots[item.slots.length - 1 ].endHour + 1) : 1
        if(nextStartHour > 24) nextStartHour = nextStartHour - 24 ;

        return (
          {
            ...item,
            slots: [
              ...item.slots,
              {
                id: item.slots.length,
                startHour: nextStartHour,
                endHour: nextStartHour + 1
              }
            ]
          }
        )
      })
    )
  }

  const removeSlot = (slotId: number, dayId: string) => {
    setDays(
      days.map((item) => {
        if(item.id != dayId) return item

        return (
          {
            ...item,
            slots: item.slots.filter((i) => i.id != slotId)
          }
        )
      })
    )
  } 

  return (
    <section className="w-full min-h-dvh overflow-y-auto flex flex-col items-center justify-center gap-y-2">
      {days.map((day) => (
        <Card
          key={day.id}
          day={day}
          isSelected={selectedDayId == day.id}
          setSelectedDayId={setSelectedDayId}
          addSlot={addSlot}
          removeSlot={removeSlot}
        />
      ))}
    </section>
  )
}

export default App
