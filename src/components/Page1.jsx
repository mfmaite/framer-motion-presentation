import React from 'react'

import { motion } from 'framer-motion';

import logo from '../assets/framer-motion-logo.png';

const Page1 = () => {
  return (
    <div className='pageContainer flex items-center justify-center'>
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <img src={logo} alt='' />
        </motion.div>
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
        >
          <h3 className="font-bold text-xl">Stop being afraid of animations with</h3>
          <h1 className='text-end font-extrabold text-6xl pl-16'>Framer Motion</h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Page1;
