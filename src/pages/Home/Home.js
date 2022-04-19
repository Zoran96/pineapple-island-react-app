import React from 'react'

import Banner from '../../components/Banner/Banner'
import TextSliderModule from '../../components/TextSliderModule/TextSliderModule'
import TextImgModule from '../../components/TextImgModule/TextImgModule'
import Benefits from '../../components/Benefits/Benefits'
import Gallery from '../../components/Gallery/Gallery'
import Features from '../../components/Features/Features'
import CTABlock from '../../components/CTABlock/CTABlock'
import Form from '../../components/Form/Form'

const Home = () => {
  return (
    <main className='main'>
      <Banner />
      <TextSliderModule />
      <TextImgModule />
      <Benefits />
      <Gallery />
      <Features />
      <CTABlock />
      <Form />
    </main>
  )
}

export default Home