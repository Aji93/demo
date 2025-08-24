import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to EventManager</h1>
      <p className="text-gray-600">Discover and create events with ease.</p>
      <div className="flex gap-3">
        <Link to="/events" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">Browse Events</Link>
        <Link to="/create" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Create Event</Link>
      </div>
    </div>
  )
}

export default Home

