import React from 'react'

const Name: React.FC<{name: string, verified?: boolean, sx?: string}> = ({name, verified, sx}) => {
  return (
    <div className={'flex items-center font-bold cursor-pointer ' + sx}>
      <span>
        {name}
      </span>
      <span></span>
    </div>
  )
}

export default Name