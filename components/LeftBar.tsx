'use client'
import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Avatar } from '@mui/material';

type MenuItemProps = {
  icon: React.JSX.Element;
  label: string;
}

const menuItemsData = [
  { icon: <HomeRoundedIcon sx={{ fontSize: 32 }} className='group-hover:text-[35px]' />, label: 'Home' },
  { icon: <ExploreOutlinedIcon sx={{ fontSize: 32 }} className='group-hover:text-[35px]'/>, label: 'Explore' },
  { icon: <VideocamOutlinedIcon sx={{ fontSize: 32 }} className='group-hover:text-[35px]'/>, label: 'Videos' },
  { icon: <SendOutlinedIcon sx={{ fontSize: 28 }} className='group-hover:text-[31px] -rotate-[30deg]'/>, label: 'Messages' },
  { icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 32 }} className='group-hover:text-[35px]'/>, label: 'Notifications' },
  { icon: <AddCircleOutlineOutlinedIcon sx={{ fontSize: 32 }} className='group-hover:text-[35px]'/>, label: 'Create' },
  { icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 32 }} className='group-hover:text-[35px]'/>, label: 'Profile' },
];

export default function LeftBar() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="leftBar hidden md:flex flex-col justify-between dark:bg-[#000000] sticky top-0 h-[100vh]">
      <div className='flex flex-col pt-[90px] xl:ml-[6vw] xl:mr-[3vw] gap-y-[5px]'>

        {menuItemsData.map(({ icon, label }, index) => {
          return <MenuItem key={index} icon={icon} label={label}/>
        })}

        <div className='cursor-pointer px-2 xl:px-0 font-semibold text-white'>
          <span className='w-full px-2 py-3 rounded-[20px] content-center bg-blue-600 hover:bg-blue-800'>Post</span>
        </div>
        
      </div>
      <div className="profileSection hidden xl:flex ml-[6vw] m-3 p-2 cursor-pointer rounded-[20px] hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c]" onClick={() => setShowLogout(prev => !prev)}>
        <Avatar alt="" src="" sx={{ width: 45, height: 45 }} />
        <div className='flex justify-between items-center w-full ml-2'>
          <div className='flex flex-col leading-[20px]'>
            <span className='font-semibold'>Name</span>
            <span className='text-[#afafafbe]'>@username</span>
          </div>
          <div className='font-extrabold text-xl mb-[7px]'>...</div>
        </div>
      </div>
      {showLogout && <div className='hidden xl:flex absolute bottom-[85px] left-[80px] flex-col'>
        <div className='w-[280px] bg-white dark:bg-[#0b0b0b] rounded-[20px] shadow-[0px_2px_15px_#a9a9a9] dark:shadow-[0px_2px_15px_rgb(255,255,255,0.3)]'>
          <div className='py-4'>
            <div className='flex items-center gap-x-1 font-semibold px-5 py-2 hover:bg-[#dadada] dark:hover:bg-[#1b1b1b] cursor-pointer'>
              <span>Log out</span>
              <span>@username</span>
            </div>
          </div>
        </div>
        <div className="absolute left-[130px] bottom-[-8px] w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-white dark:border-t-[#0b0b0b] border-r-[10px] border-r-transparent">
        </div>
      </div>}
    </div>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({icon, label}) => {
  return (
    <div className='cursor-pointer hover:bg-[#d5d5d5] dark:hover:bg-[#1c1c1c] rounded-[20px] content-center xl:justify-start p-2 group'>
      <div className='content-center w-[36px] h-[36px]'>{icon}</div>
      <span className='hidden xl:inline text-[18px] ml-[8px] mr-[3vw]'>{label}</span>
    </div>
  )
}