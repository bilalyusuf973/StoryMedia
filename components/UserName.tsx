import React from 'react'

const UserName: React.FC<{username: string, sx?: string}> = ({username, sx}) => {
  return (
    <span className={'cursor-pointer ' + sx}>@{username}</span>
  )
}

export default UserName