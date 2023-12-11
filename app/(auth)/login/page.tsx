'use client'
import React, { useState } from 'react'
import Modal from '@/components/Modal'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation';
import Homepage from '@/app/page';
import axios from 'axios';
import { signIn } from 'next-auth/react';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const closeLoginPage = () => {
    if(isLoading)
      return;

    router.push('/');
  }

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      // todo add login functionality
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      };

      const res = await axios.post('/api/auth/login', requestOptions);
      const data = await res.data;

      if(data.status === 200){
        console.log(data.message);
        signIn("credentials", {
          email: email,
          password: password,
          callbackUrl: "/home",
          redirect: true
        });
      }else if(data.status === 400){
        console.log(data.errors)
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }

  }

  const title = (
    <div className='font-bold text-3xl my-3'>Login</div>
  );

  const body = (
    <>
      <Input type='email' name='email' placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)}/>
      <Input type='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
    </>
  );

  const footer = (
    <>
      <span className='cursor-pointer text-blue-600 ml-auto hover:underline'>Forgot Password?</span>
      <div className='flex gap-x-1 mt-10'>
        <span>Don't have an account?</span>
        <span className='cursor-pointer text-blue-600 hover:underline' onClick={() => router.push('/signup')}>Sign up</span>
      </div>
    </>
  );

  return (
    <>
      <Modal onClose={closeLoginPage} onSubmit={handleSubmit} title={title} body={body} actionLabel='Next' footer={footer} disabled={false}/>
      <Homepage/>
    </>
  )
}

export default Login