import { useTranslation } from 'react-i18next'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import { Person } from '../types'
import { formatDate, getAge } from '../utils/dateUtils'
import { getNextOccurrence } from '../utils/dateUtils'

interface Props {
  people: Person[]
}

export function PeoplePage({ people }: Props) {
  const { t, i18n } = useTranslation()

  function formatBirthday(birthday: string): string {
    const date = new Date(birthday)
    return formatDate(date, i18n.language)
  }

  function formatNameDay(nameDay: string): string {
    const date = getNextOccurrence(nameDay)
    return formatDate(date, i18n.language)
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t('people.title')}</h1>
        <p className="mt-1 text-sm text-gray-500">{t('people.subtitle')}</p>
      </div>

      <Table hoverable>
        <TableHead>
          <TableHeadCell>{t('people.name')}</TableHeadCell>
          <TableHeadCell>{t('people.birthday')}</TableHeadCell>
          <TableHeadCell>{t('people.age')}</TableHeadCell>
          <TableHeadCell>{t('people.nameDay')}</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {people.map(person => (
            <TableRow key={person.id} className="bg-white">
              <TableCell className="font-medium text-gray-800">{person.name}</TableCell>
              <TableCell>
                {person.birthday ? formatBirthday(person.birthday) : t('people.noBirthday')}
              </TableCell>
              <TableCell>
                {person.birthday
                  ? t('event.age', { count: getAge(person.birthday, new Date()) })
                  : t('people.noBirthday')}
              </TableCell>
              <TableCell>
                {person.nameDay ? formatNameDay(person.nameDay) : t('people.noNameDay')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
