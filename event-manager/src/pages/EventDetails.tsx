import { useParams, Link } from 'react-router-dom'
import { useEvents } from '../store/events'

function EventDetails() {
  const { id } = useParams()
  const { getEventById } = useEvents()
  const event = id ? getEventById(id) : undefined

  return (
    <article className="space-y-4">
      <Link to="/events" className="text-sm text-blue-600 hover:underline">← Back to events</Link>
      {event ? (
        <>
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <p className="text-gray-600">{new Date(event.date).toLocaleDateString()} • {event.location}</p>
          <p className="text-gray-800">{event.description}</p>
        </>
      ) : (
        <p className="text-gray-600">Event not found.</p>
      )}
    </article>
  )
}

export default EventDetails

