import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion';

import { ReactComponent as RightArrow } from '../../assets/bold-arrow-right.svg';
import { ReactComponent as LeftArrow } from '../../assets/bold-arrow-left.svg';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';

const Carousel = () => {
  const [slide, setSlide] = useState(1);
  const [direction, setDirection] = useState(0);

  const slides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />, <Slide6 />];

  const nextStep = () => {
    setDirection(1);
    setSlide(slide === slides.length ? 1 : slide + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setSlide(slide === 1 ? slides.length : slide - 1);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '20%' : '-20%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '20%' : '-20%',
      opacity: 0
    })
  };

  return (
    <div className='bg-white w-full h-full rounded-xl relative handwritten'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 }
          }}
          className="absolute w-full h-full"
        >
          {slides[slide - 1]}
        </motion.div>
      </AnimatePresence>

      <div className='flex absolute bottom-4 right-6'>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          onClick={prevStep}
        >
          <LeftArrow className="h-auto w-14" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          onClick={nextStep}
          className='ml-6'
        >
          <RightArrow className="h-auto w-14" />
        </motion.button>
      </div>
    </div>
  )
}

export default Carousel;
