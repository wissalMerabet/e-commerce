import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <div className="containter mx-auto bg-gray-200 flex flex-col space-y-3 items-center p-8">
        
        <ul className='flex flex-row space-x-6 '>
            <li><a href=""><FontAwesomeIcon size ='2x' icon={faX} /></a></li>
            <li><a href=""></a><FontAwesomeIcon size ='2x' icon={faX} /></li>
            <li><a href=""></a><FontAwesomeIcon size ='2x' icon={faX} /></li>
            <li><a href=""></a><FontAwesomeIcon size ='2x' icon={faX} /></li>
        </ul>

        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="" className='font-bold text-3xl'>Logo.</a>


        

    </div>
  )
}
