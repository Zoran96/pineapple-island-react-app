import React from 'react'

const BenefitContent = ({data}) => {
  return (
    <div className={!data.inverted ? 'benefits__content' : 'benefits__content benefits__content--inverted'}>
      <div className="benefits__img" style={{
        backgroundImage: `url(${data.img})`
      }}></div>
      <div className="benefits__icons">
        {data.icons.map((icons, index) => ((
          <div className='benefits__icons-container' key={index}>
            {icons.ico}            
            <span className="benefits__icons-description" key={index}>{icons.desc}</span>
          </div>
        )))}
      </div>
    </div>
  )
}

export default BenefitContent

