'use client'
import GlobalLayout from '@/components/layout/GlobalLayout'
import MiddleBar from '@/components/layout/MiddleBar'
import RightBar from '@/components/layout/RightBar'
import SearchedUsers from '@/components/layout/SearchedUsers'

import BackBtnHeader from '@/components/BackBtnHeader'
// import UserHero from '@/components/user/UserHero'
// import UserBio from '@/components/user/UserBio'
import PostFeed from '@/components/PostFeed'
import Avatar from '@/components/Avatar'
import UserName from '@/components/UserName'
import Name from '@/components/Name'

import { CircularProgress } from '@mui/material'
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import useUser from '@/hooks/useUser'
import useCurrentUser from '@/hooks/useCurrentUser'

import Image from 'next/image'
import { usePathname } from 'next/navigation'


import FollowButton from "@/components/FollowBtn";
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function UserView() {
  const username = usePathname().split('users/')[1];

  const router = useRouter();
  const { data: userData, isLoading: isUserLoading } = useUser(username);
  const { data: currentUserData, isLoading: isCurrentUserLoading } = useCurrentUser();

  useEffect(() => {
    if (userData && currentUserData) {
      if (userData.user.username === currentUserData.currentUser.username) {
        router.push('/view/profile');
      }
    }
  }, [userData, currentUserData, router]);

  return (
    <GlobalLayout>
        <MiddleBar>
          {!isUserLoading && !isCurrentUserLoading ? <div className='w-full flex flex-col'>
            <BackBtnHeader showBackArrow={true} label={userData.user.name}/>
            <div className="user">
              <div className='bg-neutral-200 dark:bg-neutral-700 h-44'>
                {userData.user.coverImage &&
                  <Image src={userData.user.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }}/>
                }
              </div>
              <div className='p-3'>
                <div className='flex items-center justify-between h-10'>
                  <div className="mb-16">
                    <Avatar username={userData.user.username} hasBorder image={userData.user.profileImage}/>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='p-2 font-extrabold hover:bg-[#41414152] cursor-pointer rounded-full border border-neutral-700'>
                      <MoreHoriz/>
                    </div>
                    <FollowButton username={userData.user.username} />
                  </div>
                </div>
                <div className='px-2 md:pt-4 flex flex-col cursor-pointer'>
                  <Name name={userData.user.name} sx='text-[18px] leading-[22px]'/>
                  <UserName username={userData.user.username} sx='text-neutral-500 text-[15px]'/>
                </div>
                <div className='flex justify-start px-2 py-4 gap-5'>
                  <div className='flex items-center flex-col text-neutral-500'>
                    <div className='font-bold text-[25px]'>{userData.user.followersIds.length}</div>
                    <div>Followers</div>
                  </div>
                  <div className='flex items-center flex-col text-neutral-500'>
                    <div className='font-bold text-[25px]'>{userData.user.followingIds.length}</div>
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