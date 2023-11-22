'use client'
import React from 'react'
import Link from 'next/link'
import Modal from '@/components/Modal'
import { useRouter } from 'next/navigation'

const Homepage = () => {
  const router = useRouter();

  return (
    <>
      {/* <Modal/> */}
      <div className="absolute top-0 bottom-0 left-0 right-0 flex p-8 justify-center lg:justify-around items-center flex-col lg:flex-row">
        <div className='flex flex-col items-center lg:w-full lg:flex-row lg:justify-around'>
          <div className='flex w-full lg:w-fit'>
            <img src="brandIcon.png" alt="Icon" className='w-[64px] h-[64px] lg:w-[320px] lg:h-[320px]' onClick={() => router.push("/home")}/>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center flex-wrap text-4xl lg:text-5xl font-bold mb-12 mt-7'>
              <span className='my-1'>Welcome to</span>
              <span className='my-1'>&nbsp;NetVibes</span>
            </div>
            <div className='text-2xl lg:text-3xl font-semibold mb-3'>Join today.</div>
            <div className='w-[280px]'>
              <div className='cursor-pointer content-center bg-white hover:bg-[#efefef] text-[#272727d3] text-[15px] font-semibold rounded-[25px] my-3 p-2 border border-gray-400'>
                <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                <span>Sign up with Google</span>
              </div>
              <div className='cursor-pointer content-center bg-white hover:bg-[#d1d1d1] text-[#272727] text-[15px] font-semibold rounded-[25px] my-3 p-2 border border-gray-400'>
                <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="24" height="24"><path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"/></svg>
                <span>Sign up with Apple</span>
              </div>
              <div className='content-center'>
                <div className='h-[1px] bg-gray-300 w-full mx-2'></div>
                <div className='text-[14px]'>or</div>
                <div className='h-[1px] bg-gray-300 w-full mx-2'></div>
              </div>
              <div className='cursor-pointer content-center bg-[#38a9ff] hover:bg-[#3e8cc8] text-white text-[15px] font-semibold rounded-[25px] my-3 p-2'>Create Account</div>
              <div className='text-[11px] text-[#b4b4b4]'>By signing up, you agree to the <Link href="/" className='text-[#569aff] hover:underline'>Terms of Service</Link> and <Link href="/" className='text-[#569aff] hover:underline'>Privacy Policy</Link>, including <Link href="/" className='text-[#569aff] hover:underline'>Cookie Use.</Link></div>
              <div className='text-[16px] font-semibold mt-[50px] mb-3'>Already have an account?</div>
              <div className='cursor-pointer content-center dark:bg-[#000000] hover:bg-[#70a4f823] dark:hover:bg-[#70a4f823] text-[#569aff] text-[15px] font-semibold rounded-[25px] p-2 border border-gray-400'>Sign in</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage