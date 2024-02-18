"use client"
import React, { useState } from 'react'

import Post from './Post';
import useCurrentUser from '@/hooks/useCurrentUser';

const Posts = () => {
  const { data, isLoading } = useCurrentUser();
  const [posts, setPosts] = useState(['', '', '', '', '']);
  return (
    <div className="posts content-center flex-col">
        {posts.map((post, index) => {
        return <Post key={index} username={data?.currentUser?.username} body=''/>
        })}
    </div>
  )
}

export default Posts