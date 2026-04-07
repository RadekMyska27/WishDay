import { UpcomingEvent } from '../types'
import { UpcomingEventList } from './UpcomingEventList'

interface Props {
  events: UpcomingEvent[]
}

export function Dashboard({ events }: Props) {
  const todayCount = events.filter(e => e.daysUntil === 0).length
  const soonCount = events.filter(e => e.daysUntil > 0 && e.daysUntil <= 7).length

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Nadcházející události</h1>
        <p className="mt-1 text-sm text-gray-500">
          Narozeniny a svátky v příštích 30 dnech
          {todayCount > 0 && (
            <span className="ml-2 font-semibold text-red-600">· {todayCount} dnes!</span>
          )}
          {soonCount > 0 && (
            <span className="ml-2 font-semibold text-orange-500">· {soonCount} do 7 dní</span>
          )}
        </p>
      </div>

      <UpcomingEventList events={events} />
    </main>
  )
}
