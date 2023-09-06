import React from 'react';
import Navbar from '../conponents/Navbar';
import Footer from '../conponents/Footer';
import HeroImg2 from '../conponents/HeroImg2';
import PricingCard from '../conponents/PricingCard';
import WorkCard from '../conponents/WorkCard';
const Project = () => {
   return (
      <div>
         <Navbar/>
         <HeroImg2 heading="PROJECT." text ="Some of my most recent works "/>
         <PricingCard/>
         <WorkCard/>
         <Footer/>
      </div>
   )
}

export default Project
