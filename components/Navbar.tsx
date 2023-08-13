'use client'
import React, { useState, useEffect } from 'react'
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

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
      document.querySelector(".darkThemeIcon")?.classList.add('hidden');
      document.querySelector(".lightThemeIcon")?.classList.remove('hidden');
    }
    else{
      document.documentElement.classList.remove('dark');
      document.querySelector(".darkThemeIcon")?.classList.remove('hidden');
      document.querySelector(".lightThemeIcon")?.classList.add('hidden');
    }
  }, [theme])

  useEffect(() => {
    if(menuState){
      document.querySelector(".openMenuIcon")?.classList.add('hidden');
      document.querySelector(".closeMenuIcon")?.classList.remove('hidden')
      document.querySelector(".menu")?.classList.remove('hidden')
    }
    else{
      document.querySelector(".openMenuIcon")?.classList.remove('hidden');
      document.querySelector(".closeMenuIcon")?.classList.add('hidden');
      document.querySelector(".menu")?.classList.add('hidden');
    }
  },[menuState])

  return (
    <div className='w-full fixed z-[1000]'>
      <div className='navbar relative w-full h-[65px] md:h-[75px] flex bg-white dark:bg-[#000000] justify-between items-center'>

        <div className='left w-full md:w-fit flex items-center'>
          <Link href="/" className='content-center'>
              <img src="socialMediaIcon.png" alt="Icon" className='brandImage w-[60px] h-[60px] md:w-[80px] md:h-[80px]'/>
              <div className="hidden lg:block brandName">STORY<span className='ml-2 text-[#699cfa]'>MEDIA</span></div>
          </Link>
        </div>

        <div className="search justify-center items-center hidden md:flex">
            <input type="text" autoComplete='off' className='searchBar w-[30vw] dark:bg-[#000000]' placeholder='Search...'/>
            <div className='searchIconDiv content-center bg-[#d5d5d5] dark:bg-[#1c1c1c]'><SearchRoundedIcon className='cursor-pointer text-[30px] ml-[6px] mr-[6px]'/></div>
        </div>

        <div className='right content-center mr-[10px]'> 
          <DarkModeRoundedIcon className='darkThemeIcon cursor-pointer ml-2 mr-2 text-[30px]' onClick={() => {setTheme('dark')}}/>
          <LightModeRoundedIcon className='lightThemeIcon cursor-pointer ml-2 mr-2 text-[30px]' onClick={() => {setTheme('light')}}/>
          <div className='menuBtn content-center' onClick={() => {setMenuState(!menuState)}}>
            <SearchRoundedIcon className='md:hidden cursor-pointer ml-2 mr-2 text-[30px]'/>
            <MenuIcon className='openMenuIcon md:hidden cursor-pointer ml-2 mr-2 text-[30px]'/>
            <CloseRoundedIcon className='closeMenuIcon md:hidden cursor-pointer ml-2 mr-2 text-[30px]'/>
          </div>
        </div>

      </div>
      <div className='menu md:hidden relative left-0 right-0 z-[99] opacity-1 dark:bg-[rgba(0,0,0,0.3)]'>
        <ul className='content-center flex-col gap-y-6'>
          <li className='text-xl'>
            <div className="search content-center">
              <input type="text" autoComplete='off' className='searchBar w-[70vw] dark:bg-[#000000] text-[15px]' placeholder='Search...'/>
              <div className='searchIconDiv content-center bg-[#d5d5d5] dark:bg-[#1c1c1c]'><SearchRoundedIcon className='cursor-pointer text-[25px] ml-1 mr-1'/></div>
            </div>
          </li>
          <li className='text-xl'>Home</li>
          <li className='text-xl'>Explore</li>
          <li className='text-xl'>Videos</li>
          <li className='text-xl'>Messages</li>
          <li className='text-xl'>Notifations</li>
          <li className='text-xl'>Create</li>
          <li className='text-xl'>Profile</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
