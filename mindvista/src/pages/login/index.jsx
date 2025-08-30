import React from 'react'
import Input from '../../components/input'; // Import the Login component
import LoginButton from '../../components/button'; // Import the LoginButton component
const index = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
      </div>
      <div className='flex flex-col gap-3'>
      <Input label="Username:"   type='email'/>
      <Input label="Password:"   type='password'/>
      <LoginButton btnname='Login'/>
      </div>

    </div>
  )
}

export default index
