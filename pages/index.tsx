import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Yusuke Kaga Portfolio</title>
      </Head>

      {/* <h1 className='text-red-500'>Let's build portfolio</h1> */}

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contacts */}
    </div>
  )
}
