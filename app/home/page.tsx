'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import LeftBar from '@/components/LeftBar'
import MiddleBar from '@/components/MiddleBar'
import RightBar from '@/components/RightBar'


export default function Home() {
  return (
    <div className='homepapge w-full h-full'>
      <Navbar/>
      <div className="flex">
        <LeftBar/>
        <MiddleBar/>
        <RightBar/>
      </div>
    </div>
  )
}