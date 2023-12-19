import React from 'react'

import { Avatar } from '@mui/material'

const Thoughts = () => {
  return (
    <div className="thoughts flex border-b-[1px] border-neutral-500 w-full">
      <div className='hidden md:block'>
        <Avatar alt="" src="" sx={{width: 54, height: 54, margin: "12px 10px 0 10px", cursor:"pointer"}}/>
      </div>
      <div className='flex flex-col w-full mx-2'>
        <input type="text" name='status' className='h-20 text-[20px] dark:bg-inherit outline-none border-none' placeholder="What's happening...?"/>
        <div className='flex items-center justify-between my-1'>
          <div className="thoughtsIcons"></div>
          <div className="postBtn cursor-pointer content-center bg-blue-600 hover:bg-blue-800 text-white rounded-3xl py-2 px-5 font-bold text-sm">Post</div>
        </div>
      </div>
    </div>
  )
}

export default Thoughts