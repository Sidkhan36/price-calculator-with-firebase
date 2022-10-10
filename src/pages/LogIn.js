import React from 'react'

const LogIn = () => {
  return (
    <div>
        <input type='text' className='form-control m-1' placeholder='Email@example.com'/>
        <input type='password' className='form-control m-1' placeholder='Password'/> 
        <button className='btn btn-primary m-1'>Log In</button>
    </div>
  )
}

export default LogIn