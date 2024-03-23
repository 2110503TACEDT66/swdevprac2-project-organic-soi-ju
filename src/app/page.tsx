import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import TopLogo from '@/components/topLogo'

export default function Home() {
  return (
    <main className=''>
      <TopLogo />
      <div className=''>
        <Navbar />
      </div>
      <div className='text-center text-primary text-[40px]'>

        Hello World
      </div>
    </main>
  )
}
