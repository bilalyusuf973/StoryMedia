'use client'
import React, { useState, useEffect, useContext } from 'react'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useThemeContext } from '@/app/context/theme/ThemeContext'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Avatar } from '@mui/material'

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [menuState, setMenuState] = useState(false);

  return (
    <div className='w-full fixed z-[1000]'>
      <div className='navbar relative w-full h-[65px] md:h-[75px] flex bg-white dark:bg-[#000000] justify-between items-center'>

        <div className='left w-full md:w-fit flex items-center'>
          <Link href="/" className='content-center'>
              <img src="brandIcon.png" alt="Icon" className='brandImage ml-2 mr-4 w-[45px] h-[45px]'/>
              <div className="hidden lg:block brandName">NET<span className='ml-1 text-[#699cfa]'>VIBES</span></div>
          </Link>
        </div>

        <div className="search justify-center items-center hidden md:flex">
            <input type="text" autoComplete='off' className='searchBar w-[30vw] dark:bg-[#000000]' placeholder='Search...'/>
            <div className='searchIconDiv content-center bg-[#d5d5d5] dark:bg-[#1c1c1c]'><SearchRoundedIcon className='cursor-pointer text-[30px] ml-[6px] mr-[6px]'/></div>
        </div>

        <div className='right content-center mr-[5px]'> 
          { theme === "light" ? <DarkModeRoundedIcon className='darkThemeIcon cursor-pointer mx-1 text-[30px]' onClick={() => {toggleTheme()}}/> : 
          <LightModeRoundedIcon className='lightThemeIcon cursor-pointer mx-1 text-[30px]' onClick={() => {toggleTheme()}}/>}
          <div className='md:hidden menuBtn content-center' onClick={() => {setMenuState(!menuState)}}>
            <SearchRoundedIcon className='cursor-pointer mx-1 text-[30px]'/>
            {menuState ? <CloseRoundedIcon className='closeMenuIcon cursor-pointer mx-1 text-[30px]'/> : 
            <MenuIcon className='openMenuIcon cursor-pointer mx-1 text-[30px]'/>}
          </div>
          <div className='xl:hidden mx-1'>
            <Avatar alt="" src="" sx={{width:35, height:35, cursor:'pointer'}}/>
          </div>
        </div>

      </div>
      {menuState && <div className='menu md:hidden relative left-0 right-0 z-[99] backdrop-blur bg-[#ffffffad] dark:bg-[#000000]'>
        <div className="search content-center mb-6">
          <input type="text" autoComplete='off' className='searchBar w-full dark:bg-[#000000] text-[15px]' placeholder='Search...'/>
          <div className='searchIconDiv content-center bg-[#d5d5d5] dark:bg-[#1c1c1c]'><SearchRoundedIcon className='cursor-pointer text-[25px] ml-1 mr-1'/></div>
        </div>
        <ul className='flex justify-center flex-col gap-y-6 font-semibold'>
          <li className='text-xl'>
            <div className='flex items-center'>
              <HomeRoundedIcon className='mx-3 text-[32px]'/>
              <span>Home</span>
            </div>
          </li>
          <li className='text-xl'>
            <div className='flex items-center'>
              <ExploreOutlinedIcon className='mx-3 text-[32px]'/>
              <span>Explore</span>
            </div>
          </li>
          <li className='text-xl'>
            <div className='flex items-center'>
              <VideocamOutlinedIcon className='mx-3 text-[32px]'/>
              <span>Videos</span>
            </div>
          </li>
          <li className='text-xl'>
            <div className='flex items-center'>
              <SendOutlinedIcon className='-rotate-[33deg] mx-3 text-[32px]'/>
              <span>Messages</span>
            </div>
          </li>
          <li className='text-xl'>
            <div className='flex items-center'>
              <FavoriteBorderOutlinedIcon className='mx-3 text-[32px]'/>
              <span>Notifications</span>
            </div>
          </li>
          <li className='text-xl'>
            <div className='flex items-center'>
              <AddCircleOutlineOutlinedIcon className='mx-3 text-[32px]'/>
              <span>Create</span>
            </div>
          </li>
          <li className='text-xl'>
            <div className='flex items-center'>
              <PersonOutlineOutlinedIcon className='mx-3 text-[32px]'/>
              <span>Profile</span>
            </div>
          </li>
          <li className='text-xl'>
            <div className='flex items-center'>
              <LogoutOutlinedIcon className='mx-3 text-[32px]'/>
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>}
    </div>
  )
}

export default Navbar
