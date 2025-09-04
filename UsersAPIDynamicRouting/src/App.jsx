import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <section className='container'>
      <Sidebar/>
      <Outlet/>
    </section>
    </>
  )
}

export default App