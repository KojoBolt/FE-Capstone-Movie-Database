import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('') 
  const navigate = useNavigate()

  const {user, signUp} = UserAuth()


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await signUp(email, password)
      navigate("/movielist")

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className='h-screen w-full bg-cover bg-center flex items-center justify-center' style={{backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/zack-snyders-justice-league-2021-movies-superman-clark-kent-2560x1440-4861.jpg')"}}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className=' w-400 max-w-[400px] max-sm:h-[500px] max-sm:w-[350px] max-sm:mt-6 max-md:mt-6 max-md:h-[900px] max-md:w-[600px] max-lg:mt-10 max-lg:w-[600px] max-lg:h-[500px] h-[600px] bg-black/75 rounded-2xl text-white'>
            <div className=' p-10 md:p-20 items-center justify-end  text-white drop-shadow-lg'>
    
            <h1 className='font-bold text-3xl text-center mt-10'>Sign Up</h1>
            <p className='text-center'>Enter Your Details</p>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4 '>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" autoComplete='email' className='p-3 my-2 bg-[#535353] rounded'/>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' autoComplete='password' className='p-3 my-2 bg-[#535353] rounded'/>
              <button className='bg-green-800 py-3.5 px-12 cursor-pointer mt-2 rounded'>Sign Up</button>
            </form>
            <div>
              <p><input type="checkbox" className='mr-2'/>Remember Me</p>
              <p className='mt-1'>Have an account? <Link to="/login.jsx" className='hover:underline focus:underline text-green-700 font-bold'>Login</Link></p></div>
            </div>
            </div>
         
        </div>
  )
  

}

export default Signup