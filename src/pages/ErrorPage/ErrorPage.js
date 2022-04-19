import React from 'react'
import { Link } from 'react-router-dom'

import { data } from './data'

import '../../styles/index.scss'

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className="wrap">
        <div className="error-page__container">
          <h1 className="error-page__heading">{data.heading}</h1>
          <h2 className="error-page__sub-heading">{data.subHeading}</h2>
          <Link to={'/'} className="main-btn">{data.btn}</Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage