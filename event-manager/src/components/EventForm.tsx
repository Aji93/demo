import { useState } from 'react'
import type { FormEvent } from 'react'

type Props = {
  onSubmit: (data: { title: string; date: string; location: string; description: string }) => void
  initial?: Partial<{ title: string; date: string; location: string; description: string }>
}

function EventForm({ onSubmit, initial }: Props) {
  const [title, setTitle] = useState(initial?.title ?? '')
  const [date, setDate] = useState(initial?.date ?? '')
  const [location, setLocation] = useState(initial?.location ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmit({ title, date, location, description })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Location</label>
          <input value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
      </div>
      <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Save</button>
    </form>
  )
}

export default EventForm

