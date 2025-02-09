import React from 'react'

const RightBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="hidden xl:block flex-1 pt-[75px] sticky top-0 h-screen overflow-auto">
      {children}
    </div>
  )
}

export default RightBar