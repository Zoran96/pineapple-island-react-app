import React from 'react'
import useWindowWidthHook from '../../hooks/useWindowWidthHook'

import '../../styles/index.scss'

import { data } from './data'

const Footer = () => {
  const { windowWidth } = useWindowWidthHook()

  if(windowWidth > 1024) {
    return (
      <footer className='footer'>
        <div className="wrap">
          <div className="footer__container">
            <div className="footer__info">
              <h2 className="footer__info-heading">{data.heading}</h2>
              <p className="main-text">{data.text}</p>
            </div>
            <div className="footer__subscribe">
              <h4 className="footer__subscribe-heading">{data.subscribeHeading}</h4>
              <p className="secondary-text--white">{data.subscribeText}</p>
              <div className="footer__form">
                <input type="email" name="email" placeholder='Email' className='footer__form-input' />
                <a href="#" className="footer__form-btn">{data.btn}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  } else {
    return (
      <footer className='footer'>
        <div className="wrap">
          <div className="footer__container">
            <h2 className="footer__heading">{data.heading}</h2>
            <span className="footer__copyright">{data.copyrightIcon}{data.copyright}</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer