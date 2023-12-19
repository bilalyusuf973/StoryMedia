import React from 'react'

import Navbar from '@/components/layout/Navbar'
import LeftBar from '@/components/layout/LeftBar'
import MiddleBar from '@/components/layout/MiddleBar'
import RightBar from '@/components/layout/RightBar'
import Stories from '@/components/Stories'
import Thoughts from '@/components/Thoughts'
import Posts from '@/components/Posts'


export default function Home() {
  return (
    <div className='homepapge w-full h-full'>
      <Navbar/>
      <div className="flex">
        <LeftBar/>

        <MiddleBar>
          <Stories/>
          <Thoughts/>
          <Posts/>
        </MiddleBar>

        <RightBar>
          <></>
        </RightBar>
      </div>
    </div>
  )
}