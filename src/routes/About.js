import React from 'react'

import Navbar from '../conponents/Navbar';
import Footer from '../conponents/Footer';
import HeroImg2 from '../conponents/HeroImg2';
import AboutcomponentSlider from '../conponents/AboutcomponentSlider';

const About = () => {
   return (
      <div>
         <Navbar/>
         <HeroImg2 heading='ABOUT' text='Im a Friendly Front-ent Developer.'/>
         <AboutcomponentSlider/>
         <Footer/>
      </div>
   )
}

export default About