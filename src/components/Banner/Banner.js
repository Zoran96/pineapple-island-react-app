import React from 'react'

import bannerBG from '../../assets/images/banner-img.jpg'

import { data } from './data'

import useWindowWidthHook from '../../hooks/useWindowWidthHook'

import '../../styles/index.scss'

const Banner = () => {
  const { windowWidth } = useWindowWidthHook()

  return (
    <section className='banner'>
      <div className="wrap">
        <div className="banner__container">
          <div className="banner__content" style={{
            backgroundImage: windowWidth < 1025 ? `url(${bannerBG})` : 'none'
          }}>
            <h1 className="banner__heading">{data.heading}</h1>
            <p className="main-text">{data.text}</p>
            <a href="#" className="banner__btn">{data.btn}</a>
          </div>
        </div>
        <div className="banner__bg">
          <img src={bannerBG} alt="" className="banner__img" />
        </div>
      </div>
    </section>
  )
}

export default Banner