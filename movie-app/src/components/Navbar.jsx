import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
 

 
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full fixed'>
        <Link>
        <h1 className='text-green-400 text-4xl font-bold cursor-pointer shadow-2xs ml-6'>ALXFLIX</h1>
        </Link>
    </div>
  )
}

export default Navbar