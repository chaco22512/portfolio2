import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';

function Hero() {

  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Yusuke",
      "I am a Developper", "I am a Designer", "I am a Creator"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

      <BackgroundCircle />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover z-30'
        src="profile.png" alt="profile" />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Startup supporter</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a'></Cursor>
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button></Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button></Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero