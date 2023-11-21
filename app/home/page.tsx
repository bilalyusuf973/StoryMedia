'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Avatar, Badge } from '@mui/material'



export default function Home() {
  const [posts, setPosts] = useState(['', '', '', '', '']);
  
  return (
    <div className='homepapge'>
      <Navbar/>
      <div className="flex">
        <div className="leftBar hidden md:block bg-white dark:bg-[#000000] w-fit">
          <div className='flex sticky top-[100px] flex-col xl:ml-[6vw] xl:mr-[3vw] gap-y-[5px]'>
            <div className='cursor-pointer hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c] rounded-[20px] flex items-center justify-center xl:justify-start p-2 group'>
              <div className='content-center w-[36px] h-[36px]'>
                <HomeRoundedIcon className='text-[32px] group-hover:text-[36px]'/>
              </div>
              <span className='hidden xl:inline text-[18px] ml-[8px] mr-[3vw]'>Home</span>
            </div>
            <div className='cursor-pointer hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c] rounded-[20px] flex items-center justify-center xl:justify-start p-2 group'>
              <div className='content-center w-[36px] h-[36px]'>
                <ExploreOutlinedIcon className='text-[32px] group-hover:text-[36px]'/>
              </div>
              <span className='hidden xl:inline text-[18px] ml-[8px] mr-[3vw]'>Explore</span>
            </div>
            <div className='cursor-pointer hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c] rounded-[20px] flex items-center justify-center xl:justify-start p-2 group'>
              <div className='content-center w-[36px] h-[36px]'>
                <VideocamOutlinedIcon className='text-[32px] group-hover:text-[36px]'/>
              </div>
              <span className='hidden xl:inline text-[18px] ml-[8px] mr-[3vw]'>Videos</span>
            </div>
            <div className='cursor-pointer hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c] rounded-[20px] flex items-center justify-center xl:justify-start p-2 group'>
              <div className='content-center w-[36px] h-[36px]'>
                <SendOutlinedIcon className='text-[28px] group-hover:text-[32px] -rotate-[33deg]'/>
              </div>
              <span className='hidden xl:inline text-[18px] ml-[8px] mr-[3vw]'>Messages</span>
            </div>
            <div className='cursor-pointer hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c] rounded-[20px] flex items-center justify-center xl:justify-start p-2 group'>
              <div className='content-center w-[36px] h-[36px]'>
                <FavoriteBorderOutlinedIcon className='text-[32px] group-hover:text-[36px]'/>
              </div>
              <span className='hidden xl:inline text-[18px] ml-[8px] mr-[3vw]'>Notifications</span>
            </div>
            <div className='cursor-pointer hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c] rounded-[20px] flex items-center justify-center xl:justify-start p-2 group'>
              <div className='content-center w-[36px] h-[36px]'>
                <AddCircleOutlineOutlinedIcon className='text-[32px] group-hover:text-[36px]'/>
              </div>
              <span className='hidden xl:inline text-[18px] ml-[8px] mr-[3vw]'>Create</span>
            </div>
            <div className='cursor-pointer hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c] rounded-[20px] flex items-center justify-center xl:justify-start p-2 group'>
              <div className='content-center w-[36px] h-[36px]'>
                <PersonOutlineOutlinedIcon className='text-[32px] group-hover:text-[36px]'/>
              </div>
              <span className='hidden xl:inline text-[18px] ml-[8px] mr-[3vw]'>Profile</span>
            </div>
            <div className='cursor-pointer px-2 xl:px-0 font-semibold text-white'>
              <span className='w-full px-2 py-3 rounded-[20px] content-center bg-blue-600 hover:bg-blue-800'>Post</span>
            </div>
          </div>
          <div className="profileSection hidden xl:flex justify-center sticky top-[46.3rem] xl:ml-[6vw] xl:mr-[10px] p-2 cursor-pointer rounded-[20px] hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c]">
            <Avatar alt="" src="" sx={{width: 45, height: 45}}/>
            <div className='hidden xl:flex justify-between items-center w-full ml-2'>
              <div className='flex flex-col leading-[20px]'>
                <span className='font-semibold'>Name</span>
                <span className='text-[#afafafbe]'>@username</span>
              </div>
              <div className='font-extrabold text-xl mb-[7px]'>...</div>
            </div>
          </div>
        </div>
        <div className="middleBar group w-full xl:w-[43vw] md:border-x-[1px] content-center flex-col border-[#757575be] pt-[100px]">
          <div className="stories"></div>
          <div className="thoughts flex border-y-[1px] border-[#757575be] w-full">
            <div className='hidden md:block'>
              <Avatar alt="" src="" sx={{width: 54, height: 54, margin: "12px 10px 0 10px", cursor:"pointer"}}/>
            </div>
            <div className='flex flex-col w-full mx-2'>
              <input type="text" className=' h-20 text-[20px] dark:bg-inherit outline-none border-none' placeholder="What's happening...?"/>
              <div className='flex items-center justify-between my-1'>
                <div className="thoughtsIcons"></div>
                <div className="postBtn cursor-pointer content-center bg-blue-600 hover:bg-blue-800 text-white rounded-3xl py-2 px-5 font-bold text-sm">Post</div>
              </div>
            </div>
          </div>
          <div className="posts content-center flex-col">
            {posts.map((post, index) => {
              return <Post key={index}/>
            })}
          </div>
        </div>
        <div className="rightBar xl:hidden"></div>
      </div>
    </div>
  )
}