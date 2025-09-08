import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <nav className='sideNav'>
                {/* <Link to='/' >Users</Link>
                <Link to='/Products'>Products</Link> */}
                <NavLink to='/' className={({isActive})=>{return isActive == true ?"active":"inactive"}}>Users</NavLink>
                <NavLink to='/products' className={({isActive})=>{return isActive == true ?"active":"inactive"}}>Products</NavLink>
                
            </nav>
        </>
    )
}

export default Sidebar