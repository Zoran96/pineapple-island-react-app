import React from 'react'


import '../../styles/index.scss'
import { data } from './data'

import useWindowWidthHook from '../../hooks/useWindowWidthHook'

import useYupHook from '../../hooks/useYupHook'

const Form = () => {
  const { windowWidth } = useWindowWidthHook()
  const { register, handleSubmit, errors, submitForm } = useYupHook()

  return (
    <section className="form">
      <div className="wrap">
        <div className="form__container">
          <h1 className="main-heading">{data.heading}</h1>
          <p className="secondary-text--dark">{windowWidth > 1024 ? data.text : data.textReponsive}</p>
          <form className="form__form" onSubmit={handleSubmit(submitForm)}>
            <label htmlFor="firstName" className="form__label">
              <input 
                type='text'
                name='firstName' 
                placeholder='Name'
                className='form__input'
                {...register('firstName')}
                onFocus={e => e.target.placeholder = ''}
                onBlur={e => e.target.placeholder = 'Name'}
              />
              <span className="form__error">{errors.firstName?.message}</span>
            </label>
            <label htmlFor="phoneNumber" className="form__label">
              <input 
                type='text'
                name='phoneNumber' 
                placeholder='Phone No'
                className='form__input'
                {...register('phoneNumber')}
                onFocus={e => e.target.placeholder = ''}
                onBlur={e => e.target.placeholder = 'Phone No'}
              />
              <span className="form__error">{errors.phoneNumber?.message}</span>
            </label>
            <label htmlFor="email" className="form__label">
              <input 
                type='email'
                name='email' 
                placeholder='Email'
                className='form__input'
                {...register('email')}
                onFocus={e => e.target.placeholder = ''}
                onBlur={e => e.target.placeholder = 'Email'}
              />
              <span className="form__error">{errors.email?.message}</span>
            </label>
            <label htmlFor="message" className="form__label form__label-textarea">
              {windowWidth < 768 ? 'Message' : ''}
              <textarea 
                name='message'
                placeholder={windowWidth < 768 ? '' : 'Message'}
                className='form__input form__input-textarea'
                {...register('message')}
                onFocus={e => e.target.placeholder = ''}
                onBlur={e => e.target.placeholder = 'Message'}
                ></textarea>
              <span className="form__error">{errors.message?.message}</span>
            </label>
            <button className="main-btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form