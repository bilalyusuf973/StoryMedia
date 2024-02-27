import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeContextProvider } from '@/app/contexts/ThemeContext'
import { ModalContextProvider } from './contexts/ModalContext'

import Sessionprovider from '@/authProvider/SessionProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NetVibes',
  description: 'It is a social media web app created using next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className + " " + 'dark:bg-black dark:text-white min-h-screen'}>
          <Sessionprovider>
            <Toaster position='top-center' reverseOrder={false}/>
            <ThemeContextProvider>
              <ModalContextProvider>
              {children}
              </ModalContextProvider>
            </ThemeContextProvider>
          </Sessionprovider>
        </body>
    </html>
  )
}
