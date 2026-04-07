import { UpcomingEvent } from '../types'
import { EventCard } from './EventCard'

interface Props {
  events: UpcomingEvent[]
}

export function UpcomingEventList({ events }: Props) {
  if (events.length === 0) {
    return (
      <p className="text-center text-gray-400 py-12">
        Žádné narozeniny ani svátky v následujících 30 dnech.
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map(event => (
        <EventCard key={`${event.person.id}_${event.type}`} event={event} />
      ))}
    </div>
  )
}
