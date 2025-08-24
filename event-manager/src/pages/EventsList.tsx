import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { useEvents } from '../store/events'

function EventsList() {
  const { events } = useEvents()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Upcoming Events</h1>
        <Link to="/create" className="rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">Create Event</Link>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </ul>
    </div>
  )
}

export default EventsList

