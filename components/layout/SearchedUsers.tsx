'use client'
import React from 'react'
import { useSearchedUsersContext } from '@/app/contexts/SearchedUsersContext';
import Image from 'next/image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChatIcon from '@mui/icons-material/Chat';
import { useRouter } from 'next/navigation';
import FollowButton, { followUser } from '../FollowBtn';

type User = {
  username: string;
  name: string;
}

const SearchedUsers: React.FC = React.memo(() => {
    const router = useRouter();
    const { searchedUsers } = useSearchedUsersContext();

    const gotoProfile = (username: string) => {
        router.push('/users/' + username);
    }

    if (searchedUsers.length === 0) {
      // return <p className='text-center text-neutral-500'>No users found</p>;
      // console.log('No users found');
      return null;
    }

    return (
        <div className='absolute top-[130px] xl:top-0 xl:static w-[93.5%] xl:w-auto rounded-[20px] bg-[#d5d5d5] dark:bg-[#1c1c1c] p-2 flex flex-col gap-2 cursor-pointer xl:m-3'>
          {searchedUsers.map((user: User, index) => {
            const { username, name } = user;
            return (
              <div key={index} className='flex justify-between hover:bg-[#c2c2c2] dark:hover:bg-[#232933] rounded-[20px] p-2' onClick={() => gotoProfile(username)}>
                <div className='flex items-center gap-3'>
                  <Image src='/avatarImage.png' alt='Avatar' width={50} height={50} style={{
                    objectFit: 'cover',
                    borderRadius: '100%',
                  }}/>
                  <div className='flex flex-col'>
                    <p className='text-lg font-bold'>{name}</p>
                    <p className='text-neutral-500'>{username}</p>
                  </div>
                </div>

                <div className='flex gap-1 items-center'>
                  <div onClick={(e) => e.stopPropagation()}>
                    <FollowButton username={username} />
                  </div>
                  <div className='w-[48px] h-[48px] rounded-full content-center cursor-pointer hover:bg-[#ababab] dark:hover:bg-[#151515]' onClick={(e) => e.stopPropagation()}>
                    <ChatIcon sx={{ fontSize: 24 }} className=''/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    );
});

export default SearchedUsers;