import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import EventsList from './pages/EventsList.tsx'
import EventDetails from './pages/EventDetails.tsx'
import CreateEvent from './pages/CreateEvent.tsx'
import { EventsProvider } from './store/events'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <EventsList /> },
      { path: 'events/:id', element: <EventDetails /> },
      { path: 'create', element: <CreateEvent /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventsProvider>
      <RouterProvider router={router} />
    </EventsProvider>
  </StrictMode>,
)
