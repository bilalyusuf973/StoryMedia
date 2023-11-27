'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { useThemeContext } from '@/app/contexts/ThemeContext'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
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
  const [menuState, setMenuState] = useState(false);

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
            <div className='searchIconDiv content-center bg-[#d5d5d5] dark:bg-[#1c1c1c]'><SearchRoundedIcon sx={{ fontSize: 30 }} className='cursor-pointer ml-[6px] mr-[6px]'/></div>
        </div>

        <div className='right content-center gap-x-1 mr-2'>
          { theme === "light" ? <DarkModeRoundedIcon sx={{ fontSize: 30 }} className='darkThemeIcon cursor-pointer' onClick={() => {toggleTheme()}}/> : 
          <LightModeRoundedIcon sx={{ fontSize: 30 }} className='lightThemeIcon cursor-pointer' onClick={() => {toggleTheme()}}/>}
          <div className='md:hidden menuBtn content-center gap-x-1' onClick={() => {setMenuState(!menuState)}}>
            <SearchRoundedIcon sx={{ fontSize: 30 }} className='cursor-pointer'/>
            {menuState ? <CloseRoundedIcon sx={{ fontSize: 30 }} className='closeMenuIcon cursor-pointer'/> : 
            <MenuIcon sx={{ fontSize: 30 }} className='openMenuIcon cursor-pointer'/>}
          </div>
          <div className='xl:hidden'>
            <Avatar alt="" src="" sx={{width:35, height:35, cursor:'pointer'}}/>
          </div>
        </div>

      </div>
      {menuState && <div className='menu md:hidden relative left-0 right-0 z-[99] backdrop-blur bg-[#ffffffad] dark:bg-[#000000]'>
        <div className="search content-center mb-6">
          <input type="text" autoComplete='off' className='searchBar w-full dark:bg-[#000000] text-[15px]' placeholder='Search...'/>
          <div className='searchIconDiv content-center bg-[#d5d5d5] dark:bg-[#1c1c1c]'><SearchRoundedIcon sx={{ fontSize: 30 }} className='cursor-pointer ml-1 mr-1'/></div>
        </div>
        <ul className='flex justify-center flex-col gap-y-6 font-semibold'>
          {navbarMenuItemsData.map(({icon, label}, index) => {
            return <NavbarMenuItem key={index} icon={icon} label={label}/>
          })}
        </ul>
      </div>}
    </div>
  )
}

export const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({icon, label}) => {
  return (           
    <li className='text-xl'>
      <div className='flex items-center'>
        {icon}
        <span>{label}</span>
      </div>
    </li>
)}