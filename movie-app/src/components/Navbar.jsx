import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  console.log(user)
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
     
        <h1 className='text-green-400 text-4xl font-bold cursor-pointer shadow-2xs'>ALXFLIX</h1>
      
        <div>
            <Link to="signup.jsx"className='bg-blue-800 px-6 py-2 text-white rounded cursor-pointer'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Navbar