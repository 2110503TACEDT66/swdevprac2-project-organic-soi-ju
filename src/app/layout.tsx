import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nanum_Myeongjo } from 'next/font/google'

const inter = Nanum_Myeongjo({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
 })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
