import React from 'react'

import '../../styles/index.scss'

import { data } from './data'

import useWindowWidthHook from '../../hooks/useWindowWidthHook'

import BenefitContent from './BenefitContent'

const Benefits = () => {
  const { windowWidth } = useWindowWidthHook()

  return (
    <section className='benefits'>
      <div className="wrap">
        <div className="benefits__container">
          <h1 className="main-heading">{windowWidth > 1024 ? data.heading : data.headingResponsive}</h1>
          {data.content.map((content, index) => ((
            <BenefitContent data={content} key={index} />
          )))}
        </div>
      </div>
    </section>
  )
}

export default Benefits