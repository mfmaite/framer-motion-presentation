import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion';

import foto1 from '../../assets/example1.png';
import foto2 from '../../assets/example2.png';

const Slide5 = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className='w-full h-full flex flex-col items-center justify-center text-black p-32'>
      <div className='absolute top-2 right-2 text-gray-500 font-sans'>
        Source: <a href='https://www.linkedin.com/pulse/why-im-love-framer-motion-kedgard-cordero/'>https://www.linkedin.com/pulse/why-im-love-framer-motion-kedgard-cordero/</a>
      </div>

      <div className='flex flex-row h-full'>
        <div>
          <motion.div
            layoutId={1}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="p-4"
            onClick={() => setSelectedId(1)}
          >
            <img src={foto1} alt='' className='rounded-lg' />
          </motion.div>
        </div>

        <div className='flex items-end'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="p-4"
            onClick={() => setSelectedId(2)}
          >
            <img src={foto2} alt='' className='rounded-lg' />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <div onClick={() => setSelectedId(null)} className='bg-black opacity-50 w-full h-full fixed top-0 left-00 z-10'/>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='z-20 absolute'
            >
              <img src={selectedId === 1 ? foto1 : foto2} alt='' className='rounded-lg' />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Slide5
