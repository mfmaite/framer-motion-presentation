import React, { useEffect, useState } from 'react'

import { ReactComponent as RightArrow } from '../../assets/bold-arrow-right.svg';
import { ReactComponent as LeftArrow } from '../../assets/bold-arrow-left.svg';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

const Carousel = () => {
  const [slide, setSlide] = useState(1);

  const nextStep = () => setSlide(slide === 3 ? 1 : slide + 1);
  const prevStep = () => setSlide(slide === 1 ? 3 : slide - 1);

  useEffect(() => { console.log(slide);}, [slide])

  return (
    <div className='bg-white w-full h-full rounded-xl relative handwritten'>
      {slide === 1 && <Slide1 />}
      {slide === 2 && <Slide2 />}
      {slide === 3 && <Slide3 />}

      <div className='flex absolute bottom-4 right-6'>
        <button>
          <LeftArrow onClick={prevStep} className="h-auto w-14" />
        </button>

        <button className='ml-6'>
          <RightArrow onClick={nextStep} className="h-auto w-14" />
        </button>
      </div>
    </div>
  )
}

export default Carousel;
