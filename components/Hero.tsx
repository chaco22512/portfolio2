import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';

function Hero() {

  const [text, count]= useTypewriter({
    words:["Hi, My Name is Yusuke",
    "I am a Developper", "I am a Designer", "I am a Creator"],
    loop:true,
    delaySpeed:2000,
  })

  return (
    <div>

      <BackgroundCircle />

      <h1>
      <span>{text}</span>
      <Cursor cursorColor='#f7ab0a'></Cursor>
      </h1>
    </div>
  )
}

export default Hero