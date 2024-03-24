import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import TopLogo from '@/components/topLogo'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <main className=''>
      <TopLogo />
      <div className=''>
        <Navbar />
      </div>
      <Banner/>
    </main>
  )
}
