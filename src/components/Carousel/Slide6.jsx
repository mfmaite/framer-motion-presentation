import React from 'react';
import example from '../../assets/image.png';
import cat from '../../assets/crying-cat.png';

const Slide6 = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <img src={example} alt='' className='rounded-lg' style={{ scale: "2" }} />

      <div className='absolute top-2 right-2 text-gray-500 font-sans flex'>
        Perdón la calidad terrible
        <img src={cat} alt='' className="w-32 h-auto" />
      </div>
    </div>
  )
}

export default Slide6;
