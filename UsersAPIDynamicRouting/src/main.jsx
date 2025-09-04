import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import routes from './Routing/Router.jsx'

createRoot(document.getElementById('root')).render(
 <RouterProvider router={routes}></RouterProvider>
)
