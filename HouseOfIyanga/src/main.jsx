import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from './components/pages/About.jsx'
import Services from './components/pages/Services.jsx'
import Gallery from './components/pages/Gallery.jsx'
import { ReservationProvider } from './context/ReservationContext.jsx'
import ReservationModal from './components/ui/ReservationModal.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/service",
      element: <Services />
    },
    {
      path: "/gallery",
      element: <Gallery />
    },

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReservationProvider>
      <RouterProvider router={router} />
      <ReservationModal />
    </ReservationProvider>
  </React.StrictMode>,
)
