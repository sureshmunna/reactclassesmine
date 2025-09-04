import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <nav className='sideNav'>
                <Link to='/' >Users</Link>
                <Link to='/Products'>Products</Link>
            </nav>
        </>
    )
}

export default Sidebar