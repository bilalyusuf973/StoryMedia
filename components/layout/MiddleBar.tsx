import React from 'react'

const MiddleBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full xl:w-[43vw] md:border-x-[1px] content-center flex-col border-neutral-500 pt-[75px]">
      {children}
    </div>
  )
}

export default MiddleBar