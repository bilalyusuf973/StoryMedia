import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from '@/app/contexts/ThemeContext'
import { ModalContextProvider } from './contexts/ModalContext'

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
        <body className={inter.className + " " + 'dark:bg-[#000000] dark:text-white min-h-screen'}>
          <ThemeContextProvider>
            <ModalContextProvider>
            {children}
            </ModalContextProvider>
          </ThemeContextProvider>
        </body>
    </html>
  )
}
