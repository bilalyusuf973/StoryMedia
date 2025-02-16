"use client"
import React, { useState } from 'react'

import Image from "next/image";
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

import Name from '../Name';
import UserName from '../UserName';

const LeftBarProfileSection = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { data, isLoading } = useCurrentUser();

  return (
    <>
        {!isLoading && data?.currentUser && <div className="profileSection hidden text-[15px] xl:flex ml-[6vw] m-3 p-2 cursor-pointer rounded-[20px] hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c]" onClick={() => setShowLogout(prev => !prev)}>
        <Image src={data.currentUser.profileImage || '/avatarImage.png'} alt='Avatar' width={45} height={45} style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}/>
        <div className='flex justify-between items-center w-full ml-2'>
                <div className='flex flex-col leading-[20px]'>
                    <Name name={data.currentUser.name} sx='text-[16px]'/>
                    <UserName username={data.currentUser.username} sx='text-neutral-500 text-[14px]'/>
                </div>
                <MoreHoriz/>
            </div>
        </div>}
        {showLogout && <div className='hidden xl:flex text-[15px] fixed bottom-[85px] left-[80px] flex-col'>
            <div className='w-[280px] bg-white dark:bg-[#0b0b0b] rounded-[20px] shadow-[0px_2px_15px_#a9a9a9] dark:shadow-[0px_2px_15px_rgb(255,255,255,0.3)]'>
                <div className='py-4'>
                    <div className='flex items-center gap-1 font-semibold px-5 py-2 hover:bg-[#dadada] dark:hover:bg-[#1b1b1b] cursor-pointer' onClick={() => signOut({callbackUrl: "/", redirect: true})}>
                        <span>Log out</span>
                        <UserName username={data.currentUser.username} sx='text-neutral-500'/>
                    </div>
                </div>
            </div>
            <div className="absolute left-[130px] bottom-[-8px] w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-white dark:border-t-[#0b0b0b] border-r-[10px] border-r-transparent">
            </div>
        </div>}
    </>
  )
}

export default LeftBarProfileSection