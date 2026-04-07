import { useTranslation } from 'react-i18next'
import { UpcomingEvent } from '../types'
import { EventCard } from './EventCard'

interface Props {
  events: UpcomingEvent[]
}

export function UpcomingEventList({ events }: Props) {
  const { t } = useTranslation()

  if (events.length === 0) {
    return <p className="py-12 text-center text-gray-400">{t('empty')}</p>
  }

  return (
    <div className="flex flex-col gap-4">
      {events.map(event => (
        <EventCard key={`${event.person.id}_${event.type}`} event={event} />
      ))}
    </div>
  )
}
