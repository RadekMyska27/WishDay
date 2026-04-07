import { useMemo } from 'react'
import { Person, UpcomingEvent } from '../types'
import { getNextOccurrence, getDaysUntil } from '../utils/dateUtils'

export function useUpcomingEvents(people: Person[], daysAhead = 30): UpcomingEvent[] {
  return useMemo(() => {
    const events: UpcomingEvent[] = []

    for (const person of people) {
      if (person.birthday) {
        const monthDay = person.birthday.slice(5)
        const date = getNextOccurrence(monthDay)
        const daysUntil = getDaysUntil(date)
        if (daysUntil >= 0 && daysUntil <= daysAhead) {
          events.push({ person, type: 'birthday', date, daysUntil })
        }
      }
      if (person.nameDay) {
        const date = getNextOccurrence(person.nameDay)
        const daysUntil = getDaysUntil(date)
        if (daysUntil >= 0 && daysUntil <= daysAhead) {
          events.push({ person, type: 'nameday', date, daysUntil })
        }
      }
    }

    return events.sort((a, b) => a.daysUntil - b.daysUntil)
  }, [people, daysAhead])
}
