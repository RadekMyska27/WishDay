import { useTranslation } from 'react-i18next'
import { UpcomingEvent } from '../types'
import { EventCard } from './EventCard'
import { DaysLabel } from './DaysLabel'

interface Props {
  events: UpcomingEvent[]
}

function groupByDay(events: UpcomingEvent[]): Map<number, UpcomingEvent[]> {
  return events.reduce((acc, event) => {
    const group = acc.get(event.daysUntil) ?? []
    acc.set(event.daysUntil, [...group, event])
    return acc
  }, new Map<number, UpcomingEvent[]>())
}

export function UpcomingEventList({ events }: Props) {
  const { t } = useTranslation()

  if (events.length === 0) {
    return <p className="py-12 text-center text-gray-400">{t('empty')}</p>
  }

  const groups = groupByDay(events)

  return (
    <div className="flex flex-col gap-8">
      {Array.from(groups.entries()).map(([daysUntil, groupEvents]) => (
        <div key={daysUntil}>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
            <DaysLabel daysUntil={daysUntil} />
          </h2>
          <div className="flex flex-col gap-3">
            {groupEvents.map(event => (
              <EventCard key={`${event.person.id}_${event.type}`} event={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
