import React from 'react'

import { data } from './data'

import '../../styles/index.scss'

const CTABlock = () => {
  return (
    <section className='cta-block'>
      <div className="wrap">
        <div className="cta-block__container">
          <div className="cta-block__content">
            <h1 className="main-heading">{data.heading}</h1>
            <p className="secondary-text">{data.text}</p>
            <a href="#" className="secondary-btn">{data.btn}</a>
          </div>
          <div className="cta-block__bg" style={{
            backgroundImage: `url(${data.img})`
          }}></div>
        </div>
      </div>
    </section>
  )
}

export default CTABlock
