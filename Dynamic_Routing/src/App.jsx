import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <>
     <Navbar />
    <section className='container'>
     
      <Sidebar/>
      <Outlet/>
    </section>
    
    </>
  )
}

export default App