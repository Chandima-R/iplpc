import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import '../globals.css'
import { Navbar } from '@/components/shared/Navbar'
import { ReactNode } from 'react'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IPLPC',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <Navbar />
        <div  className='mx-auto max-w-[1440px] w-full p-6 max-h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
