export function getNextOccurrence(monthDay: string): Date {
  const [month, day] = monthDay.split('-').map(Number)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const thisYear = new Date(today.getFullYear(), month - 1, day)
  if (thisYear >= today) return thisYear

  return new Date(today.getFullYear() + 1, month - 1, day)
}

export function getDaysUntil(date: Date): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(date)
  target.setHours(0, 0, 0, 0)
  return Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

export function formatDate(date: Date, locale = 'en'): string {
  return date.toLocaleDateString(locale === 'cs' ? 'cs-CZ' : 'en-GB', {
    day: 'numeric',
    month: 'long',
  })
}

export function getAge(birthday: string, referenceDate: Date): number {
  const birth = new Date(birthday)
  return referenceDate.getFullYear() - birth.getFullYear()
}
