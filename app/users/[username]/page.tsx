'use client'
import Navbar from '@/components/layout/Navbar'
import LeftBar from '@/components/layout/LeftBar'
import MiddleBar from '@/components/layout/MiddleBar'
import RightBar from '@/components/layout/RightBar'

import BackBtnHeader from '@/components/BackBtnHeader'
import UserHero from '@/components/user/UserHero'
import UserBio from '@/components/user/UserBio'
import PostFeed from '@/components/PostFeed'

import { CircularProgress } from '@mui/material'

import useUser from '@/hooks/useUser'

import { usePathname } from 'next/navigation'

export default function UserView() {
    const username = usePathname().split('users/')[1];
    const { data, isLoading } = useUser(username);

  return (
    <div className='homepapge w-full h-full'>
      <Navbar/>
      <div className="flex">
        <LeftBar/>

        <MiddleBar>
           {!isLoading && data?.user ? <div className='h-full w-full flex flex-col'>
              <BackBtnHeader showBackArrow={true} label={username}/>
              <UserHero username={username}/>
              <UserBio/>
              <PostFeed/>
           </div> : <div className='h-full content-center'><CircularProgress className='text-blue-500'/></div> }
        </MiddleBar>

        <RightBar>
          <></>
        </RightBar>
      </div>
    </div>
  )
}