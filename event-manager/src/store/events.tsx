import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type EventItem = {
  id: string
  title: string
  date: string
  location: string
  description: string
}

type EventsContextValue = {
  events: EventItem[]
  addEvent: (e: Omit<EventItem, 'id'>) => EventItem
  getEventById: (id: string) => EventItem | undefined
}

const initialEvents: EventItem[] = [
  { id: '1', title: 'Tech Conference 2025', date: '2025-09-10', location: 'San Francisco, CA', description: 'A gathering of tech enthusiasts.' },
  { id: '2', title: 'Design Meetup', date: '2025-10-05', location: 'New York, NY', description: 'Designers share insights and trends.' },
  { id: '3', title: 'Music Festival', date: '2025-11-20', location: 'Austin, TX', description: 'Live performances and fun.' },
]

const EventsContext = createContext<EventsContextValue | undefined>(undefined)

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<EventItem[]>(initialEvents)

  function addEvent(newEvent: Omit<EventItem, 'id'>): EventItem {
    const created: EventItem = { id: String(Date.now()), ...newEvent }
    setEvents((prev) => [created, ...prev])
    return created
  }

  function getEventById(id: string) {
    return events.find((e) => e.id === id)
  }

  const value = useMemo(() => ({ events, addEvent, getEventById }), [events])
  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
}

export function useEvents() {
  const ctx = useContext(EventsContext)
  if (!ctx) throw new Error('useEvents must be used within EventsProvider')
  return ctx
}

