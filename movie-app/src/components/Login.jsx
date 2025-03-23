import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
      <div className='h-screen w-full bg-cover bg-center flex items-center justify-center' style={{backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/zack-snyders-justice-league-2021-movies-superman-clark-kent-2560x1440-4861.jpg')"}}>
        <div class="absolute inset-0 bg-black/60"></div>
        <div className='max-w-[400px] max-sm:h-[500px] max-sm:w-[350px] max-sm:mt-6 max-md:mt-6 max-md:h-[900px] max-md:w-[600px] max-lg:mt-10 max-lg:w-[600px] max-lg:h-[500px] h-[600px] bg-black/75 rounded-2xl text-white'>
        <div className=' p-10 md:p-20 items-center justify-end  text-white drop-shadow-lg'>

        <h1 className='font-bold text-3xl text-center mt-10'>Welcome Back</h1>
        <p className='text-center'>Enter Your Details</p>
        <form className='w-full flex flex-col py-4 '>
          <input type="email" placeholder="Email" autoComplete='email' className='p-3 my-2 bg-[#535353] rounded'/>
          <input type="password" placeholder='Password' autoComplete='password' className='p-3 my-2 bg-[#535353] rounded'/>
          <button className='bg-green-800 py-3.5 px-12 cursor-pointer mt-2 rounded'>Login</button>
          <p className='mt-1'>Don't have an account? <Link to="/Signup.jsx" className='hover:underline focus:underline text-green-700 font-bold'>Sign Up</Link></p>
        </form>
        </div>
        </div>
     
    </div>
    
  )
}

export default Login 