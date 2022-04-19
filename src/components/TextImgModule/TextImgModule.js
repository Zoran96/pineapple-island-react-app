import React from 'react'

import '../../styles/index.scss'

import { data } from './data'

const TextImgModule = () => {
  return (
    <section className='text-img-module'>
      <div className="wrap">
        <div className="text-img-module__container">
          <h1 className="main-heading--white">{data.heading}</h1>
          <div className="text-img-module__content">
            <div className="text-img-module__description">
              <p className="text-img-module__text">{data.text}</p>
            </div>
            <div className="text-img-module__img" style={{
              backgroundImage: `url(${data.img})`
            }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextImgModule