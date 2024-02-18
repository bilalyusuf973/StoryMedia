'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

import Modal from '@/components/layout/Modal'
import Input from '@/components/Input'

import Homepage from '@/app/page';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const closeRegisterPage = () => {
    if(isLoading)
      return;

    router.push('/');
  }

  const handleSubmit = async () => {
    if(isLoading) return;
    try {
      setIsLoading(true);

      if(password !== password_confirmation)
        throw new Error("Confirm Password Again!");

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, username, email, password, password_confirmation})
      };

      const res = await axios.post('/api/auth/register', requestOptions);
      const data = await res.data;

      if(data.status === 200){
        await signIn("credentials", {
          email: email,
          password: password,
          callbackUrl: "/home",
          redirect: true
        });
        toast.success(data.message);
      }else if(data.status === 400){
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }

  const title = (
    <div className='font-bold text-3xl my-3'>Create new account</div>
  );

  const body = (
    <>
      <Input type="text" name='name' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
      <Input type="text" name='username' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
      <Input type="email" name='email' placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)}/>
      <Input type="password" name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
      <Input type="password" name='confirmPassword' placeholder='Confirm Password' value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
    </>
  );

  const footer = (
    <div className='flex gap-x-1 mt-10'>
      <span>Already have an account?</span>
      <span className='cursor-pointer text-blue-600 hover:underline' onClick={() => router.push('/login')}>Sign in</span>
    </div>
  );

  return (
    <>
      <Modal onClose={closeRegisterPage} onSubmit={handleSubmit} title={title} body={body} actionLabel='Create Account' footer={footer} disabled={false}/>
      <Homepage/>
    </>
  )
}

export default Register