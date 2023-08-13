import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Avatar } from '@mui/material'

const Post = () => {
  return (
    <div className='postDiv mt-1 mb-2 border-b-[1px] border-gray-500'>
        <div className="postHead flex justify-between items-center px-1 py-2">
          <div className="profileInfo content-center">
              <Avatar alt="" src="" sx={{width:35, height:35, marginRight:1, cursor:'pointer'}}/>
              <span className='postUsername font-semibold text-md hover:opacity-[0.5] cursor-pointer'>username</span>
              <span className='postTime text-[#747474be]'>&nbsp;&#x2022;&nbsp;2d</span>
          </div>
          <div className="postFeatures cursor-pointer font-extrabold text-xl hover:opacity-[0.5]">...</div>
        </div>
        <div className="postMain">
          <img src="testProfile.jpeg" alt="" className='w-full h-[33rem] md:rounded-md'/>
        </div>
        <div className="postIcons px-1 py-3 flex justify-between items-center">
          <div className="like_comment_share content-center gap-x-4">
              <ThumbUpOutlinedIcon className='cursor-pointer'/>
              <ModeCommentOutlinedIcon className='cursor-pointer'/>
              <ShareOutlinedIcon className='cursor-pointer'/>
          </div>
          <div className="save_post content-center">
              <BookmarkAddOutlinedIcon className='cursor-pointer'/>
          </div>
        </div>
        <div className="postInfo text-[15px] flex flex-col">
          <div className="liked">Liked by AB and others</div>
          <div className="comments text-[gray]">View all comments</div>
          <div className="addComment my-2">Add comment</div>
        </div>
    </div>
  )
}

export default Post