'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const Sessionprovider: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Sessionprovider;