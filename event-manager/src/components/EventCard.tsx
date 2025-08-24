import { Link } from 'react-router-dom'

type Props = {
  id: string
  title: string
  date: string
  location: string
  description: string
}

function EventCard({ id, title, date, location, description }: Props) {
  return (
    <li className="rounded-lg border bg-white p-4 shadow-sm">
      <h3 className="text-lg font-medium">
        <Link to={`/events/${id}`} className="hover:underline">{title}</Link>
      </h3>
      <p className="text-sm text-gray-600">{new Date(date).toLocaleDateString()} • {location}</p>
      <p className="mt-2 text-gray-700">{description}</p>
      <div className="mt-3">
        <Link to={`/events/${id}`} className="text-blue-600 hover:underline">View details</Link>
      </div>
    </li>
  )
}

export default EventCard

