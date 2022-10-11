import React from 'react'
import { Link } from 'react-router-dom'
import profilepic from '../profilepic2.jpg'
const Login = () => {
  function submitHandler(e){
    e.preventDefault()
  }
  return (
    <div className='login-page'>
      <div className=' d-flex justify-content-center align-items-center p-5'>

      <form className='d-flex flex-column justify-content-center align-items-center form p-4' onSubmit={submitHandler}>    
      <img src={profilepic} className="rounded-circle" width="100px"alt="UserProfilePicture"/>
        <input type='text' className='form-control my-2' placeholder='Email@example.com'/>
        <input type='password' className='form-control my-2' placeholder='Password'/> 
        <Link to='/passwordreset alig-self-end'>Forgot Password</Link>
        <button className='btn btn-primary m-1'>Log In</button>
        <Link to='/signup'>Create Account</Link>
      </form>
      </div>
    </div>
  )
}

export default Login