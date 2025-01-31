export const formatHours = (hours: number) => {
  if(hours < 13) return `${hours}:00 AM`

  return `${hours - 12}:00 PM`
}