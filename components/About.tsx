import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    transition={{duration:1.5}}
    whileInView={{opacity:1}}
    className='flex flex-col relative text-center 
    md:text-left md:flex-row h-screen
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img
      initial={{
        x:-200,
        opacity:0
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}

      className="ms:mt-30 mt-20 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
      md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[450px]"
      src='profile2.jpg'
      ></motion.img>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-yellow-500/50'>little</span> background</h4>

        <p className='text-base'>
        I work for The Japan External Trade Organization (JETRO), a Japanese government-based organization, to build a bridge between foreign and Japanese domestic companies. Our current mission is (1) to promote open-innovation in Japanese corporations by inviting foreign startups, (2) connect Japanese startups to overseas VC/CVCs and angel investors, (3) collaborate with foreign accelerators and incubators abroad, and (4) organize events with foreign and Japanese startup ecosystem builders. Please take a look at our website and feel free to reach out to us! Let's work together to create a better future!
        </p>
      </div>
    </motion.div>
  )
}