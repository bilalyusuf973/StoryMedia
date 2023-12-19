"use client"
import React, { useState } from 'react'

import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState(['', '', '', '', '']);
  return (
    <div className="posts content-center flex-col">
        {posts.map((post, index) => {
        return <Post key={index}/>
        })}
    </div>
  )
}

export default Posts