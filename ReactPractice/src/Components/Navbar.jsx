import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <section className='w-full bg-[#efefef] h-[60px] flex items-center justify-center'>
            <nav className='flex gap-8'>
                <Link to='/' className='text-gray-800 hover:text-blue-600'>Sign Up</Link>
                <Link to='/login' className='text-gray-800 hover:text-blue-600'>Log In</Link>
            </nav>
        </section> */}

      <div className="h-[60px] bg-[#55aabb] flex items-center px-4 text-white font-bold shadow-md">
        Navbar
      </div>
    </>
  );
};

export default Navbar;
