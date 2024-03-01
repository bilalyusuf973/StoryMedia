import React from 'react'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Image from 'next/image'
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import UserName from './UserName';

type PostProps = {
  username: string;
  body: string;
  image?: string;
  caption?: string;
  likedIds?: string[];
  comments?: string[];
}

const Post: React.FC<PostProps> = ( {username, body, image, caption, likedIds, comments} ) => {
  return (
    <div className='postDiv mt-1 mb-2 border-b-[1px] border-gray-500'>
        <div className="postHead flex justify-between items-center px-3 md:px-1 py-2">
          <div className="profileInfo content-center gap-1">
              <Image src={image || '/avatarImage.png'} alt='Avatar' width={35} height={35} style={{
                objectFit: 'cover',
                borderRadius: '100%',
                cursor: 'pointer'
              }}/>
              <UserName username={username} sx='font-semibold text-sm hover:opacity-[0.7]'/>
              <span className='postTime text-[#747474be] text-sm'>&#x2022; 2d</span>
          </div>
          <div className="postFeatures cursor-pointer hover:opacity-[0.5]"><MoreHoriz/></div>
        </div>
        <div className="postMain">
          <img src="testProfile.jpeg" alt="" className='w-full h-[33rem] md:rounded-md'/>
        </div>
        <div className='px-3 md:px-1'>
          <div className="postIcons py-3 flex justify-between items-center">
            <div className="like_comment_share content-center gap-x-4">
                <ThumbUpOutlinedIcon className='cursor-pointer'/>
                <ModeCommentOutlinedIcon className='cursor-pointer'/>
                <ShareOutlinedIcon className='cursor-pointer'/>
            </div>
            <div className="save_post content-center">
                <BookmarkAddOutlinedIcon className='cursor-pointer'/>
            </div>
          </div>
          <div className="postInfo gap-y-1 text-sm flex flex-col">
            <div className="liked text-[13px] flex items-center gap-x-1">
              <span>Liked by</span>
              <span className='font-semibold'>AB</span>
              <span>and</span>
              <span className='font-semibold'>others</span>
            </div>
            {caption && <div className='flex items-center'>
              <span className='font-semibold'>username</span>
              <span className='mx-1'>{caption}</span>
            </div>}
            <div className="comments text-[gray]">View all comments</div>
            <div className="addComment my-2">Add comment</div>
          </div>
        </div>
    </div>
  )
}

export default Post