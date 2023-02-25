import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yusuke Kaga Portfolio</title>
      </Head>

      {/* <h1 className='text-red-500'>Let's build portfolio</h1> */}

      {/* Header */}
      <Header />

      {/* Hero */}
      
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contacts */}
    </div>
  )
}
