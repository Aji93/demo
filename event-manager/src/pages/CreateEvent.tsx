import { useNavigate } from 'react-router-dom'
import EventForm from '../components/EventForm'
import { useEvents } from '../store/events'

function CreateEvent() {
  const navigate = useNavigate()
  const { addEvent } = useEvents()
  function handleSubmit(data: { title: string; date: string; location: string; description: string }) {
    addEvent(data)
    navigate('/events')
  }

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-semibold">Create Event</h1>
      <EventForm onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateEvent

