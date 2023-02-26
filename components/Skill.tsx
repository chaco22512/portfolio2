import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  directionLeft?: boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        x:directionLeft ? -200 : 200,
        opacity:0
      }}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      src="CanvaLogo.png" alt=""
      className='rounded-full border border-gray-500 object-cover h-16 w-16 md:w-20 md:h-20
      xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20
      xl:w-24 xl:h-24 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>

    </div>
  )
}

export default Skill