import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='h-screen w-full bg-cover bg-center flex items-center justify-center' style={{backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/zack-snyders-justice-league-2021-movies-superman-clark-kent-2560x1440-4861.jpg')"}}>
      <div class="absolute inset-0 bg-black/50"></div>
      <div className='max-w-[400px] h-[600px] bg-black/60 rounded-2xl'>
      <div className='relative z-10  flex flex-col h-full p-10 md:p-20 items-center justify-end  text-white drop-shadow-lg '>
        <div className='max-w-lg text-right text-'>
        <h1 className='text-3xl font-bold'>ALXFLIX</h1>
        <p className='text-lg mb-5 text-center'>
          ENJOY UNLIMITED MOVIES,<br />
          PODCAST, AND MORE </p>
          <Link to="/Login.jsx" className='bg-blue-800 text-white px-6 py-3 rounded mt-6 w-1/2'>Login</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home