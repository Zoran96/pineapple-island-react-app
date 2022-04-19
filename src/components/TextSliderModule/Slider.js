import React, { useState } from 'react'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = ({slides}) => {
  const [currentSlide, setcurrentSlide] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setcurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const previousSlide = () => {
    setcurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='text-slider-module__slider-container'>
      <FaAngleLeft className='text-slider-module__slider-prev' onClick={previousSlide} />
      <FaAngleRight className='text-slider-module__slider-next' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div className={index === currentSlide ? 'text-slider-module__slider-slide text-slider-module__slider-slide--active' : 'text-slider-module__slider-slide'} key={index}>
          {index === currentSlide && (
            <img src={slide.img} alt='' className='text-slider-module__slider-img' />
          )}
          </div>
        );
      })}
    </div>
  )
}

export default Slider