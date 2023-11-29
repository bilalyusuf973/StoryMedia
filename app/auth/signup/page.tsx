'use client'
import React from 'react'
import Modal from '@/components/Modal'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation';
import Homepage from '@/app/page';

const Register = () => {
  const router = useRouter();

  const body = (
    <div className='mt-14 md:mt-0 h-full flex'>
      <div className='flex flex-col px-3 pb-14 w-full min-w-[280px] max-w-[370px] m-auto gap-y-5'>
        <div className='font-bold text-3xl my-3'>Create new account</div>
        <Input type="text" name='fullname' placeholder='Full Name'/>
        <Input type="email" name='email' placeholder='Email Address'/>
        <Input type="password" name='password' placeholder='Password'/>
        <Input type="password" name='confirmPassword' placeholder='Confirm Password'/>
        <button className='mt-5 p-2 w-full rounded-full text-md font-bold text-white bg-blue-600 hover:bg-blue-800'>
          Create Account
        </button>
        <div className='flex gap-x-1 mt-10'>
          <span>Already have an account?</span>
          <span className='cursor-pointer text-blue-600 hover:underline' onClick={() => router.push('/auth/login')}>Sign in</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal body={body} onClose={() => router.push('/')}/>
      <Homepage/>
    </>
  )
}

export default Register