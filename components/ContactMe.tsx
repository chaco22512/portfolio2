import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';


type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact</h3>

        <div className='flex flex-col space-y-10'>
          <h4 className='text-4xl font-semi text-center'>
            I have got just what you need. {" "}
            <span className='underline decoration-yellow-400/50'>Let's Talk.</span>

          </h4>

          <div>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-yellow-400 h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+81 80 2070 4211</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-yellow-400 h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>chaco22512@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-yellow-400 h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>A104, 3-21-23 Horinouchi Suginami, Tokyo, Japan</p>
            </div>
          </div>

          <form action="" className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input placeholder='Name' className='contactInput' type="text" />
              <input placeholder='Email' className='contactInput' type="email" />
            </div>

            <input placeholder='Subject' className='contactInput' type="text" />

            <textarea placeholder='Message' className='contactInput' name="" id=""></textarea>
            <button type="submit" className='bg-yellow-400 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ContactMe