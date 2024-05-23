import React, { useState } from 'react'

import { motion } from 'framer-motion';

import foto1 from '../../assets/example1.png';
import foto2 from '../../assets/example2.png';

const Slide5 = () => {
  const [selectedId, setSelectedId] = useState(null);

  const images = ['../../assets/example1.png', '../../assets/example2.png'];

  return (
    <div className='w-full h-full flex flex-col items-center justify-center text-black p-32'>
      <div className='absolute top-2 right-2 text-gray-500 font-sans'>
        Source: <a href='https://www.linkedin.com/pulse/why-im-love-framer-motion-kedgard-cordero/'>https://www.linkedin.com/pulse/why-im-love-framer-motion-kedgard-cordero/</a>
      </div>

      <motion.div
        layoutId={1}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="w-7/12 absolute top-left-1/4"
      >
        <img src={foto1} alt='' />
      </motion.div>

      <motion.div
        layoutId={2}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="w-7/12"
      >
        <img src={foto2} alt='' />
      </motion.div>
    </div>
  )
}

export default Slide5
