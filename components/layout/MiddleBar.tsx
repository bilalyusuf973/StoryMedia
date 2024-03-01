import React from 'react'

const MiddleBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-w-[300px] w-full xl:w-[43vw] md:border-x flex flex-col border-neutral-500 pt-[75px]">
      {children}
    </div>
  )
}

export default MiddleBar