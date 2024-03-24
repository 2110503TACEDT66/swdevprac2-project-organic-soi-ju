import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import TopLogo from '@/components/topLogo'
import Banner from '@/components/Banner'
import HomeText from '@/components/Home'

export default function Home() {
  return (
    <main className='flex flex-col'>
      <TopLogo />
      <div className=''>
        <Navbar />
      </div>
      <Banner/>
      <HomeText/>
    </main>
  )
}
