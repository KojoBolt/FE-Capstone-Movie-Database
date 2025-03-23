import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-green-400 text-4xl font-bold cursor-pointer shadow-2xs'>ALXFLIX</h1>
        <div>
            <button className='bg-blue-800 px-6 py-2 text-white rounded cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar