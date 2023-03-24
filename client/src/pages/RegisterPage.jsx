import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../assets/auth.png'
const RegisterPage = () => {
  return (
    <div>
      <div className='flex justify-around mt-10 font-poppins flex-wrap sm:items-center relative'>
        
            <div>
            <h1 className='text-2xl font-poppins font-bold text-buttonColor'>Sign Up to</h1>
            <span className='text-xl'>QuitTar</span>
            
            <br/>
            <br/>
            <p className='font-poppins tracking-wide'>If already have an account</p>
            <p className='text-buttonColor underline'><Link to={'/login'}>Login here</Link></p>
            </div>
            <div>
                <img src={auth} className="max-w-xs h-auto lg:mt-8" alt="" />
            </div>
           
       
        <div className='flex flex-col'>
            <h2 className='text-xl font-xl'>Sign Up</h2>
            <form>
            <div className='my-3'>
                <input type="text" className='p-5 bg-inputColor font-poppins rounded-xl' placeholder='Enter Email'/>
            </div>
            <div className='my-3'>
                <input type="text" placeholder='Create User name' className='p-5 bg-inputColor font-poppins rounded-xl'/>
            </div>
            <div className='my-3'>
                <input type="password" placeholder='Password' className='p-5 bg-inputColor font-poppins rounded-xl'/>
            </div>
            <div className='my-3 text-center '>
            <button className=' bg-buttonColor shadow-lg shadow-buttonColor  text-white font-poppins py-4 px-12 w-auto rounded-xl'>Sign Up</button>
            </div>
            
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
