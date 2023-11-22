'use client'
import React, { useState } from 'react'
import Post from '@/components/Post'
import { Avatar } from '@mui/material'

const MiddleBar = () => {
  const [posts, setPosts] = useState(['', '', '', '', '']);

  return (
  <div className="middleBar group w-full xl:w-[43vw] md:border-x-[1px] content-center flex-col border-[#757575be] pt-[75px]">
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
  )
}

export default MiddleBar