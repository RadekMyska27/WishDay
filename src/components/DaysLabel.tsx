interface Props {
  daysUntil: number
}

export function DaysLabel({ daysUntil }: Props) {
  if (daysUntil === 0) return <span className="font-semibold text-red-600">Dnes!</span>
  if (daysUntil === 1) return <span className="font-semibold text-orange-500">Zítra</span>
  return <span className="text-gray-500">za {daysUntil} dní</span>
}
