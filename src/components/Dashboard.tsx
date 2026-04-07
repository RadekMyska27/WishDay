import { useTranslation } from 'react-i18next'
import { UpcomingEvent } from '../types'
import { UpcomingEventList } from './UpcomingEventList'

interface Props {
  events: UpcomingEvent[]
}

export function Dashboard({ events }: Props) {
  const { t } = useTranslation()
  const todayCount = events.filter(e => e.daysUntil === 0).length
  const soonCount = events.filter(e => e.daysUntil > 0 && e.daysUntil <= 7).length

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t('dashboard.title')}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {t('dashboard.subtitle')}
          {todayCount > 0 && (
            <span className="ml-1 font-semibold text-red-600">
              {t('dashboard.todayCount', { count: todayCount })}
            </span>
          )}
          {soonCount > 0 && (
            <span className="ml-1 font-semibold text-orange-500">
              {t('dashboard.soonCount', { count: soonCount })}
            </span>
          )}
        </p>
      </div>

      <UpcomingEventList events={events} />
    </main>
  )
}
