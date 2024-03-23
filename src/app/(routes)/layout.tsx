import Navbar from '@/components/navbar'
// import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Nanum_Myeongjo } from 'next/font/google'



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div>
        <Navbar />
        {children}
   </div>
  )
}
