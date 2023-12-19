import React from 'react'

const RightBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="hidden pt-[75px]">
      {children}
    </div>
  )
}

export default RightBar