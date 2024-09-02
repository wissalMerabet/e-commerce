import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faMagnifyingGlass , faCartShopping , faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [menu , setMenu] = useState(false)
  return (
    <nav className="bg-red-50 p-6">

      <div className="flex items-center justify-between">

        <a href="" className="text-3xl font-bold">Logo.</a>

        <ul className="hidden md:flex space-x-8 " >

          <li><a href="" className="hover:text-red-600">Home</a></li>
          <li><a href="" className="hover:text-red-600">Categories</a></li>
          <li><a href="" className="hover:text-red-600">Products</a></li>
          <li><a href="" className="hover:text-red-600"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
          <li><Link to="/Cart" className="hover:text-red-600"><FontAwesomeIcon icon={faCartShopping} />()</Link></li>

        </ul>

        <FontAwesomeIcon 
          icon={menu ? faX : faBars}
          className="md:hidden cursor-pointer"
          size='2x'
          onClick={() => setMenu(!menu) }

        />

        <div className="hidden md:flex space-x-4">

          <Link to="/Signup" className="border-2 border-red-600 p-2 rounded-2xl hover:bg-red-600">SignUp</Link>
          <Link to="/login" className="bg-red-600 p-2 rounded-2xl">Login</Link>


        </div>

        <div className={`md:hidden ${menu ? 'block' : 'hidden'} absolute top-16 left-0 w-full p-7 bg-slate-300 rounded-b-3xl`}>
          <ul className='space-y-7'>

            <li><a href="" className="hover:text-red-600">Home</a></li>
            <li><a href="" className="hover:text-red-600">Categories</a></li>
            <li><a href="" className="hover:text-red-600">Products</a></li>
            <li><a href="" className="hover:text-red-600"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
            <li><Link to="/Cart" className="hover:text-red-600"><FontAwesomeIcon icon={faCartShopping} />()</Link></li>
            <li><Link to="/Signup" className="border-2 border-red-600 p-2 rounded-2xl hover:bg-red-600">SignUp</Link></li>
            <li><Link to="/login" className="bg-red-600 p-2 rounded-2xl">Login</Link></li>

          </ul>

          

        </div>

        

      </div>
    </nav>
    
  );
}
