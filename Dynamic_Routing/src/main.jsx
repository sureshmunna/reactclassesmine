import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import routes from './Routing/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
