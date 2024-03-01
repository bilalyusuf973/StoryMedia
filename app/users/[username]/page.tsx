'use client'
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
import Follow from '@/components/Follow'

import { CircularProgress } from '@mui/material'
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import useUser from '@/hooks/useUser'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function UserView() {
    const username = usePathname().split('users/')[1];
    const { data, isLoading } = useUser(username);

  return (
    <GlobalLayout>
        <MiddleBar>
          {!isLoading && data?.user ? <div className='w-full flex flex-col'>
            <BackBtnHeader showBackArrow={true} label={data.user.name}/>
            <div className="user">
              <div className='bg-neutral-200 dark:bg-neutral-700 h-44'>
                {data.user.coverImage &&
                  <Image src={data.user.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }}/>
                }
              </div>
              <div className='p-3'>
                <div className='flex items-center justify-between h-10'>
                  <div className="mb-16">
                    <Avatar username={data.user.username} hasBorder image={data.user.profileImage}/>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='p-2 font-extrabold hover:bg-[#41414152] cursor-pointer rounded-full border border-neutral-700'>
                      <MoreHoriz/>
                    </div>
                    <Follow/>
                  </div>
                </div>
                <div className='px-2 md:pt-4 flex flex-col cursor-pointer'>
                  <Name name={data.user.name} sx='text-[18px] leading-[22px]'/>
                  <UserName username={data.user.username} sx='text-neutral-500 text-[15px]'/>
                </div>
                <div></div>
              </div>
            </div>
            <nav></nav>
            <PostFeed/>
          </div> : <div className='h-full content-center'><CircularProgress className='text-blue-500'/></div> }
        </MiddleBar>

        <RightBar>
          <></>
        </RightBar>
    </GlobalLayout>
  )
}