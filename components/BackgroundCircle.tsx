import React from 'react'
import { animate, motion } from 'framer-motion'

type Props = {}

function BackgroundCircle({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[.1,.2,.4,.8,.1,1.0],
      borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
      duration:2.5
    }}

    className='relative flex justify-center items-center'>
      <div className='absolute border border-gray-300 rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
      <div className='absolute border border-gray-700 rounded-full h-[300px] w-[300px] mt-52'></div>
      <div className='absolute border border-gray-700 rounded-full h-[500px] w-[500px] mt-52'></div>
      <div className='absolute border border-yellow-300 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'></div>
      <div className='absolute border border-gray-700 rounded-full h-[800px] w-[800px] mt-52'></div>
    </motion.div>
  )
}

export default BackgroundCircle