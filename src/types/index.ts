export interface Person {
  id: string
  name: string
  birthday?: string  // YYYY-MM-DD
  nameDay?: string   // MM-DD
}

export interface UpcomingEvent {
  person: Person
  type: 'birthday' | 'nameday'
  date: Date
  daysUntil: number
}
