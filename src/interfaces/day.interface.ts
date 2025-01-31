export interface Day {
  id: string,
  name: string,
  slots: {
    id: number,
    startHour: number,
    endHour: number
  }[]
}