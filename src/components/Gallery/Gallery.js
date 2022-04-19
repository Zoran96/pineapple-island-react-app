import React from 'react'

import { data } from './data'

import '../../styles/index.scss'

import useWindowWidthHook from '../../hooks/useWindowWidthHook'

const Gallery = () => {
  const { windowWidth } = useWindowWidthHook()

  return (
    <section className='gallery'>
      <div className="wrap">
        <div className="gallery__container">
          <h1 className="main-heading">{windowWidth > 1024 ? data.heading : data.headingResponsive}</h1>
          <p className="main-text--gray">{data.text}</p>
          <div className="gallery__content">
            {windowWidth > 1024 && data.gallery.map((img, index) => ((
              <img src={img} alt='' className='gallery__img' key={index}/>
            )))}
            {windowWidth < 1025 && data.galleryResponsive.map((img, index) => ((
              <img src={img} alt='' className='gallery__img' key={index}/>
            )))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery