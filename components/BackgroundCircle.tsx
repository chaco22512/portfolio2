import React from 'react'

type Props = {}

function BackgroundCircle({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border border-gray-300 rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default BackgroundCircle