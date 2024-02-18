'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

const Homepage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [email, setEmail] = useState('demouser@gmail.com');
  const [password, setPassword] = useState('11223344');
  const [isLoading, setIsLoading] = useState(false)

  const handleDemoLogin = async () => {
    if(isLoading) return;
    try {
      setIsLoading(true);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      };

      const res = await axios.post('/api/auth/login', requestOptions);
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
  
  useEffect(() => {
    if(session){
      router.push("/home");
    }
  }, [session])
  
  return (
    <div className='w-full h-screen flex overflow-auto'>
      <div className='lg:w-full m-auto p-4 flex flex-col lg:flex-row items-center lg:justify-around'>
        <div className='mr-auto lg:mx-20'>
          <img src="/brandIcon.png" alt="Icon" className='w-[64px] h-[64px] lg:w-[320px] lg:h-[320px]'/>
        </div>
        <div className=''>
          <div className='flex items-center flex-wrap text-4xl lg:text-5xl font-bold mb-12 mt-7'>
            <span className='my-1'>Welcome to</span>
            <span className='my-1'>&nbsp;NetVibes</span>
          </div>
          <div className='text-2xl lg:text-3xl font-semibold mb-3'>Join today.</div>
          <div className='w-[300px] flex flex-col gap-3'>
            <div className='cursor-pointer content-center bg-white hover:bg-[#efefef] text-[#272727d3] text-[15px] font-semibold rounded-[25px] p-2 border border-gray-400'>
              <img src="/googleLogo.svg" alt="Google" className='mx-1'/>
              <span>Sign up with Google</span>
            </div>
            <div className='cursor-pointer content-center bg-white hover:bg-[#d1d1d1] text-[#272727] text-[15px] font-semibold rounded-[25px] p-2 border border-gray-400'>
              <img src="/appleLogo.svg" alt="Apple" className='mx-1'/>
              <span>Sign up with Apple</span>
            </div>
            <div className='content-center'>
              <div className='h-[1px] bg-neutral-500 w-full mx-2'></div>
              <div className='text-[14px] text-neutral-500'>or</div>
              <div className='h-[1px] bg-neutral-500 w-full mx-2'></div>
            </div>
            <Link href='/signup'>
              <div className='cursor-pointer content-center bg-blue-600 hover:bg-blue-800 text-white text-[15px] font-semibold rounded-[25px] p-2'>Create Account</div>
            </Link>
            <div className='text-[11px] text-[#b4b4b4]'>By signing up, you agree to the <Link href="/" className='text-[#569aff] hover:underline'>Terms of Service</Link> and <Link href="/" className='text-[#569aff] hover:underline'>Privacy Policy</Link>, including <Link href="/" className='text-[#569aff] hover:underline'>Cookie Use.</Link></div>
            <div className='text-[16px] font-semibold mt-16'>Already have an account?</div>
            <Link href='/login'>
              <div className='cursor-pointer content-center hover:bg-[#70a4f823] text-blue-600 text-[15px] font-semibold rounded-[25px] p-2 border border-gray-400'>Sign in</div>
            </Link>
            <div className='content-center'>
              <div className='h-[1px] bg-neutral-500 w-full mx-2'></div>
              <div className='text-[14px] text-neutral-500'>or</div>
              <div className='h-[1px] bg-neutral-500 w-full mx-2'></div>
            </div>
            <div className='cursor-pointer content-center bg-blue-600 hover:bg-blue-800 text-white text-[16px] font-semibold rounded-[25px] p-3' onClick={handleDemoLogin}>Login as Demo User</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage