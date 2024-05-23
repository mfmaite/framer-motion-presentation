import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion';

import logo from '../assets/framer-motion-logo.png';

const Page1 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <div className='pageContainer flex items-center justify-center'>
      <div className='flex items-center justify-center'>
        <motion.div
          ref={ref}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          style={{ scale }}
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
