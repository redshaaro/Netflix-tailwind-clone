 
import React from 'react'
import {Link, useNavigate } from "react-router-dom"
import { UserAuth } from '../context/Authcontext'



const Nav = () => {
  const {user,logOut} = UserAuth();
  const nav = useNavigate();

  const handleLogout = async ()=>{
    try{
      await logOut()
      nav('/')
       

    }catch(error){
      console.log(error)
    }

  }
  


  return (
    <div className='text-white flex items-center justify-between p-4 z-[100] w-full absolute '>
      <Link to='/'>
     

        <h1 className='text-4xl text-red-600 font-bold cursor-pointer'>Netflix</h1>
        </Link>
        {user?.email? <div>

<Link to='/account'>
  <button>Account</button>
  </Link> 
  
  <button onClick={handleLogout} className='bg-red-600 p-2 font-bold rounded ml-4 '>Logout</button>
  
</div> : <div>

<Link to='/login'>
  <button>Sign In</button>
  </Link> 
  <Link to='/signup'> 
  <button className='bg-red-600 p-2 font-bold rounded ml-4 '>Sign Up</button>
  </Link>
</div>}



    </div>
  )
}

export default Nav