import React from 'react'

import { motion } from 'framer-motion';

import logo from '../../assets/framer-motion-logo.png';

const Slide3 = () => {
  return (
    <div className='w-full h-full flex items-center justify-center text-black p-32'>
      <span className='text-5xl'>
        Fue desarrollada por Framer™
        (cuyo producto principal es una herramienta de prototipado no code).
      </span>


      <motion.img
        animate={{
          rotate: [0, 15, -15, 0, -15, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatDelay: 0.5,
        }}
        src={logo}
        alt=''
        className="w-36"
      />
    </div>
  )
}

export default Slide3
