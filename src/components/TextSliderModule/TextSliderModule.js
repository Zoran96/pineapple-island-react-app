import React from 'react'

import '../../styles/index.scss'

import { data } from './data'

import Slider from './Slider'

const TextSliderModule = () => {
  return (
    <section className='text-slider-module'>
      <div className="wrap">
        <div className="text-slider-module__container">
          <h1 className="main-heading">{data.heading}</h1>
          <div className="text-slider-module__content">
            <div className="text-slider-module__slider">
              <Slider slides={data.slider} />
            </div>
            <div className="text-slider-module__description">
              <p className="text-slider-module__text">{data.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextSliderModule