import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/components/Header/Header'

export default function Home() {
  return (
    <div>
      <Header title={'pip_r'}/>
      <main className={styles.main}>
      </main>
    </div>

  )
}
