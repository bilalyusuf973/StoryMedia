"use client"
import React, { useState } from 'react'

import Post from './Post';
import useCurrentUser from '@/hooks/useCurrentUser';

import { CircularProgress } from '@mui/material';

const Posts = () => {
  const { data, isLoading } = useCurrentUser();
  const [posts, setPosts] = useState(['', '', '', '', '']);
  return (
    <>
      {!isLoading && data?.currentUser ? <div className="posts content-center flex-col">
          {posts.map((post, index) => {
          return <Post key={index} username={data.currentUser.username} body=''/>
          })}
      </div> : <div className='h-[80%] content-center'><CircularProgress className='text-blue-500'/></div> }
    </>
  )
}

export default Posts