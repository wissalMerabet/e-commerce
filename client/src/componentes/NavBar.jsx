import React, { useState, useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping, faX, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";

export const NavBar = ({ isLoggedIn, setIsLoggedIn ,cartItemCount }) => {
  const [menu, setMenu] = useState(false);
  const [item, setItem] = useState(0);
  const USERID = window.localStorage.getItem("userID");
  const navigate = useNavigate();

  

  const handleLogout = () => {
    window.localStorage.removeItem("userID"); // Remove user ID from localStorage
    setIsLoggedIn(false); // Update login state globally
    navigate("/login"); // Redirect to login page
  };

  
  return (
    <nav className="bg-white mx-auto p-5 w-full fixed top-0 left-0 z-10 shadow-md">
      <div className="flex items-center justify-between ">
        <a href="/" className="text-3xl font-bold">Moda.</a>

        <ul className="hidden md:flex space-x-8">
          <li><a href="/" className="hover:text-Green">Home</a></li>
          <li><a href="/categories" className="hover:text-Green">Categories</a></li>
          <li><a href="/products" className="hover:text-Green">Products</a></li>
          <li>
            <Link to="/Cart" className="relative flex items-center">
              <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5 bg-gray-200 ring-1 ring-slate-900 rounded-full p-1.5 hover:text-Green" />
              <span className="absolute -top-2 -right-2 p-1 text-sm bg-Green rounded-full text-white">{cartItemCount }</span>
            </Link>
          </li>
        </ul>

        {/* Conditionally render Login or Logout */}
        {!isLoggedIn ? (
          <Link to="/login" className="hidden md:block  px-3 py-2 rounded-2xl  border-2 border-gray-500 hover:bg-gray-300">
            Login
          </Link>
        ) : (
          <button onClick={handleLogout} className="hidden md:block  px-3 py-2 rounded-2xl  border-2 border-gray-500 hover:bg-gray-300">
            <FontAwesomeIcon className="px-1" icon={faRightFromBracket} />
            Logout
          </button>
        )}

        <div className="md:hidden flex items-center space-x-4">
          <Link to="/Cart" className="relative">
            <FontAwesomeIcon className="w-5 h-5 cursor-pointer ring-1 ring-slate-900 rounded-full p-1.5" icon={faCartShopping} />
            <span className="absolute -top-2 -right-2 p-1 text-sm bg-Green rounded-full text-white">{cartItemCount }</span>
          </Link>
          <FontAwesomeIcon
            icon={menu ? faX : faBars}
            className="w-6 h-6 cursor-pointer ring-1 ring-slate-900 rounded-full p-1.5"
            onClick={() => setMenu(!menu)}
          />
        </div>

        <div className={`md:hidden ${menu ? 'block' : 'hidden'} absolute top-16 left-0 w-full p-7 bg-red-100 rounded-b-3xl shadow-lg`}>
          <ul className="space-y-7">
            <li><a href="/" className="hover:text-Green">Home</a></li>
            <li><a href="/categories" className="hover:text-Green">Categories</a></li>
            <li><a href="/products" className="hover:text-Green">Products</a></li>
            <li>
              {!isLoggedIn ? (
                <Link to="/login" className="block bg-Green px-3 py-2 rounded-2xl text-white text-center hover:bg-Green">
                  <FontAwesomeIcon className="px-1" icon={faRightToBracket} />
                  Login
                </Link>
              ) : (
                <button onClick={handleLogout} className="block w-full bg-Green px-3 py-2 rounded-2xl text-white text-center hover:bg-Green">
                  <FontAwesomeIcon className="px-1" icon={faRightFromBracket} />
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
