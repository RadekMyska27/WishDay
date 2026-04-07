import people from './data/people.json'
import { useUpcomingEvents } from './hooks/useUpcomingEvents'
import { useEmailNotification } from './hooks/useEmailNotification'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { Person } from './types'

const typedPeople = people as Person[]

function App() {
  const upcomingEvents = useUpcomingEvents(typedPeople, 30)
  useEmailNotification(upcomingEvents, 7)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Dashboard events={upcomingEvents} />
    </div>
  )
}

export default App
