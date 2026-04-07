import { useTranslation } from 'react-i18next'

interface Props {
  daysUntil: number
}

export function DaysLabel({ daysUntil }: Props) {
  const { t } = useTranslation()

  if (daysUntil === 0) return <span className="font-semibold text-red-600">{t('event.today')}</span>
  if (daysUntil === 1) return <span className="font-semibold text-orange-500">{t('event.tomorrow')}</span>
  return <span className="text-gray-500">{t('event.inDays', { count: daysUntil })}</span>
}
