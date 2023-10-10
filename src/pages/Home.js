import React, {useState} from 'react'
import Blog from '../Component/Pages/Home/Blog'
import HeroSection from '../Component/Pages/Home/HeroSection'
import HomeCards from '../Component/Pages/Home/HomeCards'
import MakeWine from '../Component/Pages/Home/MakeWine'
import OurProduction from '../Component/Pages/Home/OurProduction'
import Testimonial from '../Component/Pages/Home/Testimonial'
import WhyTrust from '../Component/Pages/Home/WhyTrust'


const Home = ({action, handleAction}) => {

  return (
    <div>
      <HeroSection action={action}  handleAction={handleAction} />
      <HomeCards />
      <OurProduction />
      <MakeWine />
      <WhyTrust />
      <Testimonial />
      <Blog />
    </div>
  )
}

export default Home