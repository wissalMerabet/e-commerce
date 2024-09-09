import React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping, faX, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Axios from "axios";

export const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [item, setItem] = useState(0);
  const USERID = window.localStorage.getItem("userID");

  useEffect(() => {
    if (USERID) {
      Axios.get(`http://localhost:3000/Cart?userID=${USERID}`)
        .then((response) => {
          setItem(response.data.length);
          console.log(item);
        })
        
    }
  }, [USERID]); // Ensure USERID is in the dependency array


  return (
    <nav className="bg-red-50 mx-auto p-5 w-full fixed top-0 left-0 z-10 shadow-md">
      <div className="flex items-center justify-between ">

        <a href="" className="text-3xl font-bold">Logo.</a>

        <ul className="hidden md:flex space-x-8">
          <li><a href="" className="hover:text-red-600">Home</a></li>
          <li><a href="" className="hover:text-red-600">Categories</a></li>
          <li><a href="" className="hover:text-red-600">Products</a></li>
          <li>
            <Link to="/Cart" className="relative flex items-center">
              <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5 bg-gray-200 ring-1 ring-slate-900 rounded-full p-1.5 hover:text-red-600" />
              <span className="absolute -top-2 -right-2 p-1 text-sm bg-red-600 rounded-full text-white">{item}</span>
            </Link>
          </li>
        </ul>

        <Link to="/login" className="hidden md:block bg-red-600 px-3 py-2 rounded-2xl text-white hover:bg-red-700">
          <FontAwesomeIcon className="px-1" icon={faRightFromBracket} />
          Logout
        </Link>

        <div className="md:hidden flex items-center space-x-4">
          <Link to="/Cart" className="relative">
            <FontAwesomeIcon className="w-5 h-5 cursor-pointer ring-1 ring-slate-900 rounded-full p-1.5" icon={faCartShopping} />
            <span className="absolute -top-2 -right-2 p-1 text-sm bg-red-600 rounded-full text-white">{item}</span>
          </Link>
          <FontAwesomeIcon
            icon={menu ? faX : faBars}
            className="w-6 h-6 cursor-pointer ring-1 ring-slate-900 rounded-full p-1.5"
            onClick={() => setMenu(!menu)}
          />
        </div>

        <div className={`md:hidden ${menu ? 'block' : 'hidden'} absolute top-16 left-0 w-full p-7 bg-red-100 rounded-b-3xl shadow-lg`}>
          <ul className="space-y-7">
            <li><a href="" className="hover:text-red-600">Home</a></li>
            <li><a href="" className="hover:text-red-600">Categories</a></li>
            <li><a href="" className="hover:text-red-600">Products</a></li>
            <li>
              <Link to="/login" className="block bg-red-600 px-3 py-2 rounded-2xl text-white text-center hover:bg-red-700">
                <FontAwesomeIcon className="px-1" icon={faRightFromBracket} />
                Login
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
