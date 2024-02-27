"use client"
import GlobalLayout from '@/components/layout/GlobalLayout'
import MiddleBar from '@/components/layout/MiddleBar'
import RightBar from '@/components/layout/RightBar'

import BackBtnHeader from '@/components/BackBtnHeader'
// import UserHero from '@/components/user/UserHero'
// import UserBio from '@/components/user/UserBio'
import PostFeed from '@/components/PostFeed'
import Avatar from '@/components/Avatar'
import UserName from '@/components/UserName'
import Name from '@/components/Name'

import { CircularProgress } from '@mui/material'
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import useCurrentUser from '@/hooks/useCurrentUser'

export default function ProfileView() {
    const { data, isLoading } = useCurrentUser();

  return (
    <GlobalLayout>
      <MiddleBar>
        {!isLoading && data?.currentUser ? <div className='h-full w-full flex flex-col'>
          <BackBtnHeader showBackArrow={true} label={data.currentUser.name}/>
          <div>
            <div className="user">
              <div className='bg-neutral-200 dark:bg-neutral-700 h-44'>
                {/* {data?.currentUser?.coverImage &&
                  <Image src={fetchedUser.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }}/>
                } */}
              </div>
              <div className='p-3'>
                <div className='flex items-center justify-between h-10'>
                  <div className="mb-16">
                    <Avatar username={data.currentUser.username} hasBorder image={data.currentUser.profileImage}/>
                  </div> 
                  <div className='px-4 py-2 font-bold cursor-pointer rounded-full border border-blue-300 hover:bg-neutral-200 dark:hover:bg-neutral-900'>
                    Set up profile
                  </div>  
                </div>
                <div className='px-2 md:pt-5 flex flex-col cursor-pointer'>
                  <Name name={data.currentUser.name} sx='text-[18px] leading-[22px]'/>
                  <UserName username={data.currentUser.username} sx='text-neutral-500 text-[15px]'/>
                </div>
                <div></div>
              </div>
            </div>
            <nav></nav>
            <PostFeed/>
          </div>
        </div> : <div className='h-full content-center'><CircularProgress className='text-blue-500'/></div> }
      </MiddleBar>

      <RightBar>
        <></>
      </RightBar>
    </GlobalLayout>
  )
}