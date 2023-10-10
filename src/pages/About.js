import React from 'react'
import AboutBanner from '../Component/Pages/About/AboutBanner'
import AboutDetails from '../Component/Pages/About/AboutDetails'
import AboutSection from '../Component/Pages/About/AboutSection'

const About = () => {
  return (
    <div>
      <AboutSection title={'About Us'} />
      <AboutDetails />
      <AboutBanner />
    </div>
  )
}

export default About