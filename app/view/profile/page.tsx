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

import Image from 'next/image'

import useCurrentUser from '@/hooks/useCurrentUser'
import SearchedUsers from '@/components/layout/SearchedUsers'

export default function ProfileView() {
    const { data, isLoading } = useCurrentUser();
  
    // const isFollowing = user.followersIds.includes(currentUserId);
    // const isFollowing = false;

  return (
    <GlobalLayout>
      <MiddleBar>
        {!isLoading && data?.currentUser ? <div className='w-full flex flex-col'>
          <BackBtnHeader showBackArrow={true} label={data.currentUser.name}/>
          <div className="user">
            <div className='bg-neutral-200 dark:bg-neutral-700 h-44'>
              {data.currentUser.coverImage &&
                <Image src={data.currentUser.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }}/>
              }
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
              <div className='flex justify-start px-2 py-4 gap-5'>
                <div className='flex items-center flex-col text-neutral-500'>
                  <div className='font-bold text-[25px]'>{data.currentUser.followersIds.length}</div>
                  <div>Followers</div>
                </div>
                <div className='flex items-center flex-col text-neutral-500'>
                  <div className='font-bold text-[25px]'>{data.currentUser.followingIds.length}</div>
                  <div>Following</div>
                </div>
              </div>
            </div>
          </div>
          <nav></nav>
          <PostFeed/>
        </div> : <div className='h-full content-center'><CircularProgress className='text-blue-500'/></div> }
      </MiddleBar>

      <RightBar>
        <SearchedUsers/>
      </RightBar>
    </GlobalLayout>
  )
};