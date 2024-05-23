import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

import { ReactComponent as ArrowRightSVG } from '../assets/arrow-right.svg';

const spanVariants = {
  opened: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -40,
    opacity: 0
  }
}

const Page2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='pageContainer pl-16 py-16'>
      <h1 className='font-extrabold text-6xl pb-12'>
        Agenda
      </h1>
      <div className='pl-10'>
        <motion.div
          ref={ref}
          variants={spanVariants}
          animate={isInView ? "opened" : "closed"}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex items-center mb-10'
        >
          <ArrowRightSVG className="w-10 h-auto" />
          <span className="text-4xl ml-4" >
            <span className="font-extrabold">What?</span> - ¿Qué es Framer Motion?
          </span>
        </motion.div>

        <motion.div
          className='flex items-center mb-10'
          variants={spanVariants}
          animate={isInView ? "opened" : "closed"}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ArrowRightSVG className="w-10 h-auto" />
          <span
            className="text-4xl ml-4"
          >
            <span className="font-extrabold">Why?</span> - ¿Por qué usar Framer Motion?
          </span>
        </motion.div>

        <motion.div
          variants={spanVariants}
          animate={isInView ? "opened" : "closed"}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex items-center mb-10'
        >
          <ArrowRightSVG className="w-10 h-auto" />
          <span className="text-4xl ml-4">
            <span className="font-extrabold">When?</span> - ¿Cuándo usar <i className="text-2xl">(o no)</i> Framer Motion?
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default Page2
