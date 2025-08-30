import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <section className='w-full bg-[#efefef] h-[60px] flex items-center justify-center'>
            <nav className='flex gap-8'>
              <Link to='/' className='text-gray-800 hover:text-blue-600'>Home</Link>
            <Link to='/about' className='text-gray-800 hover:text-blue-600'>About</Link>
             <Link to='/contact' className='text-gray-800 hover:text-blue-600'>Contact</Link>
            </nav>
        </section>
    </div>
  )
}

export default Navbar