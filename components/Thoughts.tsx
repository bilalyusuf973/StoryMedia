import React from 'react'

import Image from 'next/image'

const Thoughts = () => {
  return (
    <div className="thoughts flex border-b-[1px] border-neutral-500 w-full px-3">
      <div className='hidden md:block mr-2 pt-3'>
        <Image src={'/avatarImage.png'} alt='Avatar' width={54} height={54} style={{
          objectFit: 'cover',
          borderRadius: '100%',
          cursor: 'pointer'
        }}/>
      </div>
      <div className='flex flex-col w-full pt-2'>
        <input type="text" name='status' className='h-14 text-[20px] dark:bg-inherit outline-none border-none' placeholder="What's happening...?"/>
        <div className='flex items-center justify-between py-1'>
          <div className="thoughtsIcons"></div>
          <div className="postBtn cursor-pointer content-center bg-blue-600 hover:bg-blue-800 text-white rounded-3xl py-2 px-5 font-bold text-sm">Post</div>
        </div>
      </div>
    </div>
  )
}

export default Thoughts