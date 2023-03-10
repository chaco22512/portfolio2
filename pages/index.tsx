import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience'
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import ContactMe from '@/components/ContactMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-900 text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-track-gray-400/20 scrollbar-thumb-yellow-500/80'>
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
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Project />
      </section>

      {/* Contacts */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}
