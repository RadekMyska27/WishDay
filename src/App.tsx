import { BrowserRouter, Routes, Route } from 'react-router-dom'
import people from './data/people.json'
import { useUpcomingEvents } from './hooks/useUpcomingEvents'
import { useEmailNotification } from './hooks/useEmailNotification'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { PeoplePage } from './pages/PeoplePage'
import { Person } from './types'

const typedPeople = people as Person[]

function AppContent() {
  const upcomingEvents = useUpcomingEvents(typedPeople, 30)
  useEmailNotification(upcomingEvents, 7)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard events={upcomingEvents} />} />
        <Route path="/people" element={<PeoplePage people={typedPeople} />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
