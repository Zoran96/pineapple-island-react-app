import React from 'react'

import { data } from './data'

import '../../styles/index.scss'

const Features = () => {
  return (
    <section className='features'>
      <div className="wrap">
        <div className="features__container">
          <div className="features__img" style={{
            backgroundImage: `url(${data.img})`
          }}></div>
          <div className="features__content">
            <h1 className="main-heading">{data.heading}</h1>
            <ul className="features__list">
              {data.features.map((feature, index) => ((
                <li className='features__feature' key={index}>{feature.text} {feature.check}</li>
              )))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
