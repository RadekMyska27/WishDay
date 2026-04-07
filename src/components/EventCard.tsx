import { useTranslation } from 'react-i18next'
import { Card, Badge } from 'flowbite-react'
import { UpcomingEvent } from '../types'
import { formatDate, getAge } from '../utils/dateUtils'

interface Props {
  event: UpcomingEvent
}

export function EventCard({ event }: Props) {
  const { t, i18n } = useTranslation()
  const { person, type, date } = event
  const isBirthday = type === 'birthday'
  const age = isBirthday && person.birthday ? getAge(person.birthday, date) : null

  return (
    <Card className="flex flex-col gap-1">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-lg font-semibold text-gray-800">{person.name}</p>
          <p className="text-sm text-gray-500">
            {formatDate(date, i18n.language)}
            {age !== null && (
              <span className="ml-1 text-gray-400">· {t('event.age', { count: age })}</span>
            )}
          </p>
        </div>
        <Badge color={isBirthday ? 'blue' : 'green'} className="shrink-0">
          {isBirthday ? `🎂 ${t('event.birthday')}` : `🌸 ${t('event.nameday')}`}
        </Badge>
      </div>
    </Card>
  )
}
