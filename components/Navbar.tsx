'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { useThemeContext } from '@/app/contexts/ThemeContext'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Avatar } from '@mui/material';

type NavbarMenuItemProps = {
  icon: React.JSX.Element;
  label: string;
}

export default function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const [showNavMenu, setShowNavMenu] = useState(false);

  const navbarMenuItemsData = [
    { icon: <HomeRoundedIcon sx={{ fontSize: 32 }} className='mx-3'/>, label: 'Home'},
    { icon: <ExploreOutlinedIcon sx={{ fontSize: 32 }} className='mx-3'/>, label: 'Explore'},
    { icon: <VideocamOutlinedIcon sx={{ fontSize: 32 }} className='mx-3'/>, label: 'Videos'},
    { icon: <SendOutlinedIcon sx={{ fontSize: 30 }} className='mx-3 -rotate-[30deg]'/>, label: 'Messages'},
    { icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 32 }} className='mx-3'/>, label: 'Notifications'},
    { icon: <AddCircleOutlineOutlinedIcon sx={{ fontSize: 32 }} className='mx-3'/>, label: 'Create'},
    { icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 32 }} className='mx-3'/>, label: 'Profile'},
    { icon: <LogoutOutlinedIcon sx={{ fontSize: 32 }} className='mx-3'/>, label: 'Logout'},
  ]

  return (
    <>
      {showNavMenu && <div className='md:hidden fixed w-full h-full content-center z-50 bg-neutral-800 bg-opacity-70'>
        <div className='w-full h-full bg-white dark:bg-black overflow-auto'>
          <div className='fixed top-0 z-[100] w-full flex flex-row-reverse backdrop-blur-md p-2 bg-[#ffffffa6] dark:bg-[#000000a6]'>
            <div className='p-1 rounded-full hover:bg-[#bbb] dark:hover:bg-neutral-800'>
              <CloseIcon sx={{ fontSize: 30 }} onClick={() => setShowNavMenu(prev => !prev)}/>
            </div>
          </div>
          <div className='w-full min-w-[280px] mt-14 px-3 py-5 flex flex-col dark:bg-black gap-y-3'>
            <div className="mb-2 h-[50px] flex rounded-full border-[1px] border-gray-600">
              <input type="text" name='searchBar' autoComplete='off' className='indent-5 w-[85%] rounded-tl-full rounded-bl-full border-r-[1px] border-gray-600 dark:bg-black outline-none text-xl' placeholder='Search...'/>
              <div className='w-[15%] rounded-tr-full rounded-br-full content-center bg-[#d5d5d5] dark:bg-[#1c1c1c]'>
                <SearchRoundedIcon sx={{ fontSize: 30 }} className='cursor-pointer ml-1 mr-1'/>
              </div>
            </div>
            {navbarMenuItemsData.map(({icon, label}, index) => {
              return <NavbarMenuItem key={index} icon={icon} label={label}/>
            })}
          </div>
        </div>
      </div>}

      <div className='w-full fixed z-10'>
        <div className='navbar relative w-full h-[65px] md:h-[75px] flex bg-white dark:bg-[#000000] justify-between items-center'>

          <div className='left w-full md:w-fit flex items-center'>
            <Link href="/" className='content-center'>
                <img src="brandIcon.png" alt="Icon" className='brandImage ml-2 md:ml-6 mr-4 w-[45px] h-[45px]'/>
                <div className="hidden lg:block brandName">NET<span className='ml-1 text-[#699cfa]'>VIBES</span></div>
            </Link>
          </div>

          <div className="search justify-center items-center hidden md:flex">
              <input type="text" name='searchBar' autoComplete='off' className='searchBar w-[30vw] dark:bg-[#000000]' placeholder='Search...'/>
              <div className='searchIconDiv content-center bg-[#d5d5d5] dark:bg-[#1c1c1c]'><SearchRoundedIcon sx={{ fontSize: 30 }} className='cursor-pointer ml-[6px] mr-[6px]'/></div>
          </div>

          <div className='right content-center gap-x-1 mr-2'>
            { theme === "light" ? <DarkModeRoundedIcon sx={{ fontSize: 30 }} className='darkThemeIcon cursor-pointer' onClick={() => {toggleTheme()}}/> : 
            <LightModeRoundedIcon sx={{ fontSize: 30 }} className='lightThemeIcon cursor-pointer' onClick={() => {toggleTheme()}}/>}
            <div className='md:hidden menuBtn content-center gap-x-1' onClick={() => setShowNavMenu(prev => !prev)}>
              <SearchRoundedIcon sx={{ fontSize: 30 }} className='cursor-pointer'/>
              <MenuIcon sx={{ fontSize: 30 }} className='openMenuIcon cursor-pointer'/>
            </div>
            <div className='xl:hidden'>
              <Avatar alt="" src="" sx={{width:35, height:35, cursor:'pointer'}}/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({icon, label}) => {
  return (           
    <div className='py-2 font-semibold text-xl'>
      <div className='flex items-center'>
        {icon}
        <span>{label}</span>
      </div>
    </div>
)}