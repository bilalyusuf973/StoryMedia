import React from 'react'
import Navbar from './Navbar'
import LeftBar from './LeftBar'

const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex w-full h-full'>
      <Navbar/>
      <div className='flex w-full'>
        <LeftBar/>
        {children}
      </div>
    </div>
  )
}

export default GlobalLayout