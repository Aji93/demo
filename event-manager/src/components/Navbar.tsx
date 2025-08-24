import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">EventManager</Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/events" className={({ isActive }) => isActive ? 'text-blue-700 font-medium' : 'hover:text-blue-600'}>Events</NavLink>
          <NavLink to="/create" className={({ isActive }) => `inline-flex items-center rounded-md px-3 py-2 text-white ${isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'}`}>Create</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

